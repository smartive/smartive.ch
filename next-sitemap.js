// Pages that we consider to have a higher priority than others
const priorities = {
  '/': 1,
  '/agentur': 0.9,
  '/team': 0.8,
  '/angebot': 0.7,
  '/projekte': 0.6,
};

module.exports = {
  siteUrl: 'https://smartive.ch',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  exclude: ['/newsletter', '/welcome', '/links'],
  // The default priority should be 0.5 (source: https://www.sitemaps.org/PROTOCOL.html)
  priority: 0.5,
  transform: async ({ changefreq, priority, autoLastmod }, loc) => ({
    loc,
    changefreq,
    priority: priorities[loc] || priority,
    lastmod: autoLastmod && new Date().toISOString(),
  }),
};
