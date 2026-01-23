import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

const MobileNav = () => {
  return (
    <div>
      {/* OverLay */}
      <div className='fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen'></div>

        {/* NavLinks */}
        <div className='text-black fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#D9CFC7] space-y-6 z-[100050] right-0'>
          {NavLinks.map((link) => {
            return <Link key={link.id} href={link.url}>
              <p className='text-black w-fit ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]'>{link.label}</p>
              </Link>
          })}
          {/* CrossIcon */}
        <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
        </div>
      </div>
  )
}

export default MobileNav
