import Home from './Home';
import Settings from './Settings';
import Welcome from './Welcome';
import {Routes} from 'shared/navigation';

export const Screens = new Map();
Screens.set(Routes.Welcome, Welcome);
Screens.set(Routes.Settings, Settings);
Screens.set(Routes.Home, Home);
