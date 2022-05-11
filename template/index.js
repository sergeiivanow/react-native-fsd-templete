/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const store = configureStore({
  reducer: {},
});

Navigation.registerComponent(
  'com.myApp.WelcomeScreen',
  () => props =>
    (
      <Provider store={store}>
        <App {...props} />
      </Provider>
    ),
  () => App,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
