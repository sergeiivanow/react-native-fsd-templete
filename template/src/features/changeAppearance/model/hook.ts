import {Appearance} from 'react-native'
import {useAppDispatch, useAppSelector} from 'shared/lib/hooks'
import {change} from './slice'

export function useAppearance() {
  const dispatch = useAppDispatch()
  const themeScheme = useAppSelector(
    state => state.appearance.theme ?? Appearance.getColorScheme() ?? 'light',
  )

  function changeThemeScheme() {
    dispatch(change(themeScheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    themeScheme,
    changeThemeScheme,
  }
}
