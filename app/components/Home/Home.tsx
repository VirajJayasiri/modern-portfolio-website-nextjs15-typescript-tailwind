'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero/Hero';
import 'aos/dist/aos.css';

// Dynamically import components to improve initial load time
const Blog = dynamic(() => import('./Blog/Blog'));
const ClientReview = dynamic(() => import('./ClientReview/ClientReview'));
const Contact = dynamic(() => import('./Contact/Contact'));
const Projects = dynamic(() => import('./Projects/Projects'));
const Resume = dynamic(() => import('./Resume/Resume'));
const Services = dynamic(() => import('./Services/Services'));
const Skills = dynamic(() => import('./Skills/Skills'));

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
    <div className='overflow-hidden'>
      <div id='home'><Hero /></div>
      <div id='services'><Services /></div>
      <div id='resume'><Resume /></div>
      <div id='projects'><Projects /></div>
      <div id='skills'><Skills /></div>
      <div id='testimonials'><ClientReview /></div>
      <div id='blog'><Blog /></div>
      <Contact/>
    </div>
  )
}

export default Home
