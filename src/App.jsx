import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Carousel from './component/Carousel'
import Courses from './component/Courses'
import Blogs from './component/Blogs'
import Testimonial from './component/Testimonial'
import Scholarships from './component/Scholarships'
import Event from './component/Event'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Courses/>
        <Carousel/>
        <Blogs/>
        <Testimonial/>
        <Scholarships/>
        <Event/>
        <Footer/>

      </div>
    </>
  )
}

export default App
