const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Cameron Aziz - Javascript Engineer', // Navigation and Site Title
  siteTitleAlt: 'Cameron Aziz - Javascript Engineer - Los Angeles', // Alternative Site title for SEO
  siteUrl: 'https://cameronaziz.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Los Angeles based software engineer who enjoys React, MongoDB and GraphQL.',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@cameronaziz', // Twitter Username
  ogSiteName: 'cameronaziz', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
