import '@emotion/react';
import {
  fontSizes,
  fontWeights,
  familyName,
  lineHeights,
  spaces,
  sizes,
  colors,
} from 'app/theme/defaultTheme';

declare module '@emotion/react' {
  export type FontSizes = keyof typeof fontSizes;
  export type FontWeights = keyof typeof fontWeights;
  export type FamilyName = keyof typeof familyName;
  export type LineHeights = keyof typeof lineHeights;
  export type Spaces = keyof typeof spaces;
  export type Sizes = keyof typeof sizes;
  export type Colors = keyof typeof colors;
  type FontFamilies = {
    [key in FontWeights]: string;
  };

  export interface Theme {
    fontWeights: {
      [key in FontWeights]: string;
    };
    familyName: {[key in FamilyName]: string};
    fontFamilies: {
      [key in FamilyName]: FontFamilies;
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
