import seatingChart from './form/seatingChart';

import node from './node';

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
  tree: [
    node,
    {
      label: '5',
      items: [
        {
          label: '6.js',
          code: seatingChart.code,
          links: seatingChart.links,
        },
        {
          label: '7.js',
          code: seatingChart.code,
          links: seatingChart.links,
        },
      ],
    },
    {
      label: '8',
      items: [
        {
          label: '9.js',
          code: seatingChart.code,
          links: seatingChart.links,
        },
      ],
    },
  ],
};
