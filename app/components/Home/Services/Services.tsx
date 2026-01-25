import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-10 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
         Building Full-Stack Digital Solutions<br /> Through Code, Logic, & Collaboration
      </h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
         <div>
            <ServiceCard icon="/images/0s1.png"
            name="UI & UX Engineering"
            description="Designing clean and intuitive interfaces that prioritize usability and accessibility. Focused on responsive layouts, clear navigation, and consistent visual structure." />
         </div>
         <div>
            <ServiceCard icon="/images/0s2.png"
            name="Web & Application Development"
            description="Developing modern web and application solutions using current frameworks and tools. Emphasis on performance, scalability, and real-world problem solving." />
         </div>
         <div>
            <ServiceCard icon="/images/0s3.png"
            name="System Design & Problem Solving"
            description="Applying logical thinking and creativity to break down complex problems into simple, effective solutions. Driven by curiosity and continuous improvement." />
         </div>
         <div>
            <ServiceCard icon="/images/0s4.png"
            name="Software Development & Engineering"
            description="Building maintainable and structured software using object-oriented principles and best practices. Focused on clean code, reusability, and long-term scalability." />
         </div>
      </div>
    </div>
  )
}

export default Services
