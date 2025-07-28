import React, { useState } from "react";
import "../assets/Carousel.css";

const scholarships = [
  {
    title: "NABA",
    desc: "NABA €5000 Scholarship - First Come, First Serve!",
    img: "/1.png",
  },
  {
    title: "DOMUS",
    desc: "DOMUS ACADEMY | 60% Scholarship | India - Europe - UAE",
    img: "/2.png",
  },
  {
    title: "MARAGONI",
    desc: "istituto Marangoni - EU 10,000 - Post Graduate - Scholarship",
    img: "/3.png",
  },
  {
    title: "DOMUS",
    desc: "DOMUS ACADEMY GLOBAL SCHOLARSHIP",
    img: "/4.png",
  },
  {
    title: "MARAGONI",
    desc: "Istituto Marangoni - EU 15,000 - UG - Scholarship",
    img: "/5.png",
  },
  {
    title: "MARAGONI",
    desc: "Marangoni-1Yr Intensive-€10000 Scholarship",
    img: "/6.png",
  },
];

const Scholarships = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const columns = [
    [scholarships[0], scholarships[3]],
    [scholarships[1], scholarships[4]],
    [scholarships[2], scholarships[5]],
  ];

  const getIdx = (col, row) => col + row * 3;

  const isDesktop = window.innerWidth >= 1024; // Assuming lg breakpoint is 1024px

  return (
     <div className="w-full min-h-screen flex flex-col xl:flex-row">
      {/* 📷 Image Section - On Top in Small Screens */}
      <div className="order-1 xl:order-2 w-full xl:w-1/3 relative flex items-center justify-center min-h-[200px] lg:min-h-0 h-64 lg:h-auto mt-8 lg:mt-0">
        <img
          src="/scholarships.jpg"
          alt="Scholarships Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-l-3xl lg:rounded-l-3xl lg:rounded-none"
        />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bellefair text-yellow-600 text-center drop-shadow-lg">
          SCHOLARSHIPS
        </h1>
      </div>

      {/* 🧾 Cards Section - Below Image on Small Screens */}
      <div className="order-2 xl:order-1 w-full xl:w-2/3 flex flex-col xl:flex-row gap-4 lg:gap-6 p-2 sm:p-4 lg:p-8">
        {/* Mobile layout */}
        <div className="flex flex-col gap-4 xl:hidden">
          {scholarships.map((card, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={idx}
                className={`scholarship-card bg-black rounded-2xl border border-gray-700 flex flex-row items-center overflow-hidden cursor-pointer shadow-lg transition-all duration-500 min-h-[110px] max-h-[160px]`}
                style={{
                  zIndex: isExpanded ? 20 : 1,
                  height: isExpanded ? 150 : 100,
                }}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                <div className="flex-1 flex flex-col justify-center pl-4 pr-2 py-2">
                  <h2 className="text-lg font-bellefair text-yellow-600 mb-1 text-left tracking-wide leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-xs font-antic text-yellow-200 text-left leading-snug mb-2">
                    {card.desc}
                  </p>
                  <button className="mt-auto w-fit px-3 py-1 text-xs bg-yellow-600 text-black font-semibold rounded hover:bg-yellow-500 transition">
                    Apply Now
                  </button>
                </div>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-2/5 h-full object-cover object-center rounded-r-2xl"
                  style={{ minWidth: 0, minHeight: 0 }}
                />
              </div>
            );
          })}
       
        {/* Desktop layout */}
         <div className="hidden xl:flex flex-1 gap-6 h-[700px]"
        {/* Desktop: 3 columns, 2 cards each */}
        <div className="hidden lg:flex flex-1 gap-6 h-[650px]">

          {columns.map((colCards, colIdx) => {
            return (
              <div key={colIdx} className="flex flex-col gap-6 h-full flex-1">
                {colCards.map((card, rowIdx) => {
                  const globalIdx = getIdx(colIdx, rowIdx);
                  const isExpanded = expandedIdx === globalIdx;
                  const isOther =
                    expandedIdx !== null &&
                    Math.floor(expandedIdx / 3) === colIdx &&
                    !isExpanded;
                  return (
                    <div
                      key={globalIdx}
                      className={`scholarship-card bg-black rounded-2xl border border-gray-700 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg transition-all duration-500`}
                      style={{
                        flex: isExpanded ? 7 : isOther ? 2 : 1,
                        minHeight: 0,
                        maxHeight: "100%",
                        zIndex: isExpanded ? 20 : 1,
                        height: 0,
                      }}
                      onClick={() =>
                        setExpandedIdx(isExpanded ? null : globalIdx)
                      }
                    >
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <h2 className="text-4xl font-bellefair text-yellow-600 mb-4 text-center tracking-wide">
                          {card.title}
                        </h2>
                        <p className="text-lg font-antic text-yellow-200 text-center mb-4">
                          {card.desc}
                        </p>
                        <div className="flex justify-center">
                          <button className="px-5 py-2 text-sm bg-yellow-600 text-black font-semibold rounded hover:bg-yellow-500 transition">
                            Apply Now
                          </button>
                        </div>
                      </div>
                      <img
                        src={card.img}
                        alt={card.title}
                        className={`w-full object-cover object-top transition-all duration-500 ${
                          isExpanded ? "h-[350px]" : "h-24"
                        }`}
                        style={{
                          objectFit: isExpanded ? "contain" : "cover",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Scholarships;
