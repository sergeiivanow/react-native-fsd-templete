import {createSlice, PayloadAction} from '@reduxjs/toolkit'
export interface LanguageState {
  lang: 'ru' | 'en'
}

const initialState: LanguageState = {
  lang: 'ru',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.lang = action.payload
    },
  },
})

export const {change} = languageSlice.actions

export const languageReducer = languageSlice.reducer
