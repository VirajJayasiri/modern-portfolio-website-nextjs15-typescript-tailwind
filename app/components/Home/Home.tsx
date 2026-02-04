import Blog from './Blog/Blog'
import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
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
      <Contact/>
    </div>
  )
}

export default Home
