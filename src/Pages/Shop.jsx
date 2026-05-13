import React from 'react'
import ShopBanner from '../Components/shop/ShopBanner'
import BreadCrumb from '../Components/Common/BreadCrumb'
import SortAndView from '../Components/shop/Sort&View'
import Container from '../Components/ui/Container'

const Shop = () => {
  return (
    <main>
        <ShopBanner/>
        <Container>
            <div className='flex justify-between mt-9 mb-10'>
                <BreadCrumb/>
                <SortAndView/>
            </div>
        </Container>
    </main>
  )
}

export default Shop