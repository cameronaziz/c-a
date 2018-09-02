import tree from './src/components/lucentDisplay';

export default {
  // isLimited: true,
  libraries: ['node', 'react', 'd3'],
  shortcuts: [
    {
      library: 'node',
      location: ['node', 'server.js'],
    },
    {
      library: 'd3',
      location: ['node', 'renderer.js'],
    },
  ],
  tree,
};
