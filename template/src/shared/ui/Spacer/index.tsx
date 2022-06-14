import styled from '@emotion/native'
import {Spaces, Colors} from '@emotion/react'

interface SpacerProps {
  size: Spaces
  color?: Colors
}

export const Spacer = styled.View<SpacerProps>`
  height: ${({theme, size}) => theme.spaces[size ?? 'medium']};
  width: ${({theme, size}) => theme.spaces[size ?? 'medium']};
  background-color: ${({theme, color}) => theme.colors[color ?? 'background']};
`
