import axios from 'axios'
import { Starship } from './components/Starship'

import React, { useEffect, useState } from 'react'
import { Person, StarshipResponse } from 'types/apiTypes'

export const PersonDetails = (
  props: Pick<Person, 'name' | 'mass' | 'height' | 'starships'>
) => {
  const { name, height, mass, starships } = props

  const [starshipsData, setStarshipsData] = useState<StarshipResponse[] | []>(
    []
  )

  const fetchAllStarshipsData = async () => {
    try {
      const fetchedItems = await Promise.all(
        starships.map((url) => axios.get<StarshipResponse>(url))
      )

      setStarshipsData(fetchedItems.map((response) => response.data))
    } catch (error) {
      setStarshipsData([])
    }
  }

  useEffect(() => {
    fetchAllStarshipsData()
  }, [])

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
      {starshipsData.length > 0 && <Starship starshipsData={starshipsData} />}
    </section>
  )
}
