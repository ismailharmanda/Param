const config = {
  screens: {
    HomeStack: {
      screens: {
        HomeScreen: {
          path: 'home',
        },
      },
    },
    ProfileStack: {
      screens: {
        ProfileScreen: {
          path: 'profile',
        },
      },
    },
  },
};

const linking = {
  prefixes: ['param://'],
  config,
};
export {linking};
