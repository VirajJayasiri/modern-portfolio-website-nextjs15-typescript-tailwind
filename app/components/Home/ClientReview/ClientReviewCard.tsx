import Image from 'next/image';
import React from 'react'

type Props = {
   name: string;
   role: string;
   image: string;
}

const ClientReviewCard = ({ name, role, image }: Props) => {
  return (
    <div className='m-2'>
      <Image src={image} width={60} height={60} alt="client" className='rounded-full' />
      <p className='mt-6 text-base text-[#457B9D] font-medium'>&quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus quis natus aliquam officiis rem dolorum nam earum cupiditate quod quo, voluptatibus sequi sapiente sed asperiores praesentium quos sit itaque? &quot;</p>
      <h1 className='mt-6 text-xl font-bold text-[#1D3557]'>{name}</h1>
      <p className='mt-1 text-[#1D3557]'>{role}</p>
    </div>
  )
}

export default ClientReviewCard
