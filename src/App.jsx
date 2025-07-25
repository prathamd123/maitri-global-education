import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Carousel from './component/Carousel'
import Courses from './component/Courses'
import Blogs from './component/Blogs'
import Scholarships from './component/Scholarships'
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
        <Scholarships/>
        <Footer/>

      </div>
    </>
  )
}

export default App
