import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router'
import Image from '../Common/Image'
import { FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'
import { FaTwitter, FaYoutube } from "react-icons/fa6"
import SecurePaymentsImage from '../../assets/images/payment.png'
const Footer = () => {
  return (
    <footer className='bg-ftbg pt-25'>
      <Container>
        <div className='flex justify-between'>
          <div>
          <Link to='/'>
          <Image className='pb-11.25' src='/public/Images/logo.png'/>
          </Link>
          <p className='font-jost font-normal text-sm leading-6 text-primary-black'>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p className='font-jost font-normal text-sm leading-6 text-primary-black pb-9.25'>United States</p>
              <p className='font-jost font-medium text-sm leading-6 text-primary-black'>sale@uomo.com</p>
              <p className='font-jost font-medium text-sm leading-6 text-primary-black'>+1 246-345-0695</p>

              {/* Social Icons  */}
              <div className='pt-11.75 flex gap-9'>
                <a href="">
                  <FaFacebookF className='hover:text-blue-500 cursor-pointer' />
                </a>
                <a href="">
                  <FaTwitter  className='text-secondary hover:text-twitter cursor-pointer' />
                </a>
                <a href="">
                  <FaInstagram className='hover:text-pink-600 cursor-pointer' />
                </a>
                <a href="">
                  <FaYoutube className='hover:text-red-600 cursor-pointer' />
                </a>
                <a href="">
                  <FaPinterest className='hover:text-red-600 cursor-pointer' />
                </a>
              </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-jost font-medium text-[18px] text-primary-black mb-6.75'>COMPANY</h3>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">About Us</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Careers</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Affiliates</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Blog</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Contact Us</a>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-jost font-medium text-[18px] text-primary-black mb-6.75'>SHOP</h3>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:w-0 hover:after:w-[60%] after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:duration-300' href="">New Arrivals</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:w-0 hover:after:w-[40%] after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:duration-300' href="">Accessories</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:w-0 hover:after:w-[40%] after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:duration-300' href="">Men</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:w-0 hover:after:w-[40%] after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:duration-300' href="">Women</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:w-0 hover:after:w-[40%] after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:duration-300' href="">Shop All</a>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-jost font-medium text-[18px] text-primary-black mb-6.75'>HELP</h3>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Customer Service</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">My Account</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Find a Store</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Legal & Privacy</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Contact</a>
          <a className='font-jost font-normal text-sm leading-10 text-primary-black relative after:content-[""] after:absolute after:bg-primary-black after:w-0 hover:after:w-[40%] after:h-0.5 after:left-0 after:bottom-0 after:duration-300' href="">Gift Card</a>
        </div>
        {/* SUBSCRIBE div */}
        <div className='flex flex-col w-82.5'>
          <h3 className='font-jost font-medium text-[18px] text-primary-black mb-6.75'>SUBSCRIBE</h3>
          <p className='font-jost font-normal text-sm leading-6 text-primary-black'>Be the first to get the latest news about trends,</p>
          <p className='font-jost font-normal text-sm leading-6 text-primary-black mb-3.75'>promotions, and much more!</p>
          {/* input div  */}
          <div className='bg-primary-white flex items-center justify-between pr-5.25 pl-5.25 pt-4.25 pb-3.5'>
            <form action="">
              <input type="email" placeholder="Your email address" className="bg-primary-white outline-none border-none font-jost font-normal text-sm text-primary-black leading-6 placeholder:text-primary-black" />
            </form>
            <button type='submit' className='font-jost font-medium text-sm leading-6 text-primary-black'>JOIN</button>
          </div>
          <p className='font-jost font-medium text-[15px] pt-10.25 pb-2.75 text-primary-black'>Secure payments</p>
              <img src={SecurePaymentsImage} alt="" />
        </div>
        </div>
        {/* light line divider */}
            <div className='pt-22 pb-8.5'>
            <div className='max-w-full bg-[#CFCDCD] p-px'></div>
          </div>
          {/* End Text  */}
          <div className='flex justify-between pb-7'>
          <div className='flex gap-2 items-center'>
              <h3 className='font-jost font-normal text-sm leading-6 text-primary-black flex items-center'>
                ©2026 Uomo 
              </h3>
              </div>
              <div className='flex items-center'>
              <h4 className='font-jost font-normal text-sm leading-6 text-secondColor pr-6.75'>Language</h4>
              <h4 className='font-jost font-normal text-sm leading-6 text-primary-black pr-4'>United Kingdom  |  English</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" fill="black" />
              </svg>
              <h4 className='font-jost font-normal text-sm leading-6 text-secondColor pr-5.75 pl-8'>Currency</h4>
              <h4 className='font-jost font-normal text-sm leading-6 text-primary-black pr-2.5'>$ USD</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" fill="black" />
              </svg>
            </div>
          </div>
      </Container>
    </footer>
  )
}

export default Footer