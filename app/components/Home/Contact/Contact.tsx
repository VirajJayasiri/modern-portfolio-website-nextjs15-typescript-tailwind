import { BiEnvelope, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiMap, BiPhone, BiX } from 'react-icons/bi'
import "aos/dist/aos.css";


const Contact = () => {
  return (
    <div id='contact' className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
         {/* Text Content */}
         <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D3557]'>Schedule a Meeting with Me to See if I can Help</h1>
            <p className='text-[#E63946] mt-6 text-base sm:text-lg'>Reach out to me today & let's discuss how I can help you achieve your goals.</p>
            {/* Info */}
            <div className='mt-7'>
               <div className='flex items-center space-x-3 mb-4'>
                  <BiPhone className='w-9 h-9 text-[#212529]'/>
                  <p className='text-xl font-bold text-[#212529]'>+94 76 870 8384</p>
               </div>
               <div className='flex items-center space-x-3 mb-4'>
                  <BiEnvelope className='w-9 h-9 text-[#212529]'/>
                  <p className='text-xl font-bold text-[#212529]'>viraj.jayasiri@outlook.com</p>
               </div>
               <div className='flex items-center space-x-3 mb-4'>
                  <BiMap className='w-9 h-9 text-[#212529]'/>
                  <p className='text-xl font-bold text-[#212529]'>Mount Lavinia, Sri Lanka</p>
               </div>
            </div>
            {/* Social Media Icons */}
            <div className='flex items-center mt-8 space-x-3'>
               <div className='w-14 h-14 bg-[#457B9D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-700 transition-all duration-300'>
                  <BiLogoFacebook className='text-white w-6 h-6'/>
               </div>
               <div className='w-14 h-14 bg-[#457B9D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300'>
                  <BiLogoYoutube className='text-white w-6 h-6'/>
               </div>
               <div className='w-14 h-14 bg-[#457B9D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300'>
                  <BiLogoTwitter className='text-white w-6 h-6'/>
               </div>
               <div className='w-14 h-14 bg-[#457B9D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-600 transition-all duration-300'>
                  <BiLogoInstagram className='text-white w-6 h-6'/>
               </div>
            </div>
         </div>
         {/* Form */}
         <div data-aos="zoom-in" data-aos-delay="100" className='md:p-10 p-5 bg-[#A8DADC] rounded-lg'>
            <form>
               <input 
                  type="text" 
                  placeholder='Name' 
                  name="name"
                  aria-label="Your name"
                  className='px-4 py-3.5 bg-[#457B9D] text-white outline-none rounded-md w-full placeholder:text-white/70'
               />
               <input 
                  type="email" 
                  placeholder='Email Address' 
                  name="email"
                  aria-label="Your email"
                  className='px-4 py-3.5 mt-6 bg-[#457B9D] text-white outline-none rounded-md w-full placeholder:text-white/70'
               />
               <input 
                  type="tel" 
                  placeholder='Phone Number' 
                  name="phone"
                  aria-label="Your phone number"
                  className='px-4 py-3.5 mt-6 bg-[#457B9D] text-white outline-none rounded-md w-full placeholder:text-white/70'
               />
               <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  aria-label="Your message"
                  rows={5}
                  className='px-4 py-3.5 mt-6 bg-[#457B9D] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40 resize-none'
               ></textarea>
               <button 
                  type="submit"
                  aria-label="Send message"
                  className='mt-8 px-12 py-4 bg-[#E63946] hover:bg-[#000000] transition-all duration-300 cursor-pointer text-white rounded-full'
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Contact
