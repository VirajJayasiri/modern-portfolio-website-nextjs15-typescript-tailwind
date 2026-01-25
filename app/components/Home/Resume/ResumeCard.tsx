import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  role: string;
  date?: string;
}

const ResumeCard = ({ Icon, role, date }: Props) => {
  return (
    <div className='mb-6'>
      <div className='flex items-start space-x-6 bg-[#A8DADC] transition-all duration-300 p-4 sm:p-8 rounded-md'>
         <div className='sm:w-14 sm:h-14 w-10 h-10 bg-[#F1FAEE] rounded-full flex items-center justify-center flex-col'>
            <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-black' />
         </div>
         <div className='flex-1'>
            {date && (
               <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-md bg-[#F1FAEE] text-black w-fit sm:text-lg text-sm font-bold'>
                  {date}
               </h1>
            )}
            <h1 className='text-[#1D3557] text-xl sm:text-2xl font-semibold'>
               {role}
            </h1>
            <p className='text-black text-sm sm:text-base pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa temporibus neque aliquid est aut repudiandae, quas voluptate? Provident debitis ratione autem natus fugit corporis?</p>
         </div>
      </div>
    </div>
  )
}

export default ResumeCard
