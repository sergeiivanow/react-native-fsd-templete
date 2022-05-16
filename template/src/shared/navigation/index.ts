import * as Config from '../config';

export const welcomeRoot = {
  root: {
    component: {
      name: Config.ScreenRoutes.Welcome,
    },
  },
};

export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: Config.ScreenRoutes.Home,
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: Config.ScreenRoutes.Settings,
                },
              },
            ],
          },
        },
      ],
    },
  },
};
