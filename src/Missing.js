import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>

      <Link to='/'>Visit our HomePage</Link>
    </main>
  )
}

export default Missing
