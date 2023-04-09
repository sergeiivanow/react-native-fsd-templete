import React from 'react'
import {ActivityIndicator} from 'react-native'
import {TouchableOpacityProps} from 'react-native'
import styled from '@emotion/native'
import {Colors} from '@emotion/react'
import {fluidSize} from '../../lib'

import {Font} from '../Font'

const StyledTextButton = styled.TouchableOpacity<
  ButtonProps & TouchableOpacityProps
>`
  width: 100%;
  height: ${fluidSize(44, 'vertical') + 'px'};
  border-radius: ${fluidSize(8) + 'px'};
  justify-content: center;
  align-items: center;
`

export interface ButtonProps {
  title: string
  loading?: boolean
  disabled?: boolean
  active?: boolean
  color?: Colors
  textColor?: Colors
}

export function TextButton(props: ButtonProps & TouchableOpacityProps) {
  return (
    <StyledTextButton
      disabled={props.disabled || props.loading}
      activeOpacity={0.8}
      color={props.color}
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
    </StyledTextButton>
  )
}
