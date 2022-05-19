import React from 'react';
import {StyleSheet} from 'react-native';
import {SwitcherAppearance} from 'features/changeAppearance/ui';
import {SwitcherLanguage} from 'features/changeLanguage/ui';
import {Screen, Font} from 'shared/ui';
import {s} from 'shared/lang';

const Settings = () => {
  return (
    <Screen style={styles.container}>
      <Font>{s.settings}</Font>
      <SwitcherAppearance />
      <SwitcherLanguage />
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
