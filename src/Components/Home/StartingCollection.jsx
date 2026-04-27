import React from 'react'
import Container from '../ui/Container'
import StartingImage from '../../assets/Images/startingimage.png'
import StartingImage2 from '../../assets/Images/startingimage2.png'
import Image from '../Common/Image'
const StartingCollection = () => {
  return (
    <section>
      <Container>
        <div className='flex'>
          <div className='w-1/2'>
            <Image className='ml-auto h-99.5' src={StartingImage} />
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