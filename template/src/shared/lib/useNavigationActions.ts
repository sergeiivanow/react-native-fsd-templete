import {useNavigation, CommonActions} from '@react-navigation/native'

export function useNavigationActions() {
  const navigation = useNavigation()
  function resetMain() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'main',
            state: {
              routes: [
                {
                  name: 'settings',
                },
              ],
            },
          },
        ],
      }),
    )
  }
  return {resetMain}
}
