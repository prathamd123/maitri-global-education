import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const courseData = [
  {
    title: "Fashion Business",
    description:
      "The three-year course in “Fashion Business” is aimed at creating a new generation of creative leaders able to understand and manage the increasing social challenges of",
    image: "https://i.postimg.cc/4xrKFR75/Fashion-Business.jpg",
  },
  {
    title: "Fashion Design",
    description:
      "The three-year course in “Fashion Design” is aimed at empowering individuals to redefine trends and aesthetics through creativity and innovation.",
    image: "https://i.postimg.cc/ZRLCR9f7/Fashion-Design.avif",
  },
  {
    title: "Accessory Designing",
    description:
      "The three-year course in “Accessory Designing” is aimed at creating a new generation of creative leaders able to understand and manage the increasing social challenges of",
    image: "https://i.postimg.cc/vZ1gzZBT/Accessory-Design.jpg",
  },
  {
    title: "Interior Design",
    description:
      "The three-year course in Interior Design” is aimed at creating a new generation of innovative thinkers who can design practical and futuristic products.",
    image: "https://i.postimg.cc/BQbXSn2p/Interior-Design.png",
  },
];

const AUTO_INTERVAL = 5000;

export default function Courses() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % courseData.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const current = courseData[index];

  const springTransition = {
    type: "spring",
    stiffness: 60,
    damping: 20,
  };

  const slideVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif text-white ">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="absolute inset-0"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
          >
            <img
              src={current.image}
              className="w-full h-full object-cover"
              alt={current.title}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header */}
      <div className="absolute top-0 w-full text-center py-6 text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-widest z-30">
        University by Streams
      </div>

      {/* Text + Card Content */}
      <div className="relative z-30 flex flex-col md:flex-row items-center md:items-start h-full gap-6 px-6 md:px-20 pt-28 md:pt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title + "-text"}
            className="w-full md:w-1/2 space-y-6"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
          >
            <h1 className="text-4xl md:text-5xl font-semibold uppercase">
              {current.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="relative w-64 h-80 md:w-72 md:h-[400px] shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image + "-card"}
              className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white shadow-xl"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={springTransition}
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Next Thumbnail Button */}
      <button
        onClick={handleNext}
        className="absolute z-30 bottom-6 right-6 md:top-1/2 md:-translate-y-1/2 md:right-10 w-24 h-32 md:w-32 md:h-44 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
        aria-label="Next Course"
      >
        <img
          src={courseData[(index + 1) % courseData.length].image}
          alt="Next"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}
