import {Appearance} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {withProviders} from './providers';
import {Screens} from '../screens';
import {welcomeRoot, setDefaultOptions} from 'shared/navigation';
import {store} from './store';
import {themes} from 'shared/theme';

Screens.forEach((ScreenComponent: React.FC, key: string) => {
  Navigation.registerComponent(
    key,
    () => props => withProviders(<ScreenComponent {...props} />),
    () => ScreenComponent,
  );
});

const theme =
  themes[
    store.getState().appearance.theme ?? Appearance.getColorScheme() ?? 'light'
  ];
setDefaultOptions(theme);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(welcomeRoot);
});
