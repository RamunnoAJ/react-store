import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import { App } from './App'

describe('App', () => {
  it('renders headline', () => {
    const component = render(<App />)

    component.getByText(/Home/i)
  })
})
