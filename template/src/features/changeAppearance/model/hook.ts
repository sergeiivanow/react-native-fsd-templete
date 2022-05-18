import {useRef, useEffect} from 'react';
import {Appearance} from 'react-native';
import {useAppDispatch, useAppSelector} from 'shared/lib/hooks';
import {change} from './slice';
import {useTheme} from '@emotion/react';
import {Navigation} from 'react-native-navigation';
import {mainRoot, setDefaultOptionsWithTabs} from 'shared/navigation';

export function useAppearance(
  {withEffect}: {withEffect: boolean} = {withEffect: false},
) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const themeScheme = useAppSelector(
    state => state.appearance.theme ?? Appearance.getColorScheme() ?? 'light',
  );
  const didMount = useRef(false);

  useEffect(() => {
    if (!withEffect) {
      return;
    }
    if (!didMount?.current) {
      didMount.current = true;
      return;
    }
    setDefaultOptionsWithTabs(theme, {currentTabIndex: 1});
    Navigation.setRoot(mainRoot);
  }, [theme, withEffect]);

  function changeThemeScheme() {
    dispatch(change(themeScheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    themeScheme,
    changeThemeScheme,
  };
}
