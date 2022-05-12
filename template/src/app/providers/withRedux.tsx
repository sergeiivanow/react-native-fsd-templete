import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

export const withRedux = (screens: any, store: any) => {
  screens.forEach((ScreenComponent: any, key: string) => {
    Navigation.registerComponent(
      key,
      () => props =>
        (
          <Provider store={store}>
            <ScreenComponent {...props} />
          </Provider>
        ),
      () => ScreenComponent,
    );
  });
};
