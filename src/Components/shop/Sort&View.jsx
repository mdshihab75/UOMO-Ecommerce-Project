import React, { useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import Container from '../ui/Container';
import { IoMdClose } from "react-icons/io";
const SortAndView = ({ setView }) => {
  let viewProduct = [2, 3, 4]
  const [filterModal, setFilterModal] = useState(false)
  const handleView = (view) => {
    setView(view)
  }
  return (


    <div className='flex gap-15.5'>
      {/* Sorting */}
      <div className='relative after:content-[""] after:absolute after:w-0.5 after:h-5.5 after:bg-ftbg after:top-1/2 after:-translate-y-1/2 after:-right-7.5'>
        <select className='font-jost font-medium text-sm text-primary-black leading-6 border-b-2 uppercase outline-none'>
          <option>DEFAULT SORTING</option>
          <option>shihab</option>
          <option>nafisa</option>
        </select>
      </div>

      {/* View */}
      <div className='flex gap-4.5 items-center relative after:content-[""] after:absolute after:w-0.5 after:h-5.5 after:bg-ftbg after:top-1/2 after:-translate-y-1/2 after:-right-5.75'>
        <h3 className='font-jost font-medium text-sm text-primary-black leading-6 mr-2.75'>VIEW</h3>
        {
          viewProduct?.map((item) => (
            <button onClick={() => handleView(item)} className='button-list'>{item}</button>
          ))
        }
      </div>

      {/*Filter*/}
      <div onClick={() => setFilterModal(!filterModal)} className='flex gap-2.5 items-center cursor-pointer'>
        <IoFilterSharp />
        <h3 className='font-jost font-medium text-sm text-primary-black leading-6'>FILTER</h3>
      </div>

      <div className={`fixed duration-300 ${filterModal ? 'w-105' : 'w-0'} h-full bg-primary-white z-50 top-0 right-0`}>
        <div className='bg-filterbg px-10'>
          <div className='flex items-center justify-between pt-8.25 pb-6.5'>
            <h4 className='font-jost font-medium text-base text-primary-black'>FILTER BY</h4>
            <IoMdClose onClick={() => setFilterModal(false)} size={20} />
          </div>

        </div>

      </div>


    </div>

  )
}





export default SortAndView