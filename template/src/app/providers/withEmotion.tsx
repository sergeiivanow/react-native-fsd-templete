import React from 'react';
import {AppearanceProvider} from '../wrappers/AppearanceProvider';

export const withEmotion = (component: () => React.ReactNode) => () => {
  return <AppearanceProvider>{component}</AppearanceProvider>;
};
