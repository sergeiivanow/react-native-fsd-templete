import {TextButton} from './TextButton'

const TextButtonMeta = {
  title: 'TextButton',
  component: TextButton,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    title: 'Text Button',
  },
}

export default TextButtonMeta

export const TextButtonBasic = {}

export const TextButtonLoading = {
  args: {
    title: 'Text Button Loading',
    loading: true,
  },
}
