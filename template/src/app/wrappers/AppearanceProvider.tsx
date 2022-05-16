import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from '@emotion/react';
import {themes} from '../theme';
import {useSelector} from 'react-redux';

export const AppearanceProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const themeMode = useSelector(state => state.appearance.theme ?? colorScheme);
  return (
    <ThemeProvider theme={themeMode === 'light' ? themes.light : themes.dark}>
      {children}
    </ThemeProvider>
  );
};
