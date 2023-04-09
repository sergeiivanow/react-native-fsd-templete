import React from 'react'
import * as UI from 'shared/ui'
import {Font} from 'shared/ui'
import {SwitcherAppearance} from 'features/changeAppearance'
import {s} from 'shared/lang'

export const Settings = () => {
  return (
    <UI.Container>
      <Font>{s.appearance}</Font>
      <SwitcherAppearance />
    </UI.Container>
  )
}
