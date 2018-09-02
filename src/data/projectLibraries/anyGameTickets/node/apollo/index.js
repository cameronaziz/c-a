import defaults from './defaults';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const code = `import fetch from 'isomorphic-fetch';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';
import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';

import defaults from './defaults';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { storeCookie } from '../cookies';

const defaultOptions = {
  watchQuery: {
    errorPolicy: 'ignore',
  },
  query: {
    errorPolicy: 'ignore',
  },
  mutate: {
    errorPolicy: 'ignore',
  },
};

const errorLink = onError((data) => {
  if (data.graphQLErrors && data.graphQLErrors[0] !== null) {
    data.graphQLErrors.map(({ message, locations, path }) => console.log(
      \`[GraphQL error]: Message: \${message}, Location: \${locations}, Path: \${path}\`,
    ));
  }

  if (data.networkError) {
    console.log(\`[Network error]: \${data.networkError}\`);
    data.forward(data.operation);
  }
});

const httpLink = new HttpLink({
  uri: 'http://data-staging.elevare.io:4000',
  credentials: 'same-origin',
});

const retryLink = new RetryLink();

const clientConfig = {
  ssrMode: true,
  fetch,
  defaultOptions,
};

const createStateServer = cache => withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});

const createStateBrowser = cache => withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});


const createAuth = tokens => (
  new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        token: tokens.token || null,
        refreshtoken: tokens.refreshToken || null,
      },
    });
    return forward(operation);
  }));


const afterwareLink = new ApolloLink((operation, forward) => forward(operation).map((response) => {
  const context = operation.getContext();
  const { response: { headers } } = context;
  if (headers) {
    const token = headers.get('X-Token');
    if (token) {
      storeCookie('TOKEN', token);
    }
    const refreshToken = headers.get('X-Refresh-Token');
    if (refreshToken) {
      storeCookie('REFRESH_TOKEN', refreshToken);
    }
  }

  return response;
}));

const createLink = (stateLink, tokens) => {
  const authLink = createAuth(tokens);
  return ApolloLink.from([
    errorLink,
    retryLink,
    authLink,
    stateLink,
    afterwareLink.concat(httpLink),
  ]);
};

export const getClient = (tokens) => {
  if (typeof window === 'undefined') {
    const cache = new InMemoryCache();
    const stateLink = createStateServer(cache);
    const link = createLink(stateLink, tokens);
    clientConfig.link = link;
    clientConfig.cache = cache;
    return new ApolloClient(clientConfig);
  }
  const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
  const stateLink = createStateBrowser(cache);
  const link = createLink(stateLink, tokens);
  clientConfig.link = link;
  clientConfig.cache = cache;
  return new ApolloClient(clientConfig);
};`;

const links = [
  {
    line: 10,
    Location: ['node', 'apollo', 'defaults'],
    code: defaults,
  },
  {
    line: 11,
    Location: ['node', 'apollo', 'resolvers'],
    code: resolvers,
  },
  {
    line: 12,
    Location: ['node', 'apollo', 'typeDefs'],
    code: typeDefs,
  },
];

export default {
  name: ['node', 'apollo', 'index'],
  label: 'index.js',
  code,
  links,
};
