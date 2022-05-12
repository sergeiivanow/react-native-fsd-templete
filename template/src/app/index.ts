import {Navigation} from 'react-native-navigation';
import {withRedux} from './providers/withRedux';
import {Screens} from '../screens';
import * as Config from '../shared/config';
import {store} from './store';

withRedux(Screens, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Config.ScreenRoutes.Home,
            },
          },
        ],
      },
    },
  });
});
