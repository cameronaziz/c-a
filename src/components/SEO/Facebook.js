import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../config/website';

const Facebook = () => (
  <Helmet>{config.siteFBAppID && <meta property="fb:app_id" content={config.siteFBAppID} />}</Helmet>
);

export default Facebook;
