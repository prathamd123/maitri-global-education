import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Carousel from './component/Carousel'
import Courses from './component/Courses'
import Scholarships from './component/Scholarships'
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Courses/>
        <Carousel/>
        <Scholarships/>
      </div>
    </>
  )
}

export default App
