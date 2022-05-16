import Home from './Home';
import Settings from './Settings';
import Welcome from './Welcome';
import * as Config from 'shared/config';

export const Screens = new Map();
Screens.set(Config.ScreenRoutes.Welcome, Welcome);
Screens.set(Config.ScreenRoutes.Settings, Settings);
Screens.set(Config.ScreenRoutes.Home, Home);
