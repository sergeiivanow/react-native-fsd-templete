import {useColorScheme} from 'react-native';
import {useAppDispatch, useAppSelector} from 'shared/lib/hooks';
import {change} from './slice';

export function useAppearance() {
  const systemColorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const themeScheme = useAppSelector(
    state => state.appearance.theme ?? systemColorScheme,
  );

  function changeThemeScheme() {
    dispatch(change(themeScheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    themeScheme,
    changeThemeScheme,
  };
}
