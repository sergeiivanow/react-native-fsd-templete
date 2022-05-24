import React from 'react'
import {Switch} from 'react-native'
import {useAppearance} from './model'

export function SwitcherAppearance() {
  const {themeScheme, changeThemeScheme} = useAppearance()
  return <Switch value={themeScheme === 'dark'} onChange={changeThemeScheme} />
}
