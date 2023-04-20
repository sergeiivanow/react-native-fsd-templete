import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors, useStyles, Theme} from '../theme'

interface SpacerProps {
  size: number
  color: Colors
}

export const Spacer = (props: SpacerProps) => {
  const {styles} = useStyles(createStyles(props))
  return <View style={styles.container} />
}

const createStyles = (props: SpacerProps) => (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: props.size,
      width: props.size,
      backgroundColor: theme.colors[props.color],
    },
  })
