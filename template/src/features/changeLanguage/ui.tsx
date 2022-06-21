import React from 'react'
import {Switch} from 'react-native'
import {useLanguage} from './model/hook'
import {useNavigationActions} from 'shared/lib'

export function SwitcherLanguage() {
  const {lang, changeLanguage} = useLanguage()
  const {resetMain} = useNavigationActions()

  function handleOnChangeLanguage() {
    changeLanguage()
    resetMain()
  }

  return <Switch value={lang === 'en'} onChange={handleOnChangeLanguage} />
}
