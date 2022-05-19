import React from 'react';
import {Switch} from 'react-native';
import {useLanguage} from './model/hook';

export function SwitcherLanguage() {
  const {lang, changeLanguage} = useLanguage();
  return <Switch value={lang === 'en'} onChange={changeLanguage} />;
}
