import React from 'react';
import {EmotionProvider} from '../wrappers/EmotionProvider';

export const withEmotion = (component: () => React.ReactNode) => () => {
  return <EmotionProvider>{component}</EmotionProvider>;
};
