import React from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from '../store'

export const withPersister = (Component: React.FC) => (
  <PersistGate loading={null} persistor={persistor}>
    {Component}
  </PersistGate>
)
