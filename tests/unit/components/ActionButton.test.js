// render 目的為 render component to the virtual DOM
// screen 目的為 which will allow us to query that DOM based on things like roll or text
import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('applies one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
