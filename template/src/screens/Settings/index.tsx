import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SwitcherAppearance} from 'features/changeAppearance/ui';
import {Font} from 'shared/ui';

const Settings = () => {
  return (
    <>
      <View style={styles.container}>
        <Font>{'Settings'}</Font>
        <SwitcherAppearance />
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

export default Settings;
