import React from 'react'
import {Home} from './Home'
import {Settings} from './Settings'
import {Login} from './Login'

export const Screens = new Map<AppNavigation.Screens, React.FC>()

Screens.set('login', Login)
Screens.set('settings', Settings)
Screens.set('home', Home)
