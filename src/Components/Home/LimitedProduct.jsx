import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import axios from 'axios'
import Product from '../Common/Product'
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const LimitedProduct = () => {
    const [products, setProducts] = useState([])
    const Slider = SliderLib.default || SliderLib;
    
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
    <div className= {`${className} absolute -right-12.25 top-1/2 translate-y-[-50%]`}
      onClick={onClick}
    ><TfiAngleRight className='text-[25px]'/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} absolute -left-12.25 top-1/2 translate-y-[-50%] z-10`}
      onClick={onClick}
    ><TfiAngleLeft className='text-[25px]'/></div>
  );
}
  

    const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
    {
      breakpoint: 667, // md এর নিচে
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      }
    }
  ]
}



function getProducts() {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products)
    }).catch((err) => {
      throw new Error(err.message ? err.message : "Something went wrong");
    })
  }


  useEffect(() => {
    getProducts()
  }, [])

  

  return (
    <section className='mt-9.25 md:mt-22.75 '>
        <Container>
            <h2 className='font-jost font-normal text-[26px] md:text-[35px] text-primary-black text-center mb-6 md:mb-8.25'>LIMITED <span className='font-bold'>EDITION</span></h2>
            
              <Slider {...settings} className='bg-transparent'>  
            {products.map((item) => (
    <div className='flex flex-col' key={item.id}>
      <Product item={item} />
    </div>
  ))}
            </Slider> 
                
        </Container>
    </section>
  )
}

export default LimitedProduct