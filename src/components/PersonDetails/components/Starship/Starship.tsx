import React, { useEffect, useState } from 'react'
import { StarshipResponse } from 'types/apiTypes'

interface Props {
  starshipsData: StarshipResponse[]
}

export const Starship = ({ starshipsData }: Props) => {
  const [starships, setStarships] = useState<StarshipResponse[]>([])

  useEffect(() => {
    setStarships(starshipsData)
  }, [starshipsData])

  return (
    <section data-testid='starship-container' className='starship-container'>
      <h2>Starships</h2>
      <ul>
        {starships.map((starshipData: StarshipResponse) => {
          return (
            <li data-testid='starship-item' key={starshipData.model}>
              <p data-testid='starship-name'>{starshipData.name}</p>
              <p data-testid='starship-model'>{starshipData.model}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
