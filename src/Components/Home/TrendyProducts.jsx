import React from 'react'
import Container from '../ui/Container'
import Listitem from '../Common/Listitem'
const TrendyProducts = () => {
  return (
    <section className='mt-25'>
        <Container>
            <h1 className='font-jost font-medium text-[35px] text-primary-black text-center'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h1>
            <ul className='flex justify-center gap-13.5'>
                <Listitem className="font-jost font-medium text-[16px] text-fifth-color">ALL</Listitem>
                <Listitem className="font-jost font-medium text-[16px] text-fifth-color">NEWARRIVALS</Listitem>
                <Listitem className="font-jost font-medium text-[16px] text-fifth-color">BEST SELLER</Listitem>
                <Listitem className="font-jost font-medium text-[16px] text-fifth-color">TOP RATING</Listitem>
            </ul>
        </Container>
    </section>
  )
}

export default TrendyProducts