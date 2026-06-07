import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
const MobileNavigation = () => {
    const cartItems = 3;
    return (
        <div className='py-2.5 bg-primary-white shadow-2xl shadow-gray-500 w-full fixed bottom-0 left-0 z-50 md:hidden'>
            <ul className='flex justify-around'>
                <li className='flex flex-col items-center'>
                    <button><IoHomeOutline size={18} /></button>
                    <span className='font-jost font-normal text-[13px] leading-6 text-primary-black'>Home</span>
                </li>
                <li className='flex flex-col items-center'>
                    <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_171_678)">
                                <path d="M16.8037 12.0285L11.9362 9.10027C11.2525 8.68897 10.492 8.42791 9.70506 8.32972V7.59625C9.70506 7.18302 9.94168 6.79836 10.3225 6.59223C11.2687 6.08013 11.8258 5.09383 11.7763 4.01814C11.7108 2.59335 10.5588 1.43964 9.13226 1.37414C7.53307 1.30122 6.2246 2.5744 6.2246 4.14846C6.2246 4.53683 6.53949 4.85159 6.92772 4.85159C7.31609 4.85159 7.63085 4.53683 7.63085 4.14846C7.63085 3.37008 8.2778 2.74249 9.06758 2.77888C9.76659 2.81101 10.3394 3.38381 10.3715 4.08282C10.3961 4.61483 10.1208 5.10249 9.65302 5.35558C8.81778 5.80767 8.29881 6.66625 8.29881 7.59625V8.32931C7.51521 8.42654 6.75743 8.6854 6.07559 9.09341L1.20123 12.0104H1.2011C0.461305 12.4532 0.000978114 13.2638 1.68088e-05 14.1261C-0.00149381 15.4906 1.1014 16.5962 2.46604 16.5979L15.5281 16.6131H15.5311C16.8911 16.6131 17.9984 15.5074 18 14.147C18.001 13.2848 17.5426 12.4729 16.8037 12.0285ZM15.5311 15.2069C15.5307 15.2069 15.5302 15.2069 15.5299 15.2069L2.46782 15.1916C1.8817 15.191 1.40558 14.7137 1.40627 14.1278C1.40668 13.7566 1.60484 13.4076 1.92331 13.217H1.92317L6.79767 10.3001C8.15613 9.48713 9.85324 9.48837 11.2113 10.3052L16.0789 13.2335C16.3968 13.4248 16.5942 13.7743 16.5938 14.1453C16.5931 14.7309 16.1165 15.2069 15.5311 15.2069Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_171_678">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <span className='font-jost font-normal text-[13px] leading-6 text-primary-black'>Shop</span>
                </li>
                <li className='flex flex-col items-center'>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_171_673)">
                                <path d="M14.7146 2.64647C12.9744 0.906815 10.1436 0.906815 8.40394 2.64647L7.99988 3.05031L7.59604 2.64647C5.85639 0.906579 3.02532 0.906579 1.28566 2.64647C-0.418673 4.35081 -0.42974 7.05236 1.26 8.93072C2.80115 10.6433 7.34645 14.3432 7.5393 14.4998C7.67022 14.6063 7.82775 14.6581 7.98434 14.6581C7.98952 14.6581 7.9947 14.6581 7.99964 14.6578C8.16164 14.6654 8.32483 14.6098 8.45999 14.4998C8.65284 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4187 4.35081 14.7146 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18547 12.0735 7.99964 13.0505C6.81381 12.0738 3.51157 9.32089 2.3102 7.98577C1.13143 6.67561 1.12036 4.80974 2.28453 3.64558C2.87909 3.05125 3.65992 2.75385 4.44074 2.75385C5.22156 2.75385 6.00238 3.05101 6.59694 3.64558L7.48514 4.53377C7.59086 4.6395 7.72414 4.7026 7.86401 4.72474C8.091 4.77348 8.33731 4.71014 8.51391 4.53401L9.40258 3.64558C10.5919 2.45668 12.5266 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z" fill="#222222" />
                            </g>
                            <defs>
                                <clipPath id="clip0_171_673">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <span className='font-jost font-normal text-[13px] leading-6 text-primary-black'>Wishlist</span>
                </li>
                <li className='flex flex-col items-center relative'>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.125 3.75H12.2204C11.9722 1.64131 10.1743 0 8 0C5.82572 0 4.02784 1.64131 3.77956 3.75H1.875C1.52981 3.75 1.25 4.02981 1.25 4.375V15.375C1.25 15.7202 1.52981 16 1.875 16H14.125C14.4702 16 14.75 15.7202 14.75 15.375V4.375C14.75 4.02981 14.4702 3.75 14.125 3.75ZM8 1.25C9.48388 1.25 10.7193 2.33297 10.9581 3.75H5.04191C5.28066 2.33297 6.51612 1.25 8 1.25ZM13.5 14.75H2.5V5H3.75V6.875C3.75 7.22019 4.02981 7.5 4.375 7.5C4.72019 7.5 5 7.22019 5 6.875V5H11V6.875C11 7.22019 11.2798 7.5 11.625 7.5C11.9702 7.5 12.25 7.22019 12.25 6.875V5H13.5V14.75Z" fill="#222222" />
                        </svg>
                    </button>
                    <span className='font-jost bg-third-color rounded-full px-1.25 font-medium text-[10px] text-primary-white absolute bottom-5 left-3'>{cartItems}</span>
                    <span className='font-jost font-normal text-[13px] leading-6 text-primary-black'>Cart</span>
                </li>
            </ul>
        </div>
    )
}

export default MobileNavigation