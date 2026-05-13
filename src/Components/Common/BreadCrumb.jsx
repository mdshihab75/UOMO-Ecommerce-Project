import React from 'react'
import { Link, useLocation } from 'react-router'
import Container from '../ui/Container';

const BreadCrumb = () => {
    let {pathname} = useLocation();
    let location = pathname.split('/').pop();
    console.log(location)
  return (
    
        <h2 className='font-jost font-medium text-sm text-primary-black leading-6 uppercase'><Link to='/'>HOME</Link> / {location}</h2>
    
        
   
  )
}

export default BreadCrumb