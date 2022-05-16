import React from 'react';
import {TextProps} from 'react-native';
import {useCalcFluidSize} from '../../lib/hooks';
import {
  useTheme,
  FontSizes,
  FamilyName,
  FontWeights,
  Colors,
} from '@emotion/react';
import styled from '@emotion/native';

interface FontProps {
  size?: FontSizes;
  familyName?: FamilyName;
  weight?: FontWeights;
  color?: Colors;
  children?: React.ReactNode;
}

const Text = styled.Text`
  include-font-padding: false;
  text-align-vertical: top;
`;

export function Font({
  size,
  familyName,
  weight,
  color,
  children,
  ...props
}: FontProps & TextProps) {
  const theme = useTheme();
  const calc = useCalcFluidSize();

  return (
    <Text
      style={{
        fontFamily:
          theme.fontFamilies[familyName ?? 'roboto'][weight ?? 'regular'],
        fontSize: calc(theme.fontSizes[size ?? 'medium']),
        lineHeight: calc(theme.fontSizes[size ?? 'medium']),
        color: theme.colors[color ?? 'textDefault'],
      }}
      {...props}>
      {children}
    </Text>
  );
}
