import '@emotion/react';
import {
  fontSizes,
  fontWeights,
  familyNames,
  lineHeights,
  spaces,
  sizes,
  colors,
} from 'app/theme/defaultTheme';

declare module '@emotion/react' {
  export type FontSizes = keyof typeof fontSizes;
  export type FontWeights = keyof typeof fontWeights;
  export type FamilyNames = keyof typeof familyNames;
  export type LineHeights = keyof typeof lineHeights;
  export type Spaces = keyof typeof spaces;
  export type Sizes = keyof typeof sizes;
  export type Colors = keyof typeof colors;
  type FontFamily = {
    [key in FontWeights]: string;
  };

  export interface Theme {
    fontWeights: {
      [key in FontWeights]: string;
    };
    familyNames: {[key in FamilyNames]: string};
    fontFamily: {
      [key in FamilyNames]: FontFamily;
    };
    fontSizes: {[key in FontSizes]: string};
    lineHeights: {
      [key in LineHeights]: stirng;
    };
    spaces: {[key in Spaces]: string};
    sizes: {[key in Sizes]: string};
    colors: {[key in Colors]: string};
  }
}
