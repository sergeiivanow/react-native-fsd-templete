import {View} from 'react-native'
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds'
import {ThemeProvider} from '@emotion/react'
import {themes} from '../src/app/theme'

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={themes.light}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    </ThemeProvider>
  ),
]
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

