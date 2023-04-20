import React from 'react'
import {Switch} from 'react-native'
import {useTheme} from 'shared/theme'

export function SwitcherAppearance() {
  const {themeScheme, toggleTheme} = useTheme()
  return <Switch value={themeScheme === 'dark'} onChange={toggleTheme} />
}
