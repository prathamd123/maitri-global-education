import { div } from 'framer-motion/client'
import React from 'react'

function Blogs() {
  return (
    <div className='bg-black text-white p-6 font-cinzel'>
      {/* Blog Heading */}
      <div className="bg-black text-white p-6 flex items-right justify-end pr-44  ">
  <h1 className="text-6xl font-cinzel font-bold text-[#CA8304]  ">
    BLOGS
  </h1>
  <button className="bg-[brown] font-cinzel text-2xl text-white font-bold px-8 py-2 rounded-2xl ml-48 hover:bg-[#CA8304] transition duration-300">
    All Blogs
  </button>
</div>
<div className="bg-black text-white px-16 py-10">
  

  {/* Blog Cards */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-auto mb-14">
    {[...Array(4)].map((_, i) => (
      <div key={i} className=" group transition-all duration-300 hover:scale-105  w-[300px] h-[400px]">
        <div className="bg-black  rounded-xl border-4 border-[#CA8304] border-b-0">
          <img
            src="/blog.jpg"
            alt="Blog"
            className="w-full h-70 object-cover mt-4 rounded-2xl ml-5  opacity-80 hover:opacity-100 transition duration-300"
          />
        </div>

        {/* Info */}
        <div className="bg-black p-5 rounded-xl border-2 border-[#CA8304] w-[320px] mb-72 rounded-b-0">
          <p className="text-lg text-[#CA8304] font-bold mb-1">CAREER</p>
          <p className="text-sm text-gray-400 mb-2">05 JUL 2025</p>
          <h3 className="text-md font-semibold leading-relaxed">
            Excellent University Interview Preparation in Europe: Questions & Strategies for 2025
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>



</div>

  )
}

export default Blogs