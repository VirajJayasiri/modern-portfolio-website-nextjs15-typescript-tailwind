'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

   const [isVisible, setIsVisible] = useState(false);

   {/* Scroll to top button visibility logic */}

   useEffect(() => {
     const toggleVisibility = () => {
       if (window.scrollY > 300) setIsVisible(true);
       else setIsVisible(false);
     };
     window.addEventListener('scroll', toggleVisibility);
     return () => window.removeEventListener('scroll', toggleVisibility);
   }, []);

   {/* Scroll to top functionality */}
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   }

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#457B9D] text-white cursor-pointer rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"><FaArrowUp /></button>
      )}
    </div>
  )
}

export default ScrollToTop
