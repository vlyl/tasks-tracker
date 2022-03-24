import React from 'react'

import Button from './Button'

function Header(param: { title: string; onAdd: () => void; showAdd: boolean }) {
  return (
    <header className='header'>
      <h1>{param.title}</h1>
      <Button
        color={param.showAdd ? 'green' : 'red'}
        text={param.showAdd ? 'Add' : 'Close'}
        onClick={param.onAdd}
      />
    </header>
  )
}

export default Header
