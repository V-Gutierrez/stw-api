import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import { FETCH_PEOPLE } from '../../constants/apiOperations'

export const PeopleList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [{ data, loading, error }] = useAxios({
    url: FETCH_PEOPLE.url(currentPage)
  })


  if (error) return <h1>PeopleList</h1>
  if (loading) return <h1>PeopleList</h1>
  if (data) return <h1>PeopleList</h1>
}
