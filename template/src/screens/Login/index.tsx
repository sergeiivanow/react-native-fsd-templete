import React from 'react'
import {Button} from 'react-native'
import {useNavigation, StackActions} from '@react-navigation/native'
import {ScreenCard} from 'shared/ui'
import {s} from 'shared/lang'

export const Login = () => {
  const navigation = useNavigation()
  return (
    <ScreenCard>
      <Button
        title={s.login}
        onPress={() => {
          navigation.dispatch(StackActions.replace('main'))
        }}
      />
    </ScreenCard>
  )
}
