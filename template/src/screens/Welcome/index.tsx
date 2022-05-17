import React from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, View, Button} from 'react-native';
import {mainRoot} from 'shared/navigation';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          Navigation.setRoot(mainRoot);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
