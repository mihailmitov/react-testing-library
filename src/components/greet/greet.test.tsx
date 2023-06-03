/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElem = screen.getByText(/Hello/)
    expect(textElem).toBeInTheDocument()
  })

  describe('Nested', () => {
    test.only('renders with a name', () => {
      render(<Greet name="Misho" />)
      const textElem = screen.getByText('Hello Misho')
      expect(textElem).toBeInTheDocument()
    })
  })
})

describe('Second Group', () => {
  test.only('renders with a name', () => {
    render(<Greet name="Misho" />)
    const textElem = screen.getByText('Hello Misho')
    expect(textElem).toBeInTheDocument()
  })
})
