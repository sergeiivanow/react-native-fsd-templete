import {Appearance} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {withProviders} from './providers';
import {Screens} from '../screens';
import {welcomeRoot, setNavigationThemeWithTabs} from 'shared/navigation';
import {store} from './store';
import {themes} from 'shared/theme';
import {s} from 'shared/lang';
import {persistor} from './store';

Screens.forEach((ScreenComponent: React.FC, key: string) => {
  Navigation.registerComponent(
    key,
    () => props => withProviders(<ScreenComponent {...props} />),
    () => ScreenComponent,
  );
});

persistor.subscribe(() => {
  const theme =
    themes[
      store.getState().appearance.theme ??
        Appearance.getColorScheme() ??
        'light'
    ];
  setNavigationThemeWithTabs(theme);
  s.setLanguage(store.getState().language.lang);
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(welcomeRoot);
  });
});
