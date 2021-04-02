import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import { FETCH_PEOPLE } from '../../constants/apiOperations'
import { PersonCard } from 'components/PeopleList/components/PersonCard'
import { Pager } from 'components/PeopleList/components/Pager/Pager'
import { Loading } from 'components/Loading/Loading'
import { ErrorComponent } from 'components/ErrorComponent'

export const PeopleList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [{ data, loading, error }, refetch] = useAxios({
    url: FETCH_PEOPLE.url(currentPage)
  })

  const pageCount = Math.floor(data?.count / data?.results.length)

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1)
      refetch()
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
      refetch()
    }
  }

  if (error) return <ErrorComponent retry={refetch} />

  if (loading)
    return (
      <section className='people-container'>
        <Loading />
      </section>
    )

  if (data)
    return (
      <section className='people-container'>
        {FETCH_PEOPLE.people(data).map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
        <Pager
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          pageValue={currentPage}
          pageCount={pageCount}
        />
      </section>
    )
}
