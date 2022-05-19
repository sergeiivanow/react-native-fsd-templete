import {configureStore} from '@reduxjs/toolkit';
import {appearanceReducer} from 'features/changeAppearance/model/slice';
import {languageReducer} from 'features/changeLanguage/model/slice';

export const store = configureStore({
  reducer: {
    appearance: appearanceReducer,
    language: languageReducer,
  },
});
