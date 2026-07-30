import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1D3557] py-8 px-4 border-t border-[#457B9D]/30'>
      <p className='text-white/80 text-center text-sm font-medium'>
        &copy; {new Date().getFullYear()} Viraj Jayasiri &bull; Software Engineering Portfolio. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
