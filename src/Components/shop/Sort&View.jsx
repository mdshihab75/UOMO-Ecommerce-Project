import React, { useEffect, useRef, useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import Container from '../ui/Container';
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Range, getTrackBackground} from "react-range";
const SortAndView = ({ setView }) => {
  let viewProduct = [2, 3, 4]
  const [filterModal, setFilterModal] = useState(false)
  const handleView = (view) => {
    setView(view)
  }
  let filterRef = useRef()
  useEffect(() => {
    window.addEventListener("mousedown", function (e) {
      if (e.target.contains(filterRef.current)) {
        setFilterModal(false)
      }
      else {
        setFilterModal(true)
      }
    })
  }, [filterModal])

  const [values, setValues] = React.useState([50, 100]);
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
      <div ref={filterRef}>
        <div className='flex gap-2.5 items-center cursor-pointer'>
          <IoFilterSharp />
          <h3 className='font-jost font-medium text-sm text-primary-black leading-6'>FILTER</h3>
        </div>

        <div className={`fixed top-0 right-0 h-screen overflow-y-auto bg-primary-white z-50 duration-300 overflow-hidden ${filterModal ? "w-105" : "w-0"
          }`}>
          <div className='bg-filterbg px-10'>
            <div className='flex items-center justify-between pt-8.25 pb-6.5'>
              <h4 className='font-jost font-medium text-base text-primary-black'>FILTER BY</h4>
              <IoMdClose onClick={() => setFilterModal(false)} size={20} />
            </div>

          </div>
          {/* Product Categories */}
          <div className='px-10'>
            <div className="mt-9.5">
              <div className="flex items-center justify-between">
                <h3 className="font-jost font-medium text-[18px] text-primary-black">
                  PRODUCT CATEGORIES
                </h3>
                <span className="text-primary-black cursor-pointer">⌃</span>
              </div>

              <div className="grid grid-cols-2 gap-15.5 gap-y-3 mt-3.25 font-jost font-normal text-sm leading-6 text-primary-black">
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
          </div>

          {/* Colors */}
          <div className="mt-10 px-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black">COLOR</h3>
              <span className="text-primary-black">⌃</span>
            </div>

            <div className="flex flex-wrap gap-6.25 mt-5.75 gap-x-10">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full cursor-pointer focus:outline-3 focus:outline-primary-black ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-10 px-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black">SIZES</h3>

              <span className="text-primary-black">⌃</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-5.75">
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
          <div className="mt-10 px-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black">BRANDS</h3>

              <span className="text-primary-black">⌃</span>
            </div>

            {/* Search */}
            <div className="relative mt-4.5">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-11 border px-4 text-sm outline-none"
              />

              <IoSearchOutline className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-lg" />
            </div>

            {/* Brand List */}
            <div className="mt-5 space-y-4">
              {brands?.map((brand, index) => (
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
          <div className="mt-10 px-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black mb-2.75">PRICE</h3>

              <span className="text-gray-500">⌃</span>
            </div>

            {/* Range */}
            <Range
              label="Select your value"
              step={0.1}
              min={0}
              max={100}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "#ccc",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "18px",
                    width: "18px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}
                />
              )}
            />

            <div className="flex items-center justify-between mt-3">
              <p className='font-jost font-normal text-sm leading-10 text-secondary'>Min Price: <span className='text-primary-black'> $29</span></p>

              <p className='font-jost font-normal text-sm leading-10 text-secondary'>Max Price: <span className='text-primary-black'> $937</span></p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4.25 mt-5 px-10 mb-50">
            <button className="px-3 py-2 bg-filtertext font-jost font-normal text-[11px] text-primary-black leading-7.5">
              ✕ <span className='ml-2.5'>BLUES</span>
            </button>

            <button className="px-3 py-2 bg-filtertext font-jost font-normal text-[11px] text-primary-black leading-7.5">
              ✕ <span className='ml-2.5'>MAX PRICE: $493</span>
            </button>

            <button className="px-3 py-2 bg-filtertext font-jost font-normal text-[11px] text-primary-black leading-7.5">
              ✕ <span className='ml-2.5'>Zara</span>
            </button>

            <button className="px-3 py-2 bg-filtertext font-jost font-normal text-[11px] text-primary-black leading-7.5">
              ✕ <span className='ml-2.5'>RESET FILTER</span>
            </button>
          </div>
        </div>

      </div>
    </div>

  )
}





export default SortAndView