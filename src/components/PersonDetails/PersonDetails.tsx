import axios from 'axios'
import { Starship } from './components/Starship'

import React, { useEffect, useState } from 'react'
import { Person, StarshipResponse } from 'types/apiTypes'
import Link from 'next/link'
import { parseUrlsToHTTPS } from 'utils/parseUrlsToHTTPS'
import { Loading } from 'components/Loading'

export const PersonDetails = (
  props: Pick<Person, 'name' | 'mass' | 'height' | 'starships'>
) => {
  const { name, height, mass, starships } = props

  const [starshipsData, setStarshipsData] = useState<StarshipResponse[] | []>(
    []
  )

  const [loading, setLoading] = useState<boolean>(false)

  const fetchAllStarshipsData = async () => {
    setLoading(true)

    try {
      const parsedUrls = parseUrlsToHTTPS(starships)

      const fetchedItems = await Promise.all(
        parsedUrls.map((url) => axios.get<StarshipResponse>(url))
      )

      setStarshipsData(fetchedItems.map((response) => response.data))
    } catch (error) {
      setStarshipsData([])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchAllStarshipsData()
  }, [])

  if (loading) return <Loading />
  else
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

        <Link href='/'>
          <h1 className='person-details__link'>Go back</h1>
        </Link>
      </section>
    )
}
