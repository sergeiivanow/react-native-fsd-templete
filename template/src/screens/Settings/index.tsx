import React from 'react'
import {StyleSheet, View} from 'react-native'
import {SwitcherAppearance} from 'features/changeAppearance/ui'
import {SwitcherLanguage} from 'features/changeLanguage/ui'

const Settings = () => {
  return (
    <View style={styles.container}>
      <SwitcherAppearance />
      <SwitcherLanguage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Settings
