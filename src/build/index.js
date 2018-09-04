import tree from './src/components/lucentDisplay';

export default {
  libraries: ['react', 'reactEmotion', 'svg'],
  shortcuts: [
    {
      library: 'react',
      location: ['Common', 'InteractiveElement.js'],
    },
    {
      library: 'reactEmotion',
      location: ['styled.js'],
    },
    {
      library: 'svg',
      location: ['LibraryIcons', 'D3.js'],
    },
  ],
  tree,
};
