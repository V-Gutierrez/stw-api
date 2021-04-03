import Head from 'next/head'
import { useRouter } from 'next/router'
import useAxios from 'axios-hooks'
import React from 'react'
import { FETCH_PERSON_DATA } from 'services/apiOperations'
import { ErrorComponent, Loading, PersonDetails } from 'components'

const PersonPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data, loading, error }, refetch] = useAxios({
    url: FETCH_PERSON_DATA.url(id || 1)
  })

  if (error) return <ErrorComponent retry={refetch} />

  if (loading) return <Loading />

  if (data)
    return (
      <>
        <Head>
          <title>{data.name}</title>
        </Head>
        <PersonDetails {...FETCH_PERSON_DATA.personData(data)} />
      </>
    )
}

export default PersonPage
