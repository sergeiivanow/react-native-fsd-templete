import {Appearance} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {withProviders} from './providers';
import {Screens} from 'screens';
import {welcomeRoot} from 'shared/navigation';
import {store} from './store';
import {themes} from './theme';

Screens.forEach((ScreenComponent: React.FC, key: string) => {
  Navigation.registerComponent(
    key,
    () => props => withProviders(<ScreenComponent {...props} />),
    () => ScreenComponent,
  );
});

function setupNavigationTheme() {
  const theme =
    themes[
      store.getState().appearance.theme ??
        Appearance.getColorScheme() ??
        'light'
    ];
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
    },
  });
}

Navigation.events().registerAppLaunchedListener(() => {
  setupNavigationTheme();
  Navigation.setRoot(welcomeRoot);
});
