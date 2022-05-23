import React, {useState, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {Root} from './navigators'
import {withProviders} from '../providers'
import {useLanguage} from 'features/changeLanguage/model'
import {useAppearance} from 'features/changeAppearance/model'
import {themes} from '../theme'
import {s} from 'shared/lang'
import RNBootSplash from 'react-native-bootsplash'

const AppNavigaton = () => {
  const [isReady, setIsReady] = useState(false)
  const {lang} = useLanguage()
  const {themeScheme} = useAppearance()

  useEffect(() => {
    s.setLanguage(lang)
    setIsReady(true)
  }, [lang])

  function handleOnReady() {
    RNBootSplash.hide({fade: true})
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {isReady && (
        <NavigationContainer
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
