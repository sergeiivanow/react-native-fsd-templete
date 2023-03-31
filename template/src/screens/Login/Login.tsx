import React from 'react'
import {Button} from 'react-native'
import {ScreenCard} from 'shared/ui'
import {s} from 'shared/lang'
import {useNavigationActions} from 'shared/lib'

export const Login = () => {
  const {goToMain} = useNavigationActions()
  return (
    <ScreenCard>
      <Button
        title={s.login}
        onPress={() => {
          goToMain()
        }}
      />
    </ScreenCard>
  )
}
