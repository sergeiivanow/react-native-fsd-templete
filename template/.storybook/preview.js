import {View} from 'react-native'
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds'
import {ThemeProvider} from '../src/shared/theme'

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider>
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
}
