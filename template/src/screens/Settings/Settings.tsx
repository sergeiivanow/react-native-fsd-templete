import React from 'react'
import {ScreenCard, Font} from 'shared/ui'
import {SwitcherAppearance} from 'features/changeAppearance'
import {s} from 'shared/lang'

export const Settings = () => {
  return (
    <ScreenCard>
      <Font>{s.appearance}</Font>
      <SwitcherAppearance />
    </ScreenCard>
  )
}
