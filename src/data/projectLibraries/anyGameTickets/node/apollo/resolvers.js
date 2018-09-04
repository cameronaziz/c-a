const code = `export default {
  Mutation: {
    updatePageTitle: (_, { pageTitle }, { cache }) => {
      if (pageTitle) {
        cache.writeData({
          data: {
            application: {
              __typename: 'Application',
              pageTitle,
            },
          },
        });
      }
      return null;
    },
    setNavigationBlock: (_, { blockStatus }, { cache }) => {
      cache.writeData({
        data: {
          application: {
            navigationBlocked: blockStatus,
            __typename: 'Application',
          },
        },
      });
      return blockStatus;
    },
    selectClient: (_, { client }, { cache }) => {
      cache.writeData({
        data: {
          __typename: 'ClientType',
          selectedClient: client,
        },
      });
      if (client) { return client; }
      return null;
    },
  },
  TaskType: {
    recentlyCompleted: () => false,
  },
};`;

const links = [];

export default {
  code,
  links,
};
