import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screens} from 'screens'
import {s} from 'shared/lang'

const Tab = createBottomTabNavigator<AppNavigation.MainNavigator>()

export const Main = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="home"
      component={Screens.get('home')!}
      options={{
        title: s.home,
      }}
    />
    <Tab.Screen
      name="settings"
      component={Screens.get('settings')!}
      options={{
        title: s.settings,
      }}
    />
  </Tab.Navigator>
)
