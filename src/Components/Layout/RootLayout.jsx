import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'
import MobileTrandyProducts from './MobileTrandyProducts'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <MobileNavigation/>
    <MobileTrandyProducts/>
    {/*<Footer/>*/}
    </>
  )
}

export default RootLayout