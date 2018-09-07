const code = `import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../../config/website';
import Favicon from './Favicon';
import OpenGraph from './OpenGraph';
import Twitter from './Twitter';
import Facebook from './Facebook';

/**
 * SEO generator component.
 * @reactProps {string} title - The title to be added to the standard title tag.
 */

const SEO = ({ title }) => {
  const siteTitle = \`\${title}\${config.siteTitle}\`;
  const description = config.siteDescription;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const image = config.siteUrl + realPrefix + config.siteLogo;
  const url = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  return (
    <Fragment>
      <Helmet>
        <html lang={config.siteLanguage} />
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content={config.backgroundColor} />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>
      <OpenGraph siteTitle={siteTitle} description={description} image={image} />
      <Twitter siteTitle={siteTitle} description={description} image={image} />
      <Facebook />
      <Favicon />
    </Fragment>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SEO;
`;

const links = [
  {
    line: 5,
    location: [
      'src',
      'components',
      'website.js',
    ],
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'SEO',
      'Favicon.js',
    ],
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'SEO',
      'OpenGraph.js',
    ],
  },
  {
    line: 8,
    location: [
      'src',
      'components',
      'SEO',
      'Twitter.js',
    ],
  },
  {
    line: 9,
    location: [
      'src',
      'components',
      'SEO',
      'Facebook.js',
    ],
  },
];

const libraries = ['react', 'propTypes', 'reactHelmet'];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};
