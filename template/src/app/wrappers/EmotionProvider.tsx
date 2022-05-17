import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {themes} from '../theme';
import {useAppearance} from 'features/changeAppearance/model';

interface EmotionProviderProps {
  children: React.ReactNode;
}

export const EmotionProvider = ({children}: EmotionProviderProps) => {
  const {themeScheme} = useAppearance();
  return (
    <ThemeProvider theme={themeScheme === 'light' ? themes.light : themes.dark}>
      {children}
    </ThemeProvider>
  );
};
