import {RouteProp} from '@react-navigation/native'
import {NativeStackNavigationOptions} from '@react-navigation/native-stack'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {s} from 'shared/lang'

type Props = {
  route:
    | RouteProp<AppNavigation.WelcomeNavigator, 'login'>
    | RouteProp<AppNavigation.MainNavigator, keyof AppNavigation.MainNavigator>
  navigation: any
}

export const loginOptions = ({}: Props): NativeStackNavigationOptions => ({
  title: s.welcome,
})

export const homeOptions = ({}: Props): BottomTabNavigationOptions => ({
  title: s.home,
})

export const settingsOptions = ({}: Props): BottomTabNavigationOptions => ({
  title: s.settings,
})
