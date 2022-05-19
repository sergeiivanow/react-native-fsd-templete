import {Navigation, OptionsBottomTabs} from 'react-native-navigation';
import {Theme} from '@emotion/react';
import { Routes } from './routes';

export function setNavigationThemeWithTabs(
  theme: Theme,
  options?: OptionsBottomTabs,
) {
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
      backgroundColor: theme.colors.backgroundDefault,
      ...options,
    },
  });
}

export function setRootWithTabs(options?: OptionsBottomTabs) {
  Navigation.setRoot({
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
        options: {
          bottomTabs: {
            ...options,
          },
        },
      },
    },
  });
}
