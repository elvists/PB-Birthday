import { render, screen } from '@testing-library/react'
import Index from '../../pages/index'
// import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Home', () => {
  it('renders a heading', () => {
    // useRouter.mockReturnValue({ query: {}})
    const { container } = render(<Index />)

    const heading = screen.getByRole('*', {
      name: /Use uma grana/i,
    })

    expect(heading).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
