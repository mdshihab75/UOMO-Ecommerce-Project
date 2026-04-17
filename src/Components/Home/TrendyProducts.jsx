import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Listitem from '../Common/Listitem'
import { productCategory } from '../../Api/ProductCategory'
import Product from '../Common/Product'
import axios from 'axios'
const TrendyProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all")

  const handleActive = () => {
    alert("shihab");
  }

  useEffect(() => {
    function getProducts () {
      axios.get("https://dummyjson.com/products").then((res) => {
        setProducts(res.data.products)
      }).catch((err) => {
        throw new Error(err.message ? err.message : "Something went wrong");
      })
    }

    getProducts()

  }, [])
  
  
  return (
    <section className='mt-25'>
      <Container>
        <h2 className='font-jost font-medium text-[35px] text-primary-black text-center'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>

        <ul className='flex justify-center gap-13.5 mt-7.5'>
          {
            productCategory?.map((item) => (
              <Listitem onClick={handleActive} className="font-jost font-medium text-[16px] text-fifth-color">
                {item.name}</Listitem>
            ))
          }
        </ul>

        <div className='grid grid-cols-4 gap-x-7.5 gap-y-15 mt-10'>
          {products?.map((item) => (
            <Product key={item.id} title={item.title} price={item.price} discount={item.discountPercentage} rating={item.rating} image={item.thumbnail} />
          ))}
          <Product />
        </div>

      </Container>
    </section>
  )
}

export default TrendyProducts