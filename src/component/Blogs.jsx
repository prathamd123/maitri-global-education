import React from 'react';

function Blogs() {
  return (
    <div className="bg-black text-white font-cinzel w-full">
      {/* Blog Heading */}
     <div className="relative bg-black text-white px-2  sm:px-8 md:px-16 lg:px-24  py-8 md:py-16 w-full max-w-screen-xl border-r-4 border-[#CA8304]  mx-auto overflow-hidden">
  {/* Top Border */}
  <div className="absolute top-0 right-0 h-[6px] w-3/5 bg-gradient-to-l from-[#CA8304] to-transparent" />

  {/* Bottom Border */}
  <div className="absolute bottom-0 right-0 h-[6px] w-5/6 bg-gradient-to-l from-[#CA8304] to-transparent" />

  {/* Centered BLOGS text */}
  <div className="flex items-center justify-center">
    <h1 className="text-5xl md:text-6xl font-bold text-[#CA8304] text-center">
      BLOGS
    </h1>
  </div>

 {/* Button on right */}
<div className="flex justify-center mt-4 md:mt-0 md:block md:absolute md:right-4 sm:md:right-8 md:top-1/2 md:transform md:-translate-y-1/2">
  <button className="bg-[brown] font-cinzel text-lg md:text-2xl text-white font-bold px-6 md:px-8 py-2 rounded-full border-2 border-[#CA8304] hover:bg-[#CA8304] transition duration-300">
    All Blogs
  </button>
</div>

</div>


      {/* Blog Cards */}
      <div className="bg-black text-white px-4 sm:px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 justify-center max-w-screen-xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="group transition-all duration-300 hover:scale-105 w-full max-w-[300px] mx-auto"
            >
              <div className="bg-black rounded-t-xl border-4 border-[#CA8304] border-b-0">
                <img
                  src="/blog.jpg"
                  alt="Blog"
                  className="w-full h-60 object-cover mt-4 rounded-xl ml-3 opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="bg-black p-5 rounded-xl border-2 border-[#CA8304] mt-1 border-t-1">
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
  );
}

export default Blogs;
