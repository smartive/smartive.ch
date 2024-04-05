const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const waitOn = require('wait-on');
require('dotenv').config();
require('dotenv').config({ path: `.env.local`, override: true });

const ignoreListErrors = [
  'value.onChange(callback) is deprecated',
  "The target origin provided ('https://calendly.com')", // Calendly shizzle conflicting with http://localhost
  '[Fast Refresh] performing full reload', // Nextjs Fast Refresh is a feature in dev mode, don't worry about it
  'GPU stall due to ReadPixels', // Farmer project
  "It looks like the video you're trying to play will not work on this system!", // HLS streaming video
  '[analytics.js] Failed to load Analytics.js TypeError: Failed to fetch',
  'Third-party cookie will be blocked. Learn more in the Issues tab.',
  'Custom state pseudo classes are changing from ":--webkit-media-controls-play-button" to ":state(webkit-media-controls-play-button)" soon. See more here: https://github.com/w3c/csswg-drafts/issues/4805', // External Video player
  "Error with Permissions-Policy header: Unrecognized feature: 'ch-ua-form-factor'", // Youtube videos
];

const ignoreListLocations = [
  'https://cdn.segment.io/analytics.js', // Calendly
];

const dynamicRoutes = {
  'nachhaltigkeit/[year]/': 'nachhaltigkeit/2019/',
  'nachhaltigkeit/[year]/scope-3': 'nachhaltigkeit/2019/scope-3',
};

const getAllDatoCMSRoutes = async () => {
  const allDataRoutesQuery = `
    query Routes {
      pages: allPages(filter: {parent: {exists: "false"}, AND: { slug: { neq: "home" } }}) {
        slug
      }
      childPages: allPages(filter: {parent: {exists: "true"}}) {
        slug
        parent {
          slug
          parent {
            slug
            parent {
              slug
              parent {
                slug
              }
            }
          }
        }
      }
      allTopics {
        slug
      }
      allProjects {
        slug
      }
      allOffers {
        slug
      }
      allBlogposts {
        slug
      }
    }
`;

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Exclude-Invalid': 'true',
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const response = await fetch('https://graphql.datocms.com/', {
    cache: 'no-cache',
    method: 'POST',
    headers,
    body: JSON.stringify({ query: allDataRoutesQuery }),
  });

  if (!response.ok) throw new Error(`DatoCMS request failed: ${response.statusText}`);

  const { data } = await response.json();

  // We only go 5 levels deep in the page tree (see query above).
  // This is enough for our current page structure.
  // If we create a deeper page tree, we will notice, because the tests will fail. :-)
  const childPages = data.childPages.map((page) => {
    const slug = page.slug;
    const parentSlugs = [];
    let parent = page.parent;
    while (parent) {
      parentSlugs.push(parent.slug);
      parent = parent.parent;
    }
    return `${parentSlugs.reverse().join('/')}/${slug}`;
  });

  return [
    '/', // This is the homepage
    ...data.pages.map((page) => page.slug),
    ...childPages,
    ...data.allTopics.map((tag) => `t/${tag.slug}`),
    ...data.allProjects.map((project) => `projekte/${project.slug}`),
    ...data.allOffers.map((project) => `angebot/${project.slug}`),
    ...data.allBlogposts.map((project) => `blog/${project.slug}`),
  ];
};

const getStandaloneRoutes = (dirPath = './src/app/(standalone)', arrayOfFiles = []) => {
  files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = `${dirPath}/${file}`;

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getStandaloneRoutes(filePath, arrayOfFiles);
    } else if (filePath.includes('page.tsx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles.map((path) => path.replace('./src/app/(standalone)/', '').replace('/page.tsx', ''));
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const routesToCheck = [...getStandaloneRoutes(), ...(await getAllDatoCMSRoutes())];
  const errorsAndWarnings = {};
  let routeIndex = 0;

  console.log('Going to check the following routes:', routesToCheck);

  page.on('console', (msg) => {
    // track errors & warnings but ignore some of them, where we know they are not relevant
    if (
      (msg.type() === 'error' || msg.type() === 'warning') &&
      ignoreListErrors.every((ignore) => !msg.text().includes(ignore)) &&
      ignoreListLocations.every((ignore) => !msg.location().url.includes(ignore))
    ) {
      errorsAndWarnings[page.url()] = { message: msg.text(), location: msg.location().url };
    }
  });

  try {
    await waitOn({ resources: ['http://localhost:3000/'] });

    while (routesToCheck[routeIndex] !== undefined) {
      try {
        if (dynamicRoutes[routesToCheck[routeIndex]]) {
          await page.goto(`http://localhost:3000/${dynamicRoutes[routesToCheck[routeIndex]]}`);
        } else {
          await page.goto(`http://localhost:3000/${routesToCheck[routeIndex]}`);
        }
      } catch (error) {
        if (error.name === 'TimeoutError') {
          // retry on navigation timeout
          routeIndex--;
        } else {
          throw error;
        }
      }
      routeIndex++;
    }
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }

  if (Object.keys(errorsAndWarnings).length > 0) {
    console.error('Errors or warnings found in console on routes');
    console.table(errorsAndWarnings);
    process.exitCode = 1;
  }
})();
