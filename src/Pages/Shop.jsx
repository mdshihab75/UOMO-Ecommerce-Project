import React, { useEffect, useState } from 'react'
import ShopBanner from '../Components/shop/ShopBanner'
import BreadCrumb from '../Components/Common/BreadCrumb'
import SortAndView from '../Components/shop/Sort&View'
import Container from '../Components/ui/Container'
import axios from 'axios'
import AllProducts from '../Components/shop/AllProducts'
import { Link } from 'react-router'

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
        <div className='w-75  h-1.5 mx-auto bg-ftbg rounded-[10px] mt-20 mb-35.75'>
            <div className='w-2/4 h-full bg-primary-black rounded-[10px]'>

            </div>
            
              <Link className='font-jost font-medium inline-block left-2/4 -translate-x-2/4 text-sm top-4.25 text-primary-black leading-6 relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[70%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300'>SHOW MORE</Link>
              <p>Hellow World</p>
        </div>
    </main>
  )
}

export default Shop