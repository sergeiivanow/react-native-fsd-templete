import React from 'react'
import {ThemeProvider} from 'shared/theme'

export const withTheme = (Component: React.ReactNode) => (
  <ThemeProvider>{Component}</ThemeProvider>
)
