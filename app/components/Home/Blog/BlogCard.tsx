import Image from 'next/image';

type Props ={
   image: string;
   title: string;
}

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image src={image} alt={"blog"} width={500} height={500} className='object-cover rounded-lg'/>
      <p className='mt-4 text-black font-medium text-base sm:text-lg'>25 December 2025</p>
      <h1 className='mt-5 text-lg sm:text-xl font-bold text-[#457B9D] hover:underline hover:text-[#1D3557] cursor-pointer transition-all duration-300'>{title}</h1>
      <div className='mt-4 flex gap-2 items-center'>
         <p className='px-4 py-1.5 bg-[#A8DADC] text-sm sm:text-base font-bold rounded-full'>React</p>
         <p className='px-4 py-1.5 bg-[#A8DADC] text-sm sm:text-base font-bold rounded-full'>Next.js</p>
         <p className='px-4 py-1.5 bg-[#A8DADC] text-sm sm:text-base font-bold rounded-full'>Tailwind</p>
      </div>
    </div>
  )
}

export default BlogCard
