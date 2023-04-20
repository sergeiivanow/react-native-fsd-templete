import {palette} from './theme.palette'
import {fluidType} from '../lib'

export const fontFamily = {
  roboto: 'roboto',
}

export const fontWeights = {
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
}

export const fontNames = {
  roboto: {
    regular: undefined,
    medium: undefined,
    bold: undefined,
  },
}

export const fontSizes = {
  xxSmall: fluidType({min: 10, max: 12}),
  xSmall: fluidType({min: 12, max: 14}),
  small: fluidType({min: 14, max: 16}),
  medium: fluidType({min: 16, max: 18}),
  large: fluidType({min: 20, max: 22}),
  xLarge: fluidType({min: 24, max: 26}),
  xxLarge: fluidType({min: 32, max: 34}),
}

export const colors = {
  empty: palette.transparent,
  backgroundDefault: palette.white,
  // navigation
  primary: palette.azureRadiance,
  background: palette.concrete,
  card: palette.white,
  text: palette.shark,
  border: palette.alto,
  notification: palette.redOrange,
}
