import React, {Suspense} from 'react';
import {Navigation} from 'react-native-navigation';
import {StatusBar, StyleSheet, Text, View, Button} from 'react-native';
import {useTheme} from '@emotion/react';
import {mainRoot, welcomeRoot} from 'shared/navigation';
import {useCalcFluidSize} from 'shared/lib/hooks';
import {Font} from 'shared/ui';

const Welcome = () => {
  const theme = useTheme();
  const size = useCalcFluidSize();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: 'pink',
        },
      ]}>
      <Button
        title="Welcome"
        onPress={() => {
          Navigation.setRoot(mainRoot);
        }}
      />
      <Font weight="bold">{'Font text'}</Font>
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
