import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react-native'
import {composeStories} from '@storybook/testing-react'

import * as stories from './TextButton.stories'

const {TextButtonBasic, TextButtonLoading} = composeStories(stories)

describe('TextButton Basic', () => {
  it('- get title and press', async () => {
    render(<TextButtonBasic />)
    const button = screen.getByText(/Text Button/i)
    expect(button).not.toBeNull()
    fireEvent.press(button)
  })
})

describe('TextButton Loading', () => {
  it('- get title and press', async () => {
    render(<TextButtonLoading />)
    const button = screen.getByTestId('loading')
    expect(button).not.toBeNull()
    fireEvent.press(button)
  })
})
