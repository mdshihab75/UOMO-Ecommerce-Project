import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router'
import Image from '../Common/Image'
import SCimage from '../../assets/Images/SpringCollection.png'
import Countdown from 'react-countdown';

const SpringCollection = () => {

    return (
        <section className='mt-25 bg-seventh-color mx-15 py-7'>
            <Container>
                <div className='flex justify-between items-end'>
                    <div>
                        <h3 className='font-jost font-medium text-sm leading-6 text-sixth-color after:content-[ ] after:w-10 after:h-0.5 after:absolute after:-left-15 after:top-2 after:bg-sixth-color relative ml-16.5'>DEAL OF THE WEEK</h3>
                        <h2 className='font-jost font-normal text-[70px] text-primary-black mt-2.25'>
                            <span className='font-bold'>Spring </span>Collection
                        </h2>
                        <Link className="font-jost font-medium text-sm leading-6 mb-29.5 mt-2.25 inline-block text-primary-black relative after:bg-primary-black after:content-[''] after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:absolute hover:after:w-[65%] after:duration-300">SHOP NOW</Link>
                        <Countdown
                            date={Date.now() + 5000000}
                            renderer={({ days, hours, minutes, seconds, completed }) => {
                                return (
                                    <div className='flex mb-9'>
                                        <div className='flex'>
                                            <div>
                                                <h4 className='font-jost font-normal text-[30px] leading-7.5 text-primary-black'>{days}</h4>
                                                <h3 className='font-jost font-bold text-base leading-7.5 text-secondary'>DAYS</h3>
                                            </div>
                                            <span className='font-jost font-normal text-[30px] leading-7.5 text-primary-black ml-6.25 mr-5.5'>:</span>
                                        </div>
                                        <div className='flex'>
                                            <div>
                                                <h4 className='font-jost font-normal text-[30px] leading-7.5 text-primary-black'>{hours}</h4>
                                                <h3 className='font-jost font-bold text-base leading-7.5 text-secondary'>HOURS</h3>
                                            </div>
                                            <span className='font-jost font-normal text-[30px] leading-7.5 text-primary-black ml-5.5 mr-4.5'>:</span>
                                        </div>
                                        <div className='flex'>
                                            <div>
                                                <h4 className='font-jost font-normal text-[30px] leading-7.5 text-primary-black'>{minutes}</h4>
                                                <h3 className='font-jost font-bold text-base leading-7.5 text-secondary'>MINS</h3>
                                            </div>
                                            <span className='font-jost font-normal text-[30px] leading-7.5 text-primary-black ml-6.5 mr-5.5'>:</span>
                                        </div>
                                        <div className='flex'>
                                            <div>
                                                <h4 className='font-jost font-normal text-[30px] leading-7.5 text-primary-black'>{seconds}</h4>
                                                <h3 className='font-jost font-bold text-base leading-7.5 text-secondary'>SEC</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }} />
                    </div>
                    <Image src={SCimage} alt="SpringCollection" />
                </div>
            </Container>
        </section>
    )
}

export default SpringCollection