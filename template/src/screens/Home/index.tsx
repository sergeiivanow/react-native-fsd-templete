import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text>{'Home'}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
