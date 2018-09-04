import server from './server';
import client from './client';
import renderer from './renderer';
import defaults from './apollo/defaults';
import index from './apollo/index';
import resolvers from './apollo/resolvers';
import typeDefs from './apollo/typeDefs';

export default {
  label: 'Node',
  name: 'node',
  children: [
    {
      label: 'server.js',
      ...server,
    },
    {
      label: 'client.js',
      ...client,
    },
    {
      label: 'renderer.js',
      ...renderer,
    },
    {
      label: 'apollo',
      children: [
        {
          label: 'defaults.js',
          ...defaults,
        },
        {
          label: 'index.js',
          ...index,
        },
        {
          label: 'resolvers.js',
          ...resolvers,
        },
        {
          label: 'typeDefs.js',
          ...typeDefs,
        },
      ],
    },
  ],
};
