import React from 'react';
import {EmotionProvider} from '../wrappers/EmotionProvider';

export const withEmotion = (Component: React.FC) => (
  <EmotionProvider>{Component}</EmotionProvider>
);
