import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screens} from 'screens'
import {configureTabOptions} from '../../options'
import {s} from 'shared/lang'
import {ScreenRoutes} from 'shared/config'

const Tab = createBottomTabNavigator<AppNavigation.MainNavigator>()

export const Main = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={ScreenRoutes.Home}
      component={Screens.get(ScreenRoutes.Home)!}
      options={configureTabOptions({
        title: s.home,
      })}
    />
    <Tab.Screen
      name={ScreenRoutes.Settings}
      component={Screens.get(ScreenRoutes.Settings)!}
      options={configureTabOptions({
        title: s.settings,
      })}
    />
  </Tab.Navigator>
)
