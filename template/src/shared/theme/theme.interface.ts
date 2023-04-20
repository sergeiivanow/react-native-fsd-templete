import {fontSizes, fontWeights, fontFamily, colors} from './default.theme'

export type FontSizes = keyof typeof fontSizes
export type FontWeights = keyof typeof fontWeights
export type FontFamily = keyof typeof fontFamily
export type Colors = keyof typeof colors
type FontNames = {
  [key in FontWeights]: string | undefined
}

export interface Theme {
  fontWeights: {
    [key in FontWeights]: string
  }
  fontFamily: {[key in FontFamily]: string}
  fontNames: {
    [key in FontFamily]: FontNames
  }
  fontSizes: {[key in FontSizes]: number}
  colors: {[key in Colors]: string}
}

export type ThemeScheme = 'light' | 'dark' | null
