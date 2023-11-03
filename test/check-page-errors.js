const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const waitOn = require('wait-on');
require('dotenv').config();
require('dotenv').config({ path: `.env.local`, override: true });

const ignoreListRoutes = ['/_document', '/_app', '/api/', '/blog/[slug]', '/index'];
const ignoreListErrors = ['value.onChange(callback) is deprecated'];
const dynamicRoutes = {
  'nachhaltigkeit/[year]/': 'nachhaltigkeit/2019/',
  'nachhaltigkeit/[year]/scope-3': 'nachhaltigkeit/2019/scope-3',
  'welcome/[slug]': 'welcome/peter',
  'r/[redirectUrl]': 'r/schade-schokolade',
};

const getAllRoutes = (dirPath = './src/pages', arrayOfFiles = []) => {
  files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllRoutes(dirPath + '/' + file, arrayOfFiles);
    } else {
      const filePath = path.join(dirPath, '/', file);
      if (ignoreListRoutes.every((ignore) => !filePath.includes(ignore))) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles.map((path) => path.replace('src/pages/', '').replace('index.tsx', '').replace('.tsx', ''));
};

const getAllDatoCMSRoutes = async () => {
  const allDataRoutesQuery = `
  query Routes {
    allPages {
      slug
    }
    allProjectTags {
      slug
    }
    allProjects {
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

  return [
    ...data.allPages.map((page) => page.slug),
    ...data.allProjectTags.map((tag) => `tags/${tag.slug}`),
    ...data.allProjects.map((project) => `projekte/${project.slug}`),
  ];
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const routesToCheck = getAllRoutes();
  const datoRoutesToCheck = await getAllDatoCMSRoutes();
  const errorsAndWarnings = {};
  let routeIndex = 0;

  console.log('Going to check the following routes:', [...datoRoutesToCheck, ...routesToCheck]);

  page.on('console', (msg) => {
    // track errors & warnings but ignore some of them, where we know they are not relevant
    if (
      (msg.type() === 'error' || msg.type() === 'warning') &&
      ignoreListErrors.every((ignore) => !msg.text().includes(ignore))
    ) {
      errorsAndWarnings[page.url()] = msg.text();
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
