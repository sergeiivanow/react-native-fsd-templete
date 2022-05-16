import compose from 'compose-function';
import {withRedux} from './withRedux';
import {withEmotion} from './withEmotion';

export const withProviders = compose(withRedux, withEmotion);
