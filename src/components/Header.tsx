import React from 'react'
import Button from './Button'

function Header({title = 'Tasks Tracker'}) {
  const onClick = () => {

  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header