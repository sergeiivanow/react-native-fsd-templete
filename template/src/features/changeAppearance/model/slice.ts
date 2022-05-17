import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppearanceState {
  theme: string | null;
}

const initialState: AppearanceState = {
  theme: null,
};

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const {change} = appearanceSlice.actions;

export const appearanceReducer = appearanceSlice.reducer;
