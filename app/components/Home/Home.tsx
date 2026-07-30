'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero/Hero';
import 'aos/dist/aos.css';

// Dynamically import components to improve initial load time
const Contact = dynamic(() => import('./Contact/Contact'));
const Projects = dynamic(() => import('./Projects/Projects'));
const Resume = dynamic(() => import('./Resume/Resume'));
const Services = dynamic(() => import('./Services/Services'));
const Skills = dynamic(() => import('./Skills/Skills'));
const Achievements = dynamic(() => import('./Achievements/Achievements'));
const Referees = dynamic(() => import('./Referees/Referees'));

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;

      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 50,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden bg-white'>
      <div id='home'><Hero /></div>
      <div id='services'><Services /></div>
      <div id='resume'><Resume /></div>
      <div id='projects'><Projects /></div>
      <div id='skills'><Skills /></div>
      <div id='achievements'><Achievements /></div>
      <div id='referees'><Referees /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}

export default Home
