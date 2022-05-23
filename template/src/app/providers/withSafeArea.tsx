import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export const withSafeArea = (Component: React.FC) => (
  <SafeAreaProvider>{Component}</SafeAreaProvider>
)
