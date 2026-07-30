import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-10 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
         Core Technical <span className='text-[#E63946]'>Specializations</span>
      </h1>
      <p className='text-center text-gray-600 mt-3 max-w-2xl mx-auto px-4 text-sm sm:text-base'>
         Combining solid software engineering principles, modern frameworks, and cloud workflows to deliver robust digital solutions.
      </p>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-16 items-stretch'>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard icon="/images/0s1.png"
            name="Full-Stack & Real-Time Apps"
            description="Building dynamic web applications featuring JWT authentication, real-time WebSockets, STOMP messaging, and video/audio integration with LiveKit, React & Spring Boot." />
         </div>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard icon="/images/0s2.png"
            name="Backend & REST API Engineering"
            description="Designing robust RESTful services using Spring Boot & FastAPI. Implementing secure token auth (JWT), Spring Security, relational SQL, and NoSQL MongoDB databases." />
         </div>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard icon="/images/0s3.png"
            name="AI & Computer Vision"
            description="Developing intelligent computer vision pipelines utilizing OpenCV, MTCNN, and DeepFace for facial detection, feature extraction, similarity matching, and smart attendance tracking." />
         </div>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard icon="/images/0s4.png"
            name="Cloud & DevOps Automation"
            description="Containerizing applications with Docker, deploying to AWS EC2 & Firebase Hosting, and developing custom Java CLI automation tools with automated CI/CD via GitHub Actions." />
         </div>
      </div>
    </div>
  )
}

export default Services
