import {Navigation} from 'react-native-navigation';
import {Theme} from '@emotion/react';
import * as Config from '../config';

export function setDefaultOptions(theme: Theme) {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: theme.colors.backgroundDefault,
    },
    layout: {
      backgroundColor: theme.colors.backgroundDefault,
      componentBackgroundColor: theme.colors.backgroundDefault,
    },
    topBar: {
      title: {
        color: theme.colors.textDefault,
      },
      backButton: {
        color: theme.colors.textDefault,
      },
      background: {
        color: theme.colors.backgroundDefault,
      },
    },
    bottomTabs: {
      currentTabIndex: 1,
      backgroundColor: theme.colors.backgroundDefault,
    },
  });
}

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
