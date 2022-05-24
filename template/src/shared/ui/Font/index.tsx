import React from 'react'
import {TextProps} from 'react-native'
import styled from '@emotion/native'
import {FontSizes, FamilyNames, FontWeights, Colors} from '@emotion/react'

interface FontProps {
  size?: FontSizes
  familyNames?: FamilyNames
  weight?: FontWeights
  color?: Colors
  children?: React.ReactNode
}

export function Font(props: FontProps & TextProps) {
  return <Text {...props}>{props.children}</Text>
}

const Text = styled.Text<Omit<FontProps, 'children'>>`
  include-font-padding: false;
  text-align-vertical: top;
  font-family: ${({theme, familyNames, weight}) =>
    theme.fontFamily[familyNames ?? 'roboto'][weight ?? 'regular']};
  font-size: ${({theme, size}) => theme.fontSizes[size ?? 'medium']};
  line-height: ${({theme, size}) => theme.lineHeights[size ?? 'medium']};
  color: ${({theme, color}) => theme.colors[color ?? 'text']};
`
