import React from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export const withGestureHandler = (Component: React.FC) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <GestureHandlerRootView style={{flex: 1}}>{Component}</GestureHandlerRootView>
)
