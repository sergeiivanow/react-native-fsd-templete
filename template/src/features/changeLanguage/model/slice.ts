import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Lang = 'ru' | 'en'
interface LanguageState {
  lang: Lang
}

const initialState: LanguageState = {
  lang: 'ru',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload
    },
  },
})

export const {change} = languageSlice.actions

export const languageReducer = languageSlice.reducer
