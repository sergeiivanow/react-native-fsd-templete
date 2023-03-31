import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Main} from '../Main'
import {Welcome} from '../Welcome'
import {configureOptions} from '../../options'
import {s} from 'shared/lang'

const RootStack = createNativeStackNavigator<AppNavigation.Root>()

export const Root = () => {
  return (
    <RootStack.Navigator initialRouteName="welcome">
      <RootStack.Screen
        name={'welcome'}
        component={Welcome}
        options={configureOptions({
          headerShown: true,
          title: s.welcome,
        })}
      />
      <RootStack.Screen
        name="main"
        component={Main}
        options={configureOptions()}
      />
    </RootStack.Navigator>
  )
}
