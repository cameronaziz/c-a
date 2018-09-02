const routes = [
  {
    hash: '#projects',
    location: 1.2,
    title: 'Projects',
  },
  {
    hash: '#about',
    location: 2.7,
    title: 'About',
  },
  {
    hash: '#contact',
    location: 3,
    title: 'Contact',
  },
];

export default hash => {
  if (hash && hash.startsWith('#')) {
    const route = routes.find(element => element.hash === hash);
    if (route) {
      return route;
    }
  }
  return undefined;
};
