import { PeopleRequestResponse, Person } from 'types/apiTypes'

export const BASE_URL = 'https://swapi.dev/api/'

export const FETCH_PEOPLE = {
  url: (page = 1) => `${BASE_URL}people/?page=${page}`,
  people: (data: PeopleRequestResponse) => data.results.map((person) => person)
}

export const FETCH_PERSON_DATA = {
  url: (personId: string | number | string[]) =>
    `${BASE_URL}people/${personId}`,
  personData: (data: Person) => data
}
