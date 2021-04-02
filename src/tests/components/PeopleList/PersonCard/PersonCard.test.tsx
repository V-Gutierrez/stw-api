import { render, screen } from '@testing-library/react'
import { PersonCard } from '../../../../components/PeopleList/components/PersonCard'
import React from 'react'

describe('PersonCard Component', () => {
  it('should render properly based on Props', () => {
    const mockedPerson = { name: 'Foo', gender: 'male', birth_year: '1999' }

    render(<PersonCard {...mockedPerson} />)

    const name = screen.getByTestId('name')
    const gender = screen.getByTestId('gender')
    const birth_year = screen.getByTestId('birth_year')

    expect(name).toHaveTextContent(mockedPerson.name)
    expect(gender).toHaveTextContent(mockedPerson.gender)
    expect(birth_year).toHaveTextContent(mockedPerson.birth_year)
  })
})
