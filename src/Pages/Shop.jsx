import React, { useEffect, useState } from 'react'
import ShopBanner from '../Components/shop/ShopBanner'
import BreadCrumb from '../Components/Common/BreadCrumb'
import SortAndView from '../Components/shop/Sort&View'
import Container from '../Components/ui/Container'
import axios from 'axios'
import AllProducts from '../Components/shop/AllProducts'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState(4);

  function getProducts() {
    axios.get("https://dummyjson.com/products?page=1&limit=60").then((res) => {
      setProducts(res.data.products)
    }).catch((err) => {
      throw new Error(err.message ? err.message : "Something went wrong");
    })
  }


  useEffect(() => {
    getProducts()
  }, [])


  return (
    <main>
        <ShopBanner/>
        <Container>
            <div className='flex justify-between mt-9 mb-10'>
                <BreadCrumb/>
                <SortAndView setView={setView}/>
            </div>
        </Container>
        <AllProducts items={products} view={view}/>
    </main>
  )
}

export default Shop