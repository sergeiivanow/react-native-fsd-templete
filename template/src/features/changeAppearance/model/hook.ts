import {useRef, useEffect} from 'react';
import {Appearance} from 'react-native';
import {useAppDispatch, useAppSelector} from 'shared/lib/hooks';
import {change} from './slice';
import {useTheme} from '@emotion/react';
import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'shared/navigation';

export function useAppearance() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const themeScheme = useAppSelector(
    state => state.appearance.theme ?? Appearance.getColorScheme() ?? 'light',
  );
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount?.current) {
      didMount.current = true;
      return;
    }
    if (Object.keys(theme).length === 0) {
      return;
    }
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: theme.colors.backgroundDefault,
      },
      layout: {
        backgroundColor: theme.colors.backgroundDefault,
        componentBackgroundColor: theme.colors.backgroundDefault,
      },
      topBar: {
        title: {
          color: theme.colors.textDefault,
        },
        backButton: {
          color: theme.colors.textDefault,
        },
        background: {
          color: theme.colors.backgroundDefault,
        },
      },
      bottomTabs: {
        currentTabIndex: 1,
        backgroundColor: theme.colors.backgroundDefault,
      },
      animations: {
        setRoot: {
          alpha: {
            from: 0,
            to: 1,
            duration: 500,
          },
        },
      },
    });
    Navigation.setRoot(mainRoot);
  }, [theme]);

  function changeThemeScheme() {
    dispatch(change(themeScheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    themeScheme,
    changeThemeScheme,
  };
}
