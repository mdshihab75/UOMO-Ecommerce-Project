import React, { useState } from 'react'
import Container from '../ui/Container'
import Listitem from '../Common/Listitem'
import { productCategory } from '../../Api/ProductCategory'
import Product from '../Common/Product'
const TrendyProducts = () => {
  const [category, setCategory]= useState("")
  const handleActive = () => {
      alert("shihab");
  }
  return (
    <section className='mt-25'>
        <Container>
            <h2 className='font-jost font-medium text-[35px] text-primary-black text-center'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>
            <ul className='flex justify-center gap-13.5 mt-7.5'>
              {
                productCategory?.map((item) => (
                  <Listitem onClick={handleActive}  className="font-jost font-medium text-[16px] text-fifth-color">
                    {item.name}</Listitem>

                ))
              }           
            </ul>
            <Product />
        </Container>
    </section>
  )
}

export default TrendyProducts