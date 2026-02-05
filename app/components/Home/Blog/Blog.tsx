import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
         My Latest <span className='text-[#E63946]'>Blogs</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="000">
          <BlogCard image="/images/b1.jpg" title="Latest Trends in Web Development"/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <BlogCard image="/images/b2.jpg" title="Understanding React Hooks"/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <BlogCard image="/images/b3.jpg" title="Advanced TypeScript Tips"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
