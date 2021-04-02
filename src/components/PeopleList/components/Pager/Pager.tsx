import React from 'react';

interface PageProps {
  handleNextPage: () => void
  handlePreviousPage: () => void
  pageValue: number
  pageCount: number
}

const Pager = ({ handleNextPage, handlePreviousPage, pageValue, pageCount }: PageProps) => {
  return (
    <div className='pager'>
      <a
        className='pager__btn'
        onClick={handlePreviousPage}
        data-testid='previous-page-button'
      >
        PREVIOUS PAGE
      </a>
      <div className='pager__counter'>
        <span className='pager__number' data-testid='page-value-container'>
          {pageValue}
        </span>
        <div className='pager__background'></div>
        <span className='pager__number' data-testid='page-count-container'>
          {pageCount}
        </span>
      </div>
      <a
        className='pager__btn'
        data-testid='next-page-button'
        onClick={handleNextPage}
      >
        NEXT PAGE
      </a>
    </div>
  )
}

export default Pager;