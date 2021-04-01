import React from 'react';
import { Person } from 'types/apiTypes';

export const PersonCard = (props: Person) => {
const {name, gender, birth_year} = props


  return (
    <div className='card'>
      <img
        src='https://gkpb.com.br/wp-content/uploads/2020/09/pandora-x-star-wars-pingente-logo-geek-publicitario.jpg'
        alt='Person'
        className='card__image'
      />
      <p className='card__name'>{name}</p>
      <div className='grid-container'>
        <div className='grid-child-stats-left'>Gender:</div>
        <div className='grid-child-stats-right'>{gender}</div>
        <div className='grid-child-stats-left'>Born in</div>
        <div className='grid-child-stats-right'>{birth_year}</div>
      </div>
      <button className='btn draw-border'>See more</button>
    </div>
  )
}
