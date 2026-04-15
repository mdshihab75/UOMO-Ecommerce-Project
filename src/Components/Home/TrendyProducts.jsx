import React, { useState } from 'react'
import Container from '../ui/Container'
import Listitem from '../Common/Listitem'
import { productCategory } from '../../Api/ProductCategory'
const TrendyProducts = () => {
  const [category, setCategory]= useState("")
  const handleActive = () => {

  }
  return (
    <section className='mt-25'>
        <Container>
            <h1 className='font-jost font-medium text-[35px] text-primary-black text-center'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h1>
            <ul className='flex justify-center gap-13.5'>
              {
                productCategory?.map((item) => (
                  <Listitem onClick={handleActive}  className="font-jost font-medium text-[16px] text-fifth-color">{item.name}</Listitem>

                ))
              }
                
               
            </ul>
        </Container>
    </section>
  )
}

export default TrendyProducts