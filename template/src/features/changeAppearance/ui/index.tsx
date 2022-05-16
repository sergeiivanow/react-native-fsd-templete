import React from 'react';
import {Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toogleTheme} from '../model';

export function SwitcherAppearance() {
  const themeMode = useSelector(state => state.appearance.theme);
  const dispatch = useDispatch();
  return (
    <Switch
      value={themeMode === 'dark'}
      onChange={() => dispatch(toogleTheme())}
    />
  );
}
