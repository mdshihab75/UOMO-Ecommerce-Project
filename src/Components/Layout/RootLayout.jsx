import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <MobileNavigation/>
    {/*<Footer/>*/}
    </>
  )
}

export default RootLayout