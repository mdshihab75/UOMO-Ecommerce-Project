import React from 'react'
import ShopBannerImage from '../../assets/Images/shop-banner.png'
import Image from '../Common/Image'
import Container from '../ui/Container'

const ShopBanner = () => {
  return (
    <section>
        <Image className='mx-auto w-full px-15' src={ShopBannerImage} alt='shop-banner'/>
        <Container className='relative'>
            <ul className='flex gap-7.75 w-full absolute left-0 bottom-33.75'>
                <li className='list-items'>#STAYHOME</li>
                <li className='list-items'>NEW IN</li>
                <li className='list-items'>JACKETS</li>
                <li className='list-items'>HOODIES</li>
                <li className='list-items'>MEN</li>
                <li className='list-items'>WOMEN</li>
                <li className='list-items'>TROUSERS</li>
                <li className='list-items'>ACCESSORIES</li>
                <li className='list-items'>SHOES</li>
            </ul>
        </Container>
    </section>
  )
}
                                                
export default ShopBanner