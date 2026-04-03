import React from 'react'

const Listitem = ({children, className, onclick}) => {
  return (
    <li onClick={onclick} className={className}>{children}</li>
  )
}

export default Listitem