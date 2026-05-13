import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import Container from '../ui/Container';
const SortAndView = () => {
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

        <button className='button-list'>
          2
        </button>

        <button className='button-list'>
          3
        </button>

        <button className='button-list'>
          4
        </button>
      </div>
      <div className='flex items-center'>
          <IoFilterSharp />
        <h3 className='font-jost font-medium text-sm text-primary-black leading-6 ml-2.5'>FILTER</h3>
      </div>
    </div>
  
    
  )
}


  


export default SortAndView