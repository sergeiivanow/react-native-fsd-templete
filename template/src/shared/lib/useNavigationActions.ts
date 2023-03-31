import {
  useNavigation,
  CommonActions,
  StackActions,
} from '@react-navigation/native'
import {ScreenRoutes, NavigatorRoutes} from '../config'

export function useNavigationActions() {
  const navigation = useNavigation<AppNavigation.NavigationProps>()

  function goToMain() {
    navigation.dispatch(StackActions.replace(NavigatorRoutes.Main))
  }

  function resetMain() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: NavigatorRoutes.Welcome,
            state: {
              routes: [
                {
                  name: ScreenRoutes.Login,
                },
              ],
            },
          },
        ],
      }),
    )
  }

  return {
    goToMain,
    resetMain,
    goTo: navigation.navigate,
    goBack: navigation.goBack,
  }
}
