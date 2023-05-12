import React from 'react'
import {TextProps, StyleSheet, Text} from 'react-native'
import {
  FontSizes,
  FontFamily,
  FontWeights,
  Colors,
  useStyles,
  Theme,
} from '../../theme'

interface FontProps {
  size?: FontSizes
  family?: FontFamily
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
  children?: React.ReactNode
  underline?: boolean
  alignCenter?: boolean
  textAlign?: 'left' | 'auto' | 'center' | 'right' | 'justify'
  textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase'
  devMode?: boolean
}

export function Font(props: FontProps & TextProps) {
  const {styles} = useStyles(createStyles(props))
  return (
    <Text adjustsFontSizeToFit {...props} style={styles.container}>
      {props.devMode ? props.size : props.children}
    </Text>
  )
}

const createStyles = (props: FontProps) => (theme: Theme) => {
  let lineHeight = props.lineHeight
  if (lineHeight) {
    lineHeight = lineHeight * theme.fontSizes[props.size ?? 'medium']
  }
  return StyleSheet.create({
    container: {
      lineHeight,
      includeFontPadding: false,
      textAlignVertical: 'center',
      fontFamily: theme.fontNames.roboto[props.weight ?? 'medium'],
      fontSize: theme.fontSizes[props.size ?? 'medium'],
      color: theme.colors[props.color ?? 'text'],
    },
  })
}
