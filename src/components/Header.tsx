import React from 'react'

import Button from './Button'

function Header(param: { title: string }) {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>{param.title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

export default Header
