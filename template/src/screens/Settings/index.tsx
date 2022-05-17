import React from 'react';
import {StyleSheet} from 'react-native';
import {SwitcherAppearance} from 'features/changeAppearance/ui';
import {Screen, Font} from 'shared/ui';

const Settings = () => {
  return (
    <Screen style={styles.container}>
      <Font>{'Settings'}</Font>
      <SwitcherAppearance />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
