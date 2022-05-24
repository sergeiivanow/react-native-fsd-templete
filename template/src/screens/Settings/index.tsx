import React from 'react'
import {ScreenCard, Font} from 'shared/ui'
import {SwitcherAppearance} from 'features/changeAppearance'
import {SwitcherLanguage} from 'features/changeLanguage'
import {s} from 'shared/lang'

export const Settings = () => {
  return (
    <ScreenCard>
      <Font>{s.appearance}</Font>
      <SwitcherAppearance />
      <Font>{s.language}</Font>
      <SwitcherLanguage />
    </ScreenCard>
  )
}
