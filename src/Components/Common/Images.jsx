import React from 'react'

const Images = ({src, alt, className}) => {
  return (
    <>
    <img className={className} src={src} alt={alt} loading='lazy' />
    </>
  )
}

export default Images