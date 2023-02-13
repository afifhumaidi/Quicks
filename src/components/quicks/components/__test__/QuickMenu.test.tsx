import { describe, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import QuickContextProvider from '../../context/QuickContext'
import QuickMenu from '../QuickMenu'

describe('Testing QuickMenu Component', () => {
  test('quick button should exist at onMount and not the other', () => {
    render(
      <QuickContextProvider>
        <QuickMenu />
      </QuickContextProvider>
    )

    const quickButton = screen.queryByRole('button', { name: 'quick' })
    const inboxButton = screen.queryByRole('button', { name: 'inbox' })
    const taskButton = screen.queryByRole('button', { name: 'task' })

    expect(quickButton).toBeDefined()
    expect(inboxButton).toBeNull()
    expect(taskButton).toBeNull()
  })

  test('inbox and task button should render after click quick button', () => {
    render(
      <QuickContextProvider>
        <QuickMenu />
      </QuickContextProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'quick' }))
    fireEvent.click(screen.getByRole('button', { name: 'quick' }))

    screen.getByRole('button', { name: 'inbox' })
    screen.getByRole('button', { name: 'task' })
  })
})
