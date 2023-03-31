import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Main} from '../Main'
import {Welcome} from '../Welcome'
import {configureOptions} from '../../options'
import {s} from 'shared/lang'
import {NavigatorRoutes} from 'shared/config'

const RootStack = createNativeStackNavigator<AppNavigation.Root>()

export const Root = () => {
  return (
    <RootStack.Navigator initialRouteName={NavigatorRoutes.Welcome}>
      <RootStack.Screen
        name={NavigatorRoutes.Welcome}
        component={Welcome}
        options={configureOptions({
          headerShown: true,
          title: s.welcome,
        })}
      />
      <RootStack.Screen
        name={NavigatorRoutes.Main}
        component={Main}
        options={configureOptions()}
      />
    </RootStack.Navigator>
  )
}
