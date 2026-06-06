import React from 'react'
import Container from "../ui/Container"
import { CategoryData } from '../../Api/CategoryData'
import Image from '../Common/Image'
import { Link } from 'react-router'

const Category = () => {
  return (
    <section className='mt-4 md:mt-25 mb-10 md:mb-0'>
        <Container>
            <div className='grid md:grid-cols-4 md:grid-rows-2 gap-3.75 md:gap-7.5'>
                { CategoryData?.map((item) => (
                <div key={item.id} className={`h-full w-full relative ${item.id == 1 && "md:col-span-2 md:row-span-2"} ${item.id == 2 && "md:col-span-2 md:row-span-1"}`}>
                    <Image className="w-full h-full" src={item.Image} alt={item.name}/>
                        <div className='absolute bottom-10 left-10'>
                        <h2 className='font-jost font-normal text-[10px] md:text-sm leading-6 text-primary-black'>HOT LIST</h2>
                        <h3 className='font-jost font-medium text-[10px] md:text-[26px] text-primary-black'><span className='font-bold'>{item.name} </span>COLLECTION</h3>    
                        <Link className="font-jost font-medium text-[10px] md:text-sm leading-6 text-primary-black relative after:bg-primary-black after:content-[''] after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:absolute hover:after:w-[40%] after:duration-300" to={item.link}>SHOP NOW</Link>
                        
                    </div>
                </div>
            ))}
                
            </div>    
        </Container>
    </section>
  )
}

export default Category
