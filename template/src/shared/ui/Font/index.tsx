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
  const {styles} = useStyles(createStyles({weight: props.weight}))
  return (
    <Text adjustsFontSizeToFit {...props} style={styles.container}>
      {props.devMode ? props.size : props.children}
    </Text>
  )
}

const createStyles =
  (props: {weight?: FontWeights; lineHeight?: number; size?: FontSizes}) =>
  (theme: Theme) => {
    let lineHeight = props.lineHeight
    if (lineHeight) {
      lineHeight = lineHeight * theme.fontSizes[props.size ?? 'medium']
    }
    return StyleSheet.create({
      container: {
        lineHeight,
        height: 40,
        includeFontPadding: false,
        textAlignVertical: 'center',
        fontFamily: theme.fontNames.roboto[props.weight ?? 'medium'],
        fontSize: theme.fontSizes.medium,
        color: theme.colors.text,
      },
    })
  }
