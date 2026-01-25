import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props ={
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNav = ({closeNav,showNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* OverLay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-60 w-full h-screen`}></div>

        {/* NavLinks */}
        <div className={`text-black ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#A8DADC] space-y-6 z-[100050] right-0`}>
          {NavLinks.map((link) => {
            return <Link key={link.id} href={link.url}>
              <p className='text-black w-fit ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]'>{link.label}</p>
              </Link>
          })}
          {/* CrossIcon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
        </div>
      </div>
  )
}

export default MobileNav
