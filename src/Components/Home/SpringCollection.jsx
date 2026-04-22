import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router'
import Image from '../Common/Image'
import SCimage from '../../assets/Images/SpringCollection.png'

const SpringCollection = () => {
    return (
        <section className='mt-25'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='font-jost font-medium text-sm leading-6 text-sixth-color'>DEAL OF THE WEEK</h3>
                        <h2>
                            <span>Spring</span>Collection
                        </h2>
                        <Link>SHOP NOW</Link>
                    </div>
                    <Image src={SCimage} alt="SpringCollection" />
                </div>
            </Container>
        </section>
    )
}

export default SpringCollection