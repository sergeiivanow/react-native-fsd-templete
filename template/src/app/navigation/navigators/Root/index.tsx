import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Main} from '../Main'
import {Welcome} from '../Welcome'
import {commonNavigatorOptions} from '../../options'

const RootStack = createNativeStackNavigator<AppNavigation.Root>()

export const Root = () => {
  return (
    <RootStack.Navigator
      initialRouteName="welcome"
      screenOptions={commonNavigatorOptions}>
      <RootStack.Screen name={'welcome'} component={Welcome} />
      <RootStack.Screen name="main" component={Main} />
    </RootStack.Navigator>
  )
}
