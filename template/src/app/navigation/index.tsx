import React, {useState, useEffect} from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {SystemBars} from 'react-native-bars'
import RNBootSplash from 'react-native-bootsplash'
import {useFlipper} from '@react-navigation/devtools'
import {withProviders} from '../providers'
import {Root} from './navigators'
import {themes} from '../theme'
import {s} from 'shared/lang'
import {useLanguage} from 'features/changeLanguage'
import {useAppearance} from 'features/changeAppearance'

const AppNavigaton = () => {
  const navigationRef = useNavigationContainerRef()
  const [isReady, setIsReady] = useState(false)
  const {lang} = useLanguage()
  const {themeScheme} = useAppearance()
  const [systemBarsIsReady, setSystemBarsIsReady] = useState(false)

  useFlipper(navigationRef)

  useEffect(() => {
    s.setLanguage(lang)
    setIsReady(true)
  }, [lang])

  function handleOnReady() {
    RNBootSplash.hide({fade: true}).then(() => {
      setTimeout(() => {
        setSystemBarsIsReady(true)
      }, 200)
    })
  }

  return (
    <>
       {systemBarsIsReady && (
        <SystemBars
          barStyle={themeScheme === 'light' ? 'dark-content' : 'light-content'}
        />
      )}
      {isReady && (
        <NavigationContainer
          ref={navigationRef}
          theme={{
            ...DefaultTheme,
            colors: themes[themeScheme].colors,
          }}
          onReady={handleOnReady}>
          <Root />
        </NavigationContainer>
      )}
    </>
  )
}

export const App = () => withProviders(<AppNavigaton />)
