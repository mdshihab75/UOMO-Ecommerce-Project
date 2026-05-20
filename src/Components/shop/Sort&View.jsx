import React, { useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import Container from '../ui/Container';
import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
const SortAndView = ({ setView }) => {
  let viewProduct = [2, 3, 4]
  const [filterModal, setFilterModal] = useState(false)
  const handleView = (view) => {
    setView(view)
  }
  const colors = [
    "bg-blue-900",
    "bg-yellow-500",
    "bg-gray-500",
    "bg-sky-200",
    "bg-yellow-700",
    "bg-amber-500",
    "bg-orange-200",
    "bg-white border-2 border-gray-400",
    "bg-red-400",
    "bg-green-200",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const brands = [
    { name: "Adidas", count: 2 },
    { name: "Balmain", count: 7 },
    { name: "Balenciaga", count: 10 },
    { name: "Burberry", count: 39 },
    { name: "Kenzo", count: 95 },
    { name: "Givenchy", count: 1092 },
    { name: "Zara", count: 48 },
  ];


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
        {/* Product Categories */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase">
            Product Categories
          </h3>

          <span className="text-gray-500">⌃</span>
        </div>

        <div className="grid grid-cols-2 gap-y-3 mt-5 text-sm text-gray-600">
          <p>Dresses</p>
          <p>Shorts</p>
          <p>Sweatshirts</p>
          <p>Swimwear</p>
          <p>Jackets</p>
          <p>T-Shirts & Tops</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Men</p>
          <p>Jumpers & Cardigans</p>
        </div>
      </div>

      {/* Colors */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase">Color</h3>

          <span className="text-gray-500">⌃</span>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${color}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase">Sizes</h3>

          <span className="text-gray-500">⌃</span>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {sizes.map((size, index) => (
            <button
              key={index}
              className="w-12 h-10 border text-xs font-medium text-gray-600 hover:bg-black hover:text-white duration-300"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase">Brands</h3>

          <span className="text-gray-500">⌃</span>
        </div>

        {/* Search */}
        <div className="relative mt-5">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-11 border px-4 text-sm outline-none"
          />

          <IoSearchOutline className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-lg" />
        </div>

        {/* Brand List */}
        <div className="mt-5 space-y-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm text-gray-600"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" />

                <p>{brand.name}</p>
              </div>

              <span>{brand.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase">Price</h3>

          <span className="text-gray-500">⌃</span>
        </div>

        {/* Range */}
        <div className="mt-6 relative">
          <div className="w-full h-[2px] bg-gray-300"></div>

          <div className="absolute top-1/2 left-0 w-3 h-3 bg-white border-2 border-black rounded-full -translate-y-1/2"></div>

          <div className="absolute top-1/2 right-16 w-3 h-3 bg-white border-2 border-black rounded-full -translate-y-1/2"></div>

          <div className="absolute top-1/2 left-0 right-16 h-[2px] bg-black -translate-y-1/2"></div>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <p>Min Price: $29</p>

          <p>Max Price: $937</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-8">
        <button className="px-4 py-2 bg-gray-100 text-xs uppercase">
          ✕ Blue
        </button>

        <button className="px-4 py-2 bg-gray-100 text-xs uppercase">
          ✕ Max Price: $493
        </button>

        <button className="px-4 py-2 bg-gray-100 text-xs uppercase">
          ✕ Zara
        </button>

        <button className="px-4 py-2 bg-gray-100 text-xs uppercase">
          ✕ Reset Filter
        </button>
      </div>
    </div>
      </div>

        
      

      
  


  

  )
}





export default SortAndView