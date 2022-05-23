import compose from 'compose-function'
import {withRedux} from './withRedux'
import {withEmotion} from './withEmotion'
import {withPersister} from './withPersister'
import {withSafeArea} from './withSafeArea'
import {withGestureHandler} from './withGestureHandler'

export const withProviders = compose(
  withRedux,
  withPersister,
  withEmotion,
  withSafeArea,
  withGestureHandler,
)
