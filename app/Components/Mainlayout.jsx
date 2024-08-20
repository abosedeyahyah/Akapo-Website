import React from 'react'

const Mainlayout = ({children}) => {
  return (
    <div className='text'>
      <main>{children}</main>
    </div>
  )
}

export default Mainlayout