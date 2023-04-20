import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {useFlipper} from '@react-navigation/devtools'
import {withProviders} from '../providers'
import {Root} from './navigators'
import {useTheme} from 'shared/theme'

const AppNavigaton = () => {
  const navigationRef = useNavigationContainerRef()
  const {theme} = useTheme()

  useFlipper(navigationRef)

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: theme.colors,
      }}>
      <Root />
    </NavigationContainer>
  )
}

export const App = () => withProviders(<AppNavigaton />)
