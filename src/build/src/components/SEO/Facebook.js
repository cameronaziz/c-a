const code = `import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../config/website';

const Facebook = () => (
  <Helmet>{config.siteFBAppID && <meta property="fb:app_id" content={config.siteFBAppID} />}</Helmet>
);

export default Facebook;
`;

const links = [
  {
    line: 4,
    location: [
      'src',
      'components',
      'website.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'Facebook.js',
  label: 'Facebook.js',
};