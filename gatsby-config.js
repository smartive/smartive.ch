module.exports = {
  siteMetadata: {
    title: 'smartive',
    siteUrl: 'https://smartive.ch',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'case-images',
        path: `${__dirname}/src/pages/cases`,
        ignore: ['**/*.js'],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'medium-local-plugin',
      options: {
        path: `${__dirname}/src/blog/posts.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-zopfli',
    'gatsby-plugin-brotli',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'smartive AG',
        short_name: 'smartive AG',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#1e324b',
        display: 'minimal-ui',
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35082807-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/cases/bosw-2019', '/einweihung', '/newsletter'],
        query: `{
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage(filter: {path: {regex: "/^(?!.*?404).*/"}}) {
        edges {
          node {
            path
          }
        }
      }
    }
`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://smartive.us1.list-manage.com/subscribe/post?u=b7783121353e2508ff91af015&amp;id=5e1c047a69',
      },
    },
  ],
};
