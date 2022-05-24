import React from 'react'
import {Switch} from 'react-native'
import {useLanguage} from './model/hook'
import {useNavigation, CommonActions} from '@react-navigation/native'

export function SwitcherLanguage() {
  const navigation = useNavigation()
  const {lang, changeLanguage} = useLanguage()

  function handleOnChangeLanguage() {
    changeLanguage()
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'main',
            state: {
              routes: [
                {
                  name: 'settings',
                },
              ],
            },
          },
        ],
      }),
    )
  }

  return <Switch value={lang === 'en'} onChange={handleOnChangeLanguage} />
}
