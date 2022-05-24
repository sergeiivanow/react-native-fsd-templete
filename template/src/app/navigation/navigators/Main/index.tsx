import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screens} from 'screens'
import {homeOptions, settingsOptions} from '../../options'

const Tab = createBottomTabNavigator<AppNavigation.MainNavigator>()

export const Main = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="home"
      component={Screens.get('home')!}
      options={homeOptions}
    />
    <Tab.Screen
      name="settings"
      component={Screens.get('settings')!}
      options={settingsOptions}
    />
  </Tab.Navigator>
)
