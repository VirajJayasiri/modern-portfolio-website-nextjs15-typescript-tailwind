import ResumeCard from './ResumeCard'
import { BsDatabase } from 'react-icons/bs'
import { FaMicrosoft, FaReact } from 'react-icons/fa'
import { HiAcademicCap} from 'react-icons/hi2';
import { HiLibrary } from 'react-icons/hi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
         {/* Work Section */}
         <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-[#E63946]'>My Work<span className='text-[#1D3557]'> Experience</span>
            </h1>
            <div className='mt-10'>
               <ResumeCard Icon={LiaLaptopCodeSolid} role="Full-Stack Developer" />
               <ResumeCard Icon={FaReact} role="Front-End Developer" />
               <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
            </div>
         </div>
         {/* Education Section */}
         <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-[#E63946]'>My <span className='text-[#1D3557]'>Education</span>
            </h1>
            <div className='mt-10'>
               <ResumeCard Icon={HiLibrary} role="Informatics Institute of Technology" date="Sep 2024 - Present" />
               <ResumeCard Icon={HiAcademicCap} role="Informatics Institute of Technology" date="Sep 2024 - Present"/>
               <ResumeCard Icon={FaMicrosoft} role="Informatics Institute of Technology" date="Sep 2024 - Present"/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Resume
