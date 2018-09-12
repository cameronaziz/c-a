const code = `import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../../config/website';

const OpenGraph = ({ siteTitle, description, image }) => (
  <Helmet>
    <meta property="og:locale" content={config.ogLanguage} />
    <meta property="og:site_name" content={config.ogSiteName} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </Helmet>
);

OpenGraph.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default OpenGraph;
`;

const links = [
  {
    line: 5,
    location: [
      'src',
      'components',
      'website.js'
    ]
  }
];

const libraries = ['react','propTypes','reactHelmet'];

export default {
  libraries,
  code,
  links,
  name: 'OpenGraph.js',
  label: 'OpenGraph.js',
};