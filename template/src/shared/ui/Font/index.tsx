import React from 'react'
import {TextProps} from 'react-native'
import {
  useTheme,
  FontSizes,
  FamilyNames,
  FontWeights,
  Colors,
} from '@emotion/react'
import styled from '@emotion/native'

interface FontProps {
  size?: FontSizes
  familyNames?: FamilyNames
  weight?: FontWeights
  color?: Colors
  children?: React.ReactNode
}

const Text = styled.Text`
  include-font-padding: false;
  text-align-vertical: top;
`

export function Font({
  size,
  familyNames,
  weight,
  color,
  children,
  ...props
}: FontProps & TextProps) {
  const theme = useTheme()

  return (
    <Text
      style={{
        fontFamily:
          theme.fontFamily[familyNames ?? 'roboto'][weight ?? 'regular'],
        fontSize: +theme.fontSizes[size ?? 'medium'],
        lineHeight: +theme.fontSizes[size ?? 'medium'],
        color: theme.colors[color ?? 'textDefault'],
      }}
      {...props}>
      {children}
    </Text>
  )
}
