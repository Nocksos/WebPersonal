/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: typeof store
}

export function renderWithProvider(
  ui: React.ReactElement,
  { store: customStore = store, ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }): React.JSX.Element {
    return <Provider store={customStore}>{children}</Provider>
  }
  return { store: customStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
