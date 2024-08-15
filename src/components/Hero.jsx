import React from 'react'
import img from '../assets/images/pexels-royalanwar-450212.jpg'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.jpg'
import access from '../assets/images/Access.jpg'

const Hero = () => {
  return (
    <div>
        <div className='bg-cover w-100 h-[100vh] ' style={{backgroundImage:`url(${img})`}}>
            <div className='px-20 py-48 space-y-12'>
                <p className='font-medium text-xl'> Spring / Summer Collection 2017</p>
            <h1 className='text-6xl font-medium'>Get up to 30% Off <br /> New Arrivals</h1>
            <button type="button" className='bg-[#0075BE] text-white w-36 p-3'>SHOP NOW</button>
            </div>
        </div>
        <div className="m-20 flex items-center justify-between px-5 gap-8">
            <div className='w-auto  relative'>
                <img src={men} alt="" className='w-full h-60' />
                <div className='absolute  left-0 right-0 w-full h-full flex items-center justify-center top-0 text-black'>
                    <p className='bg-white text-xl font-semibold p-2  hover:text-gray-600 cursor-pointer '>MEN'S</p>
                </div>
            </div>
            <div className='w-auto  relative'>
                <img src={access} alt="" className='w-full h-60' />
                <div className='absolute  left-0 right-0 w-full h-full flex items-center justify-center top-0 text-black'>
                    <p className='bg-white text-xl font-semibold p-2 hover:text-gray-600 cursor-pointer'> ACCESSORIES'S</p>
                </div>
            </div>
            <div className='w-auto  relative'>
                <img src={women} alt="" className='w-full h-60 ' />
                <div className='absolute  left-0 right-0 w-full h-full flex items-center justify-center top-0 text-black'>
                    <p className='bg-white text-xl font-semibold p-2 hover:text-gray-600 cursor-pointer'>WOMEN'S</p>
                </div>
            </div>



        </div>
    </div> 
  )
}

export default Hero