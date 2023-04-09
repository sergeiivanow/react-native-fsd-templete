import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {css} from '@emotion/native'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <SafeAreaView
      style={css`
        flex: 1;
      `}>
      {children}
    </SafeAreaView>
  )
}
