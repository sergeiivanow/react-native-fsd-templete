import React, {forwardRef} from 'react'
import {
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
} from 'react-native'
import {FontSizes, FontWeights, Colors, useStyles, Theme} from '../../theme'
import {fluidSize} from '../../lib'

export interface InputProps {
  width?: number | string
  height?: number | string
  flex?: number
  size?: FontSizes
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
  placeholderTextColor?: string
  multiline?: boolean
}

export const TextInput = forwardRef<RNTextInput, InputProps & TextInputProps>(
  (props, ref) => {
    const {styles, theme} = useStyles(createStyles({weight: props.weight}))

    return (
      <RNTextInput
        {...props}
        ref={ref}
        placeholderTextColor={props.placeholderTextColor ?? theme.colors.text}
        style={styles.container}
      />
    )
  },
)

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
        height: fluidSize(40),
        includeFontPadding: false,
        textAlignVertical: 'center',
        fontFamily: theme.fontNames.roboto[props.weight ?? 'medium'],
        fontSize: theme.fontSizes.medium,
        color: theme.colors.text,
      },
    })
  }
