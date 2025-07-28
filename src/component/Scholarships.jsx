import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseImages = [
  { src: "/1.png", title: "Mountains", desc: "Peaceful view of the mountains." },
  { src: "/2.png", title: "Ocean", desc: "Waves crashing onto the shore." },
  { src: "/3.png", title: "Forest", desc: "Nature’s untouched beauty." },
  { src: "/4.png", title: "Desert", desc: "The golden dunes of the desert." },
  { src: "/5.png", title: "City", desc: "Skyscrapers touching the clouds." },
  { src: "/6.png", title: "Valley", desc: "Green valleys and rivers flowing." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = baseImages.length;

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  // Get the 3 indexes to show: [left, center, right]
  const getVisibleIndexes = () => {
    const left = (current - 1 + total) % total;
    const center = current;
    const right = (current + 1) % total;
    return [left, center, right];
  };

  const getClass = (index) => {
    if (index === current) return "scale-100 opacity-100 z-20";
    if (index === (current + 1) % total || index === (current - 1 + total) % total)
      return "scale-90 opacity-50 z-10";
    return "hidden";
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black hover:bg-black/10 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black hover:bg-black/10 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-6 transition-all duration-700 ease-in-out">
        {getVisibleIndexes().map((index) => {
          const item = baseImages[index];
          const className = getClass(index);

          return (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out transform w-[70vw] max-w-[400px] text-center ${className}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full object-cover rounded-xl transition-all duration-700 ease-in-out ${
                    index === current ? "h-[450px]" : "h-[350px]"
                  }`}
                />
              </div>
              <h3 className="mt-4 text-black text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
