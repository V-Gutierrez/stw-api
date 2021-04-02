import React from 'react'

interface Props {
  retry: () => void
}

export const ErrorComponent = ({ retry }: Props) => (
  <div className='error-container'>
    <h1>Something went wrong, please try again</h1>
    <button
      data-testid='retry-button'
      onClick={() => {
        retry()
      }}
    >
      Try Again
    </button>
  </div>
)
