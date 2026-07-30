'use client';
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect"
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-black overflow-hidden flex-col">

      <ParticlesHero />

      <div className="relative z-10  flex flex-col items-center">
         <div className="relative">
            <Image 
               src="/images/me1.jpg" 
               alt="Viraj Jayasiri" 
               width={220} 
               height={220} 
               className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] aspect-square rounded-full border-[12px] border-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover object-center" 
               data-aos="zoom-in" 
               data-aos-duration="800"
               priority
               placeholder="empty"
               quality={100}
            />
         </div>
         <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 text-center font-bold tracking-wide">Building Reliable, Real-Time <br /><span className="text-[#1D3557]">& AI-Powered Applications</span></h1>
         <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center flex-wrap justify-center">
            Hi! I&apos;m Viraj Jayasiri &ndash;
            <span className="text-[#e71d36] font-bold">
               <Typewriter options={{strings:[
               'Full-Stack Developer',
               'Backend & REST API Engineer',
               'AI & Computer Vision Dev',
               'CS Undergrad @ Westminster'
               ],
               autoStart:true,
               loop:true,
               delay:75,
               deleteSpeed:50,
               wrapperClassName:'pl-2',
               }} />
            </span>
         </h2>
         <p data-aos="fade-up" data-aos-delay="500" className="mt-4 max-w-2xl text-center text-gray-700 text-sm sm:text-base px-4">
            Computer Science undergraduate at the University of Westminster (IIT Sri Lanka). Hands-on experience constructing high-performance backend, full-stack, real-time, and AI applications with Spring Boot, FastAPI, React, Docker & AWS.
         </p>
         <div data-aos="fade-up" data-aos-delay="600" className="mt-7 flex items-center space-x-4">
            <a href="#projects" className="px-8 py-3.5 bg-[#457B9D] hover:bg-[#1D3557] text-white transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium inline-flex items-center shadow-md hover:shadow-xl">
               <span>Explore My Projects</span>
               <BsArrowRight className="w-5 h-5 ml-2"/>
            </a>
            <a href="#contact" className="px-8 py-3.5 border-2 border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium inline-flex items-center">
               <span>Get In Touch</span>
            </a>
         </div>
      </div>
    </div>
  )
}

export default Hero
