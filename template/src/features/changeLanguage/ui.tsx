import React from 'react'
import {Switch} from 'react-native'
import {useLanguage} from './model/hook'
import {useNavigation, StackActions} from '@react-navigation/native'

export function SwitcherLanguage() {
  const navigation = useNavigation()
  const {lang, changeLanguage} = useLanguage()

  function handleOnChangeLanguage() {
    changeLanguage()
    navigation.dispatch(StackActions.replace('main'))
  }

  return <Switch value={lang === 'en'} onChange={handleOnChangeLanguage} />
}
