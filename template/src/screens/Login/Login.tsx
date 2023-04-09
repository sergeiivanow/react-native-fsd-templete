import React from 'react'
import {Button} from 'react-native'
import * as UI from 'shared/ui'
import {s} from 'shared/lang'
import {useNavigationActions} from 'shared/lib'

export const Login = () => {
  const {goToMain} = useNavigationActions()
  return (
    <UI.Container>
      <Button
        title={s.login}
        onPress={() => {
          goToMain()
        }}
      />
    </UI.Container>
  )
}
