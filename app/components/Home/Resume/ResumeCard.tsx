import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  role: string;
  subtitle?: string;
  date?: string;
  description?: string;
  highlights?: string[];
}

const ResumeCard = ({ Icon, role, subtitle, date, description, highlights }: Props) => {
  return (
    <div className='mb-6'>
      <div className='flex items-start space-x-4 sm:space-x-6 bg-[#F1FAEE] border border-[#A8DADC] shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-7 rounded-xl'>
         <div className='sm:w-14 sm:h-14 w-10 h-10 bg-[#457B9D] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
            <Icon className='sm:w-7 sm:h-7 w-5 h-5 text-white' />
         </div>
         <div className='flex-1'>
            <div className='flex flex-wrap items-center justify-between gap-2 mb-1'>
               <h3 className='text-[#1D3557] text-lg sm:text-xl font-bold'>
                  {role}
               </h3>
               {date && (
                  <span className='px-3 py-1 rounded-full bg-[#A8DADC]/40 text-[#1D3557] text-xs sm:text-sm font-semibold'>
                     {date}
                  </span>
               )}
            </div>
            {subtitle && (
               <p className='text-[#E63946] font-semibold text-sm sm:text-base mb-2'>
                  {subtitle}
               </p>
            )}
            {description && (
               <p className='text-gray-700 text-sm leading-relaxed mb-2'>
                  {description}
               </p>
            )}
            {highlights && highlights.length > 0 && (
               <ul className='space-y-1 list-disc list-inside text-xs sm:text-sm text-gray-700 mt-2'>
                  {highlights.map((item, idx) => (
                     <li key={idx} className='leading-relaxed'>{item}</li>
                  ))}
               </ul>
            )}
         </div>
      </div>
    </div>
  )
}

export default ResumeCard
