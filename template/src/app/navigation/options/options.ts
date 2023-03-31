import {NativeStackNavigationOptions} from '@react-navigation/native-stack'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'

const commonNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const commonBottomTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  // tabBarHideOnKeyboard: true,
}

export function configureTabOptions(options: BottomTabNavigationOptions = {}) {
  return {
    ...commonBottomTabNavigationOptions,
    ...options,
  }
}

export function configureOptions(options: NativeStackNavigationOptions = {}) {
  return {
    ...commonNavigatorOptions,
    ...options,
  }
}
