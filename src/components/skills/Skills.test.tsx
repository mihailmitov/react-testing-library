import { screen, render } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('Start learining button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
