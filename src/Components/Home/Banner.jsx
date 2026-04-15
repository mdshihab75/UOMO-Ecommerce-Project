import React from 'react'
import Image from '../Common/Image'
import { BannerData } from '../../Api/BannerData';
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
const Banner = () => {
const Slider = SliderLib.default || SliderLib;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className='flex gap-10 absolute bottom-15 left-48.75' >{''} {dots} {''} </ul>
      </div>
    ),

    customPaging: i => (
      <div className='w-1.5 h-1.5 rounded-full bg-fourth-color'></div>
    )
 
};
 
  return (
    
    <section className='mx-15'>

      <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center  z-10">

      <a href="#" className="w-13 h-15 flex font-normal text-sm text-fifth-color items-center justify-center ">
        <FaFacebookF />
      </a>

      <a href="#" className="w-13 h-15 flex font-normal text-sm text-fifth-color items-center justify-center">
        <FaTwitter />
      </a>

      <a href="#" className="w-13 h-15 flex font-normal text-sm text-fifth-color items-center justify-center ">
        <FaInstagram />
      </a>

      <a href="#" className="w-13 h-15 flex font-normal text-sm text-fifth-color items-center justify-center">
        <FaPinterest />
      </a>
      
       <span className="font-jost font-medium text-sm leading-6 text-fifth-color rotate-270 tracking-widest mt-6">
        FOLLOW US
      </span>

    </div>
        
      <Slider {...settings}>
          {
            BannerData?.map((item) => (
                <Image key={item.id} src={item.banner} />
            ))
          }   
               
      </Slider>  
           
    </section>
    
    
  )
};

export default Banner;