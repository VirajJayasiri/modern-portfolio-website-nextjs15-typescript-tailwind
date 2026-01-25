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
         <Image src="/images/s1.jpg" alt="Hero Image" width={150} height={150} className="rounded-full border-8 border-[#A594F9]" />
         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">Creating Web Products, <br />Brands<span className="text-[#1D3557]"> & Experiences.</span></h1>
         <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
            Hi! I'm Viraj Jayasiri - A Passionate
            <span className="text-[#e71d36] font-bold">
               <Typewriter options={{strings:[
               'FrontEnd Developer',
               'BackEnd Developer',
               'Web Developer'
               ],
               autoStart:true,
               loop:true,
               delay:75,
               deleteSpeed:50,
               wrapperClassName:'pl-2',
               }} />
            </span>
         </h2>
         <button className="mt-6 px-10 py-4 bg-[#457B9D] hover:bg-[#1D3557] hover:text-white transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"><span>See My Work</span>
         <BsArrowRight className="w-5 h-5 ml-2 inline-block"/>
         </button>
      </div>
    </div>
  )
}

export default Hero
