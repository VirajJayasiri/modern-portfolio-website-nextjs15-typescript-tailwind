import ResumeCard from './ResumeCard'
import { BsDatabase, BsTerminal, BsLightningCharge } from 'react-icons/bs'
import { HiAcademicCap, HiBookOpen } from 'react-icons/hi2';
import { HiLibrary } from 'react-icons/hi';

const Resume = () => {
  return (
    <div className='pt-20 pb-16 bg-[#F8F9FA] text-black'>
      <div className='w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12'>
         {/* Education Section */}
         <div>
            <div className='flex items-center space-x-3 mb-8'>
               <HiAcademicCap className='w-8 h-8 text-[#E63946]' />
               <h2 className='text-3xl sm:text-4xl font-bold text-[#1D3557]'>
                  My <span className='text-[#E63946]'>Education</span>
               </h2>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
               <ResumeCard 
                  Icon={HiAcademicCap} 
                  role="BSc (Hons) Computer Science" 
                  subtitle="University of Westminster, UK (Delivered by IIT Sri Lanka)"
                  date="2025 – 2028"
                  description="Comprehensive undergraduate degree focusing on software engineering principles, algorithms, and real-world system development."
                  highlights={[
                     "Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, Software Engineering Principles, Database Systems, Client-Server Architectures, Machine Learning & Data Mining",
                     "Selected Academic Results: Machine Learning & Data Mining - 91% ; Client-Server Architectures - 81%"
                  ]}
               />
               <ResumeCard 
                  Icon={HiLibrary} 
                  role="Foundation Certificate in Computing" 
                  subtitle="Informatics Institute of Technology, Sri Lanka"
                  date="2025"
                  description="Foundational training in computer programming logic, web applications, and database fundamentals."
               />
               <ResumeCard 
                  Icon={HiBookOpen} 
                  role="G.C.E. Advanced Level - Physical Science" 
                  subtitle="Maliyadeva College, Kurunegala"
                  date="2022"
                  description="Completed Advanced Level studies focusing on analytical science and logical problem solving."
                  highlights={[
                     "Subjects: Combined Mathematics, Physics, and Chemistry"
                  ]}
               />
            </div>
         </div>

         {/* Practical Experience Section */}
         <div>
            <div className='flex items-center space-x-3 mb-8'>
               <BsLightningCharge className='w-8 h-8 text-[#E63946]' />
               <h2 className='text-3xl sm:text-4xl font-bold text-[#1D3557]'>
                  Practical <span className='text-[#E63946]'>Experience</span>
               </h2>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
               <ResumeCard 
                  Icon={BsDatabase} 
                  role="Full-Stack Developer – ConnectHub" 
                  subtitle="Real-Time Communication Platform"
                  date="2026"
                  description="Designed & implemented a production-ready communication platform with real-time text/voice/video messaging."
                  highlights={[
                     "Built Java Spring Boot REST APIs with Spring Security & JWT authentication",
                     "Integrated WebSocket/STOMP and LiveKit for real-time rooms",
                     "Containerized backend microservices using Docker and deployed on AWS EC2"
                  ]}
               />
               <ResumeCard 
                  Icon={BsTerminal} 
                  role="Java Developer – DevBuddy" 
                  subtitle="CLI DevOps Automation Tool"
                  date="2026"
                  description="Engineered a command-line tool automating Maven project setups and dev environment checks."
                  highlights={[
                     "Utilized Java 21, Picocli & OOP patterns for modular CLI architecture",
                     "Configured automated build and testing pipelines with GitHub Actions"
                  ]}
               />
               <ResumeCard 
                  Icon={BsLightningCharge} 
                  role="AI & Backend Dev – NexAttend" 
                  subtitle="Smart Attendance System"
                  date="2025 - 2026"
                  description="Created an automated face-recognition attendance pipeline from webcam video streams."
                  highlights={[
                     "Built computer vision pipeline using OpenCV, MTCNN & DeepFace",
                     "Developed FastAPI endpoints integrated with React & MongoDB"
                  ]}
               />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Resume
