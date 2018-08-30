const code = `import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { ApolloProvider } from 'react-apollo';
import Provider from '../contexts/api/provider';

import config from './config';
import routes from '../routes';
import { client } from '../sagas/apollo';

export default (req, store, context) => {
  const Application =
    (
      <Provider>
        <ReduxProvider store={store}>
          <ApolloProvider client={client}>
            <StaticRouter location={req.path} context={context}>
              <div>{renderRoutes(routes)}</div>
            </StaticRouter>
          </ApolloProvider>
        </ReduxProvider>
      </Provider>
    );

  const data = renderToString(Application);

  const helmet = Helmet.renderStatic();
  return \`
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">

      \${helmet.title.toString()}
      \${helmet.meta.toString()}
      <meta name="author" content="\${config.siteName}">
      <meta name="description" content="\${config.siteName} Application">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
      <link rel="shortcut icon" href="/public/images/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,900,700" rel="stylesheet">
      <script src="https://cdn.ravenjs.com/3.24.0/raven.min.js"crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css"/>
      <link rel="stylesheet" href="/public/css/rc-slider.css" />
      <link rel="stylesheet" href="/public/css/carbon.css" />
      <link rel="stylesheet" href="/public/css/carbon-watson.css" />
      <link rel="stylesheet" href="/public/css/carbon-grid.css" />
      <link rel="stylesheet" href="/public/css/style.css">
      <link rel="stylesheet" href="/public/css/cirrus.min.css">
      <link rel="stylesheet" href="/public/css/loader.css">
      
      <link rel="stylesheet" href="/public/css/trend-micro.css">
      <script src="http://cdn.everything.io/kickstart/3.x/js/kickstart.min.js"></script>


      
    </head>

    <body>
      <div id="app">\${data}</div>
      <script>
        window.INITIAL_STATE = \${serialize(store.getState())}
      </script>
      <script src="/public/build/client-bundle.js?version=1" charset="utf-8"></script>
    </body>
    </html>
  \`;
};`;

const links = [];

export default {
  label: 'renderer.js',
  name: 'renderer',
  code,
  links,
};
