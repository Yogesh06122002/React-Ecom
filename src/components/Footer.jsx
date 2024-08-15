import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogo } from "react-icons/pi";
import { SiTwitter } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id='footer'>
    <div className='bg-[#F2F2F2] px-28 flex justify-between p-4 py-10' >
        <div className='items-center'>
            <p className='font-medium text-black text-2xl'>Newsletter</p>
            <p className='text-gray-600 text-sm'> Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className="flex p-1  ">
            <input type="text" name="" id=""  className='w-64 p-2  pl-4 text-sm focus:border-[1px] border-black outline-none ' placeholder='Your mail'/>
            <button type="button" className='bg-[#0075BE]  w-40 text-white'>SUBSCRIBE</button>
        </div>
    </div>
        <div className="text-gray-500 ">
            <div className="flex justify-between px-28 py-10">
                <ul className='flex gap-14 text-base'>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">FAQs</a></li>

                </ul>
                <div className="flex gap-10 text-black">
                <FaFacebookF className='hover:text-[#0075BE]'/>
                <IoLogoYoutube  className='hover:text-[#0075BE]' />
                <PiInstagramLogo   className='hover:text-[#0075BE]'/>
                <SiTwitter  className='hover:text-[#0075BE]' />
                <FaGoogle  className='hover:text-[#0075BE]'/>

                </div>
                

            </div>
            <div className="px-28 py-10 text-lg flex gap-1" >
           Copyright &copy; 2024 All Rights Reserved. Designed by yogii..<FaRegHeart className='text-[#0075BE] mt-1' />
            
                
            </div>
        </div>

    </div>

  )
}
