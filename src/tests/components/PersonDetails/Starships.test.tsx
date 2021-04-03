import { render, screen } from '@testing-library/react'
import { Starship } from '../../.././components/PersonDetails/components/Starship/Starship'

import React from 'react'

describe('Starship Component', () => {
  const Props = [
    {
      name: 'Jedi starfighter',
      model: 'Delta-7 Aethersprite-class interceptor',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '180000',
      length: '8',
      max_atmosphering_speed: '1150',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '7 days',
      hyperdrive_rating: '1.0',
      mGLT: 'unknown',
      starship_class: 'Starfighter',
      pilots: [''],
      films: [''],
      created: '2014-12-20T17:35:23.906000Z',
      edited: '2014-12-20T21:23:49.930000Z',
      url: ''
    }
  ]

  it('should render properly based on Props', () => {
    render(<Starship starshipsData={Props} />)

    const starshipItem = screen.getByTestId('starship-item')
    const starshipName = screen.getByTestId('starship-name')
    const starshipModel = screen.getByTestId('starship-model')

    const mockedStarship = Props[0]

    expect(starshipItem).toBeTruthy()
    expect(starshipName).toHaveTextContent(mockedStarship.name)
    expect(starshipModel).toHaveTextContent(mockedStarship.model)
  })
})
