import {s} from 'shared/lang'
import {useAppDispatch, useAppSelector} from 'shared/lib/hooks'
import {change} from './slice'

export function useLanguage() {
  const dispatch = useAppDispatch()
  const lang = useAppSelector(state => state.language.lang)

  function changeLanguage() {
    const selectedLanguage = lang === 'ru' ? 'en' : 'ru'
    s.setLanguage(selectedLanguage)
    dispatch(change(selectedLanguage))
  }

  return {
    lang,
    changeLanguage,
  }
}
