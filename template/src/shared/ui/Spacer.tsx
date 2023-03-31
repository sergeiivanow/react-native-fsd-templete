import styled from '@emotion/native'
import {Colors} from '@emotion/react'

interface SpacerProps {
  size: number
  color?: Colors
}

export const Spacer = styled.View<SpacerProps>`
  height: ${({size}) => size + 'px'};
  width: ${({size}) => size + 'px'};
  background-color: ${({theme, color}) => theme.colors[color ?? 'empty']};
`
