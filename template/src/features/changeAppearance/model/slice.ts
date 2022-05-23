import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ThemeScheme} from '@emotion/react'

export interface AppearanceState {
  theme: ThemeScheme
}

const initialState: AppearanceState = {
  theme: null,
}

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<ThemeScheme>) => {
      state.theme = action.payload
    },
  },
})

export const {change} = appearanceSlice.actions

export const appearanceReducer = appearanceSlice.reducer
