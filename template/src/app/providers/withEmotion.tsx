import React from 'react'
import {ThemeProvider} from '@emotion/react'
import {themes} from '../theme'
import {useAppearance} from 'features/changeAppearance'

const EmotionProvider = ({children}: {children: React.ReactNode}) => {
  const {themeScheme} = useAppearance()
  return <ThemeProvider theme={themes[themeScheme]}>{children}</ThemeProvider>
}

export const withEmotion = (Component: React.FC) => (
  <EmotionProvider>{Component}</EmotionProvider>
)
