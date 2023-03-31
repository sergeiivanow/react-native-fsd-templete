import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Screens} from 'screens'
import {configureOptions} from '../../options'
import {ScreenRoutes} from 'shared/config'

const Stack = createNativeStackNavigator<AppNavigation.WelcomeNavigator>()

export const Welcome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenRoutes.Login}
      component={Screens.get(ScreenRoutes.Login)!}
      options={configureOptions()}
    />
  </Stack.Navigator>
)
