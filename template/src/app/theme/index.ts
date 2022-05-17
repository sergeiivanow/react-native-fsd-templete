import {Theme} from '@emotion/react';
import * as defaulTheme from './defaultTheme';
import * as darkTheme from './darkTheme';
import {ThemeScheme} from 'features/types';

export const themes: {
  [key in NonNullable<ThemeScheme>]: Theme;
} = {
  light: {
    ...defaulTheme,
  },
  dark: {
    ...defaulTheme,
    colors: darkTheme.colors,
  },
};
