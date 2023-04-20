import React from 'react'
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native'
import {TouchableOpacityProps} from 'react-native'
import {fluidSize} from '../../lib'
import {Colors, useStyles} from '../../theme'
import {Font} from '../Font'

export interface ButtonProps {
  title: string
  loading?: boolean
  disabled?: boolean
  active?: boolean
  color?: Colors
  textColor?: Colors
}

export function TextButton(props: ButtonProps & TouchableOpacityProps) {
  const {styles} = useStyles(createStyles)
  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      activeOpacity={0.8}
      color={props.color}
      style={styles.container}
      {...props}>
      {props.loading ? (
        <ActivityIndicator testID="loading" />
      ) : (
        <Font
          family="roboto"
          weight="regular"
          size="large"
          color={props.textColor ?? 'text'}>
          {props.title ?? ''}
        </Font>
      )}
    </TouchableOpacity>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: fluidSize(44, 'vertical'),
      borderRadius: fluidSize(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
