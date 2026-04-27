import React from 'react'
import Container from '../ui/Container'
import StartingImage from '../../assets/Images/startingimage.png'
import StartingImage2 from '../../assets/Images/startingimage2.png'
import Image from '../Common/Image'
import { Link } from 'react-router'
const StartingCollection = () => {
  return (
    <section className='mt-25'>
      <Container>
        <div className='flex gap-7.5'>
          <div className='w-1/2 relative group'>
            <Image className='h-99.5 ml-auto' src={StartingImage} />
            <div className='absolute top-0 left-0 w-full h-full group-hover:bg-red-700/85 duration-300 z-50'>
              <div className='absolute z-1 left-12.5 bottom-12.5 w-full'>
                <h3 className='font-jost font-medium text-[18px] text-primary-black group-hover:text-primary-white'>STARTING AT $19</h3>
                <h2 className='font-jost font-medium text-[26px] text-primary-black group-hover:text-primary-white mt-2'>Women's T-Shirts</h2>
                <Link className="font-jost font-medium text-sm leading-6 text-primary-black group-hover:text-primary-white inline-block after:bg-primary-white relative after:content-[''] after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:absolute hover:after:w-[65%] after:duration-300 mt-3.75 ">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          <div className='w-1/2 relative group'>
            <Image className='h-99.5 ml-auto' src={StartingImage2} />
            <div className='absolute top-0 left-0 w-full h-full group-hover:bg-red-700/85 duration-300 z-50'>
              <div className='absolute z-1 left-12.5 bottom-12.5 w-full'>
                <h3 className='font-jost font-medium text-[18px] text-primary-black group-hover:text-primary-white'>STARTING AT $39</h3>
                <h2 className='font-jost font-medium text-[26px] text-primary-black group-hover:text-primary-white mt-2'>Men’s Sportswear</h2>
                <Link className="font-jost font-medium text-sm leading-6 text-primary-black group-hover:text-primary-white inline-block after:bg-primary-white relative after:content-[''] after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:absolute hover:after:w-[65%] after:duration-300 mt-3.75 ">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StartingCollection