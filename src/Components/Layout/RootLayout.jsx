import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'
import MobileTrandyProducts from './MobileTrandyProducts'
import MobileSpringCollection from './MobileSpringCollection'
import MobileStartingCollection from './MobileStartingCollection'





const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <MobileNavigation/>
    {/* <MobileTrandyProducts/>
    <MobileSpringCollection/>
    <MobileStartingCollection/> */}
    
    {/*<Footer/>*/}
    </>
  )
}

export default RootLayout