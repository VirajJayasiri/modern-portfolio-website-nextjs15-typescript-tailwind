import Blog from './Blog/Blog'
import ClientReview from './ClientReview/ClientReview'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Services from './Services/Services'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
    </div>
  )
}

export default Home
