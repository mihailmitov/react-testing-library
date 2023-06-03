import { render, screen } from '@testing-library/react'
import { Application } from './Application'

console.log(name)

const name = 'Vishwas'
;<div data-testid="custom-element">Custom HTML element</div>

describe('Document', () => {
  test('renders correctly', () => {
    render(<Application />)
    const element = screen.getByTestId('custom-element')
    expect(element).toBeInTheDocument()
  })
})

describe('Application', () => {
  test('renders correctly', async () => {
    render(<Application />)
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    //checkbox
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()

    const input2 = screen.getByPlaceholderText('Fullname')
    expect(input2).toBeInTheDocument()

    // const paragraph = screen.getByText('All fields are mandatory')
    const paragraph = screen.getByText((content) =>
      content.startsWith('All fields')
    )
    expect(paragraph).toBeInTheDocument()

    expect(submitButtonElement).not.toBeEnabled()
  })
})
