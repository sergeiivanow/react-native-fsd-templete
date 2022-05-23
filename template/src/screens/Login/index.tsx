import React from 'react'
import {useNavigation, StackActions} from '@react-navigation/native'
import {StyleSheet, View, Button} from 'react-native'
import {s} from 'shared/lang'

const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Button
        title={s.login}
        onPress={() => {
          navigation.dispatch(StackActions.replace('main'))
        }}
      />
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

export default Login
