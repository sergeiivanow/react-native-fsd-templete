import React from 'react'
import {StyleSheet, View} from 'react-native'
// import {Font} from 'shared/ui';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Font size="medium">{'Medium size'}</Font> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
