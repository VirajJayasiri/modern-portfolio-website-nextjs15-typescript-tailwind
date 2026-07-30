import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMap, BiPhone } from 'react-icons/bi'
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <div id='contact' className='pt-16 pb-20 bg-white text-black'>
      <div className='w-[90%] md:w-[80%] lg:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
         {/* Text Content */}
         <div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D3557]'>
               Get In Touch & <br /><span className='text-[#E63946]'>Let&apos;s Connect</span>
            </h2>
            <p className='text-[#E63946] mt-4 text-base sm:text-lg font-medium'>
               Currently seeking Software Engineering Internship opportunities to contribute to reliable and well-structured software solutions.
            </p>
            {/* Info */}
            <div className='mt-8 space-y-4'>
               <a href="tel:+94707070409" className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 bg-[#F1FAEE] border border-[#A8DADC] rounded-full flex items-center justify-center group-hover:bg-[#457B9D] transition-colors'>
                     <BiPhone className='w-6 h-6 text-[#1D3557] group-hover:text-white transition-colors'/>
                  </div>
                  <p className='text-lg font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors'>+94 70 7070 409</p>
               </a>
               <a href="mailto:viraj.jayasiri.work@gmail.com" className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 bg-[#F1FAEE] border border-[#A8DADC] rounded-full flex items-center justify-center group-hover:bg-[#457B9D] transition-colors'>
                     <BiEnvelope className='w-6 h-6 text-[#1D3557] group-hover:text-white transition-colors'/>
                  </div>
                  <p className='text-lg font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors'>viraj.jayasiri.work@gmail.com</p>
               </a>
               <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-[#F1FAEE] border border-[#A8DADC] rounded-full flex items-center justify-center'>
                     <BiMap className='w-6 h-6 text-[#1D3557]'/>
                  </div>
                  <p className='text-lg font-bold text-[#1D3557]'>Colombo, Sri Lanka</p>
               </div>
            </div>
            {/* Social Media Icons */}
            <div className='flex items-center mt-8 space-x-4'>
               <a 
                  href="https://github.com/VirajJayasiri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className='w-12 h-12 bg-[#1D3557] hover:bg-[#E63946] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md'
               >
                  <BiLogoGithub className='text-white w-6 h-6'/>
               </a>
               <a 
                  href="https://linkedin.com/in/virajjayasiri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className='w-12 h-12 bg-[#0A66C2] hover:bg-[#1D3557] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md'
               >
                  <BiLogoLinkedin className='text-white w-6 h-6'/>
               </a>
               <a 
                  href="mailto:viraj.jayasiri.work@gmail.com" 
                  aria-label="Send Email"
                  className='w-12 h-12 bg-[#E63946] hover:bg-[#1D3557] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md'
               >
                  <BiEnvelope className='text-white w-6 h-6'/>
               </a>
            </div>
         </div>
         {/* Form */}
         <div data-aos="zoom-in" data-aos-delay="100" className='md:p-8 p-6 bg-[#F1FAEE] border border-[#A8DADC] rounded-2xl shadow-md'>
            <form onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="text" 
                  placeholder='Your Name' 
                  name="name"
                  aria-label="Your name"
                  required
                  className='px-4 py-3.5 bg-white border border-[#A8DADC] text-gray-800 outline-none rounded-xl w-full placeholder:text-gray-400 focus:border-[#457B9D]'
               />
               <input 
                  type="email" 
                  placeholder='Your Email Address' 
                  name="email"
                  aria-label="Your email"
                  required
                  className='px-4 py-3.5 mt-5 bg-white border border-[#A8DADC] text-gray-800 outline-none rounded-xl w-full placeholder:text-gray-400 focus:border-[#457B9D]'
               />
               <input 
                  type="tel" 
                  placeholder='Phone Number' 
                  name="phone"
                  aria-label="Your phone number"
                  className='px-4 py-3.5 mt-5 bg-white border border-[#A8DADC] text-gray-800 outline-none rounded-xl w-full placeholder:text-gray-400 focus:border-[#457B9D]'
               />
               <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  aria-label="Your message"
                  required
                  rows={4}
                  className='px-4 py-3.5 mt-5 bg-white border border-[#A8DADC] text-gray-800 outline-none rounded-xl w-full placeholder:text-gray-400 focus:border-[#457B9D] resize-none'
               ></textarea>
               <button 
                  type="submit"
                  aria-label="Send message"
                  className='mt-6 w-full py-4 bg-[#E63946] hover:bg-[#1D3557] transition-all duration-300 cursor-pointer text-white font-semibold rounded-xl shadow-md'
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
