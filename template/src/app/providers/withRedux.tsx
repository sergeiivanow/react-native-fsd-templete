import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../store'

export const withRedux = (Component: React.FC) => (
  <Provider store={store}>{Component}</Provider>
)
