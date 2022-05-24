import React from 'react'
import styled from '@emotion/native'

interface ScreenCardProps {
  children: React.ReactNode
}

export function ScreenCard({children}: ScreenCardProps) {
  return <Card>{children}</Card>
}

const Card = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
