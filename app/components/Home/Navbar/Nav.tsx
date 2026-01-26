'use client';
import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
   openNav:()=>void
};

const Nav = ({openNav}:Props) => {
   const [navBg,setNavBg] = useState(false);
   useEffect(()=>{
      const handler = () => {
         if(window.scrollY >= 90){
            setNavBg(true);
         }if(window.scrollY < 90){
            setNavBg(false);
         }
      };
      window.addEventListener('scroll',handler);

      return () => {
         window.removeEventListener('scroll',handler);
      }
   },[]
)
  return (
    <div
  className={`fixed top-0 left-0 w-full h-[9vh] z-50 transition-all duration-300
    ${
      navBg
        ? "bg-white/60 backdrop-blur-[2px] border-b border-black/25"
        : "bg-transparent backdrop-blur-0 border-b border-transparent"
      }`}
      >
         
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>

         {/* Logo Section */}
         <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-col'>
               <FaLaptopCode className='w-5 h-5 text-white'/>
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-black font-bold'>VIRAJ JAYASIRI</h1>
         </div>

         {/* Nav Links Section */}
         {/* navlinks */}
         <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => {
               return (
               <a
                  key={link.id}
                  href={link.url}
                  className="text-base text-[#e71d36] font-medium transition-all duration-200 hover:text-[#1D3557]">
                  <p>{link.label}</p>
               </a>
               );
            })}
         </div>

         {/* Nav Buttons Section */}
         <div className='flex items-center space-x-4'>

            {/* CV Button */}
            <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[#a8dadc] hover:bg-[#457b9d] hover:text-[white] transition-all duration-300 text-[#1D3557] flex items-center space-x-2'>
               <BiDownload className='w-5 h-5'/>
               <span>Donwload CV</span>
            </button>

            {/* Burger Menu */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
         </div>
      </div>
    </div>
  )
}

export default Nav
