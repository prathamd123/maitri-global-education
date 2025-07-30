import React, { useState, useEffect } from "react";

const baseImages = [
  {
    src: "/1.png",
    title: "Mountains",
    subtitle: "Where silence speaks",
    desc: "Peaceful view of the mountains with serene skies and fresh air.",
    buttons: ["Trek Now", "Gallery", "Explore", "Share"],
  },
  {
    src: "/2.png",
    title: "Ocean",
    subtitle: "The blue abyss",
    desc: "Waves crashing onto the shore bring calmness and inspiration.",
    buttons: ["Sail Away", "Dive In", "Gallery", "Subscribe"],
  },
  {
    src: "/3.png",
    title: "Forest",
    subtitle: "Nature’s Heartbeat",
    desc: "Feel the breath of the Earth with green surroundings and calm.",
    buttons: ["Discover", "Wildlife", "Gallery", "Join Us"],
  },
  {
    src: "/4.png",
    title: "Desert",
    subtitle: "Golden Tranquility",
    desc: "The golden dunes hold secrets of time and endless stories.",
    buttons: ["Ride Now", "Heatwave", "Gallery", "Follow"],
  },
  {
    src: "/5.png",
    title: "City",
    subtitle: "Concrete Dreams",
    desc: "Skyscrapers touching clouds, buzzing with energy and ambition.",
    buttons: ["Visit", "Nightlife", "Gallery", "Subscribe"],
  },
  {
    src: "/6.png",
    title: "Valley",
    subtitle: "Green Serenity",
    desc: "Lush valleys and flowing rivers create pure visual poetry.",
    buttons: ["View More", "Nature Trails", "Gallery", "Sign Up"],
  },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % baseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prev = (current - 1 + baseImages.length) % baseImages.length;
  const next = (current + 1) % baseImages.length;
  const currentImage = baseImages[current];

  return (
    <div className="w-screen bg-white p-6">
      {/* Heading */}
     <h1 className="metalic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9A7142] font-extrabold z-40 text-center mb-4 mt-4">
        Events
      </h1>
      <div className="relative flex justify-center items-start">
        {/* Left Image */}
     <div className="hidden sm:block relative z-10 w-[25%] opacity-40">
          <div className="h-[500px] overflow-hidden shadow transition-all duration-500">
            <img
              src={baseImages[prev].src}
              alt={baseImages[prev].title}
              className="w-full h-full object-cover opacity-40 transition-opacity duration-500"
            />
          </div>
          <div className="mt-2 text-left px-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {baseImages[prev].title}
            </h1>
            <h2 className="text-lg text-gray-600">
              {baseImages[prev].subtitle}
            </h2>
            <button className="mt-1 px-4 py-1 text-sm bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
              {baseImages[prev].buttons[0]}
            </button>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative z-20 w-full sm:w-[60%] sm:-mx-6 rounded">
          <div className="h-[500px] overflow-hidden shadow-2xl  transition-all duration-500">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
            />
          </div>
          <div className="mt-4 text-left px-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {currentImage.title}
            </h1>
            <h2 className="text-lg text-gray-600">
              {currentImage.subtitle}
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              {currentImage.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentImage.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-4 py-1 text-sm bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
      <div className="hidden sm:block relative z-10 w-[25%] opacity-40">
          <div className="h-[500px] overflow-hidden shadow transition-all duration-500">
            <img
              src={baseImages[next].src}
              alt={baseImages[next].title}
              className="w-full h-full object-cover opacity-40 transition-opacity duration-500"
            />
          </div>
          <div className="mt-2 text-left px-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {baseImages[next].title}
            </h1>
            <h2 className="text-lg text-gray-600">
              {baseImages[next].subtitle}
            </h2>
            <button className="mt-1 px-4 py-1 text-sm bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
              {baseImages[next].buttons[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
