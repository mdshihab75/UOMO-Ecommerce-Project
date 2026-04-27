import React from 'react'
import Container from '../ui/Container'
import StartingImage from '../../assets/Images/startingimage.png'
import StartingImage2 from '../../assets/Images/startingimage2.png'
import Image from '../Common/Image'
import { Link } from 'react-router'
const StartingCollection = () => {
  return (
    <section>
      <Container>
        <div className='flex'>
          <div className='w-1/2'>
            <Image className='ml-auto h-99.5' src={StartingImage} />
            <div>
              <h3 className='font-jost font-medium text-[18px] text-primary-black'>STARTING AT $19</h3>
              <h2 className='font-jost font-medium text-[26px] text-primary-black'>Women's T-Shirts</h2>
              <Link className="font-jost font-medium text-sm leading-6 text-primary-black after:bg-primary-black relative after:content-[''] after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:absolute hover:after:w-[65%] after:duration-300;">
                SHOP NOW
              </Link>
            </div>
          </div>

          <div className='w-1/2'>
            <Image className='h-99.5 ml-auto' src={StartingImage2} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StartingCollection