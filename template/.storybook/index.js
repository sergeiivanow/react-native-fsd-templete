import { getStorybookUI } from '@storybook/react-native';
import {AppRegistry} from 'react-native'

import './storybook.requires';

export const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('AwesomeProject', () => StorybookUIRoot)