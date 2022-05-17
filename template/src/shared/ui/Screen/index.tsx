import {ViewProps} from 'react-native';
import styled from '@emotion/native';

export const Screen = styled.View<ViewProps>`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundDefault};
`;
