import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg'
import { BiDownload } from 'react-icons/bi';

type Props ={
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNav = ({closeNav,showNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showNav]);

  return (
    <div>
      {/* OverLay */}
      <div 
         className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-60 w-full h-screen`}
         onClick={closeNav}
         aria-hidden="true"
      ></div>

        {/* NavLinks */}
        <nav 
           className={`text-black ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#F1FAEE] space-y-6 z-[100050] right-0`}
           aria-label="Mobile navigation"
        >
          {NavLinks.map((link) => {
            return <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className='text-black w-fit ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]'>{link.label}</p>
              </Link>
          })}
          <div className="ml-12 pt-2">
            <a 
               href="/Viraj_Jayasiri_CV.pdf"
               download="Viraj_Jayasiri_CV.pdf"
               target="_blank"
               rel="noopener noreferrer"
               onClick={closeNav}
               className='px-6 py-3 text-sm cursor-pointer rounded-lg bg-[#a8dadc] hover:bg-[#457b9d] hover:text-white transition-all duration-300 text-[#1D3557] inline-flex items-center space-x-2 font-medium shadow-sm'
               aria-label="Download CV"
            >
               <BiDownload className='w-5 h-5'/>
               <span>Download CV</span>
            </a>
          </div>
          {/* CrossIcon */}
        <CgClose 
           onClick={closeNav} 
           className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'
           aria-label="Close navigation menu"
           role="button"
           tabIndex={0}
           onKeyDown={(e) => e.key === 'Enter' && closeNav()}
        />
        </nav>
      </div>
  )
}

export default MobileNav
