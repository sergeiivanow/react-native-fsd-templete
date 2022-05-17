import {configureStore} from '@reduxjs/toolkit';
import {appearanceReducer} from 'features/changeAppearance/model/slice';

export const store = configureStore({
  reducer: {
    appearance: appearanceReducer,
  },
});
