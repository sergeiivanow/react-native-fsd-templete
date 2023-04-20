import compose from 'compose-function'
import {withRedux} from './withRedux'
import {withPersister} from './withPersister'
import {withSafeArea} from './withSafeArea'
import {withGestureHandler} from './withGestureHandler'
import {withTheme} from './withTheme'

export const withProviders = compose(
  withRedux,
  withPersister,
  withTheme,
  withSafeArea,
  withGestureHandler,
)
