import compose from 'compose-function';
import {withRedux} from './withRedux';
import {withEmotion} from './withEmotion';
import {withPersister} from './withPersister';

export const withProviders = compose(withRedux, withPersister, withEmotion);
