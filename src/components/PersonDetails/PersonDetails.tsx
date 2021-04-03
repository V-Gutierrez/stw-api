import React from 'react'
import { Person } from 'types/apiTypes'

export const PersonDetails = (
  props: Pick<Person, 'name' | 'mass' | 'height'>
) => {
  const { name, height, mass } = props

  return (
    <section className='person-details'>
      <h1 data-testid='name-container' className='person__name'>
        {name}
      </h1>
      <p data-testid='height-container' className='person__stat'>
        Height: {height}
      </p>
      <p data-testid='mass-container' className='person__stat'>
        Mass: {mass}
      </p>
      <ul>
        {/* Home world */}
        {/* StarShips Component
        TODO:
        FOR EACH STARSHIP -> COMPONENT -> FETCH LINK AND PARSE INFORMATION DA MINHA CACETA */}
        {/* Movies Component
        TODO:
        FOR EACH STARSHIP -> COMPONENT -> FETCH LINK AND PARSE INFORMATION DA MINHA CACETA */}
        {/* Vehicles Component
        TODO:
        FOR EACH STARSHIP -> COMPONENT -> FETCH LINK AND PARSE INFORMATION DA MINHA CACETA */}
        {/* Species Component
        TODO:
        FOR EACH STARSHIP -> COMPONENT -> FETCH LINK AND PARSE INFORMATION DA MINHA CACETA */}
      </ul>
    </section>
  )
}
