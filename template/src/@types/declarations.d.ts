import '@emotion/react'
import {
  fontSizes,
  fontWeights,
  fontFamily,
  spaces,
  colors,
} from 'app/theme/defaultTheme'

declare module '@emotion/react' {
  export type FontSizes = keyof typeof fontSizes
  export type FontWeights = keyof typeof fontWeights
  export type FontFamily = keyof typeof fontFamily
  export type Spaces = keyof typeof spaces
  export type Colors = keyof typeof colors
  type FontNames = {
    [key in FontWeights]: string
  }

  export interface Theme {
    fontWeights: {
      [key in FontWeights]: string
    }
    fontFamily: {[key in FontFamily]: string}
    fontNames: {
      [key in FontFamily]: FontNames
    }
    fontSizes: {[key in FontSizes]: string}
    spaces: {[key in Spaces]: string}
    colors: {[key in Colors]: string}
  }

  export type ThemeScheme = 'light' | 'dark' | null
}

declare module '*.svg' {
  import React from 'react'
  import {SvgProps} from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module '*.jpg' {
  const content: number
  export default content
}

declare module '*.png' {
  const content: number
  export default content
}
