import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Screens} from 'screens'
import {loginOptions} from '../../options'

const Stack = createNativeStackNavigator<AppNavigation.WelcomeNavigator>()

export const Welcome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={'login'}
      component={Screens.get('login')!}
      options={loginOptions}
    />
  </Stack.Navigator>
)
