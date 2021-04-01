import { PeopleRequestResponse } from '../types/apiTypes'

export const BASE_URL = 'http://swapi.dev/api/'

export const FETCH_PEOPLE = {
  url: (page = 1) => `${BASE_URL}people/?page=${page}`,
  people: (data: PeopleRequestResponse) => data.results.map(person => person)
}
