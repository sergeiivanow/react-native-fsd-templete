import React from 'react';
import {Navigation} from 'react-native-navigation';
import {withProviders} from './providers';
import {Screens} from 'screens';
import {welcomeRoot} from 'shared/navigation';

Screens.forEach((ScreenComponent: any, key: string) => {
  Navigation.registerComponent(
    key,
    props => withProviders(<ScreenComponent {...props} />),
    () => ScreenComponent,
  );
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  layout: {
    backgroundColor: 'white',
    componentBackgroundColor: 'white',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(welcomeRoot);
});
