import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Screens} from 'screens'
import {s} from 'shared/lang'

const Stack = createNativeStackNavigator<AppNavigation.WelcomeNavigator>()

export const Welcome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={'login'}
      component={Screens.get('login')!}
      options={{
        title: s.login,
      }}
    />
  </Stack.Navigator>
)
