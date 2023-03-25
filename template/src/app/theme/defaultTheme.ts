import {pallete} from './pallete'
import {fluidType, fluidSize} from 'shared/lib'

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
    regular: '',
    medium: '',
    bold: '',
  },
}

export const fontSizes = {
  xxSmall: fluidType({min: 10, max: 12}) + 'px',
  xSmall: fluidType({min: 12, max: 14}) + 'px',
  small: fluidType({min: 14, max: 16}) + 'px',
  medium: fluidType({min: 16, max: 18}) + 'px',
  large: fluidType({min: 20, max: 22}) + 'px',
  xLarge: fluidType({min: 24, max: 26}) + 'px',
  xxLarge: fluidType({min: 32, max: 34}) + 'px',
}

export const spaces = {
  xxSmall: fluidSize({min: 10, max: 12}) + 'px',
  xSmall: fluidSize({min: 12, max: 14}) + 'px',
  small: fluidSize({min: 14, max: 16}) + 'px',
  medium: fluidSize({min: 16, max: 18}) + 'px',
  large: fluidSize({min: 20, max: 22}) + 'px',
  xLarge: fluidSize({min: 24, max: 26}) + 'px',
  xxLarge: fluidSize({min: 32, max: 34}) + 'px',
}

export const colors = {
  backgroundDefault: pallete.white,
  // navigation
  primary: pallete.azureRadiance,
  background: pallete.concrete,
  card: pallete.white,
  text: pallete.shark,
  border: pallete.alto,
  notification: pallete.redOrange,
}
