import React from "react";

const ImageWithText = () => {
  return (
    <div>
      {/* Section Heading */}
      <div className="flex justify-center m-auto">
        <h1 className="text-6xl font-bold text-[#ca81049a]">About</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto px-4 py-12 gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.jpg"
            alt="Descriptive Alt"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#9A7142] mb-4">
            Welcome to Maitri Global Education
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Empowering Students Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            At Maitri Global Education, we provide expert guidance for international
            admissions, visa processing, and career counseling. Our mission is to
            make global education accessible and hassle-free for every student.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-fit mx-auto md:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
