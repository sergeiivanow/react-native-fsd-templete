import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import appearanceReducer from 'features/changeAppearance/model';

export const store = configureStore({
  reducer: {
    appearance: appearanceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
