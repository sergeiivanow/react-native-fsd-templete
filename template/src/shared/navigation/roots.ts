import {Routes} from './routes';

export const welcomeRoot = {
  root: {
    component: {
      name: Routes.Welcome,
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
                  name: Routes.Home,
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
                  name: Routes.Settings,
                },
              },
            ],
          },
        },
      ],
    },
  },
};
