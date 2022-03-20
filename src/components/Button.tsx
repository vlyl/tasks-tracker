import React from 'react'

function Button(param: { color: string, text: string, onClick: React.MouseEventHandler<HTMLButtonElement> }) {

  return (
    <button onClick={param.onClick} 
      className='btn' 
      style={{backgroundColor: param.color}}
    >
      { param.text }
    </button>
  )
}

export default Button