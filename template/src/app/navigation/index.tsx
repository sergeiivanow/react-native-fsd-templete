import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {useFlipper} from '@react-navigation/devtools'
import {withProviders} from '../providers'
import {Root} from './navigators'
import {themes} from '../theme'
import {useAppearance} from 'features/changeAppearance'

const AppNavigaton = () => {
  const navigationRef = useNavigationContainerRef()
  const {themeScheme} = useAppearance()

  useFlipper(navigationRef)

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: themes[themeScheme].colors,
      }}>
      <Root />
    </NavigationContainer>
  )
}

export const App = () => withProviders(<AppNavigaton />)
