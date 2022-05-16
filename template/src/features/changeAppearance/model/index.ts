import {createSlice} from '@reduxjs/toolkit';

export interface AppearanceState {
  theme: 'light' | 'dark';
}

const initialState: AppearanceState = {
  theme: 'light',
};

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    toogleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Action creators are generated for each case reducer function
export const {toogleTheme} = appearanceSlice.actions;

export default appearanceSlice.reducer;
