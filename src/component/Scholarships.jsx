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

  // Organize cards into columns
  const columns = [
    [scholarships[0], scholarships[3]],
    [scholarships[1], scholarships[4]],
    [scholarships[2], scholarships[5]],
  ];

  // Helper to get global index from col/row
  const getIdx = (col, row) => col + row * 3;

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-black">
      {/* Left: Cards Grid */}
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-4 lg:gap-6 p-2 sm:p-4 lg:p-8" style={{ height: undefined }}>
        {/* Mobile: stack all cards in a single column */}
        <div className="flex flex-col gap-4 lg:hidden">
          {scholarships.map((card, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={idx}
                className={`scholarship-card bg-black rounded-2xl border border-gray-700 flex flex-row items-center overflow-hidden cursor-pointer shadow-lg transition-all duration-500 min-h-[110px] max-h-[160px]`}
                style={{
                  zIndex: isExpanded ? 20 : 1,
                  height: isExpanded ? 160 : 110,
                }}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                <div className="flex-1 flex flex-col justify-center pl-4 pr-2 py-2">
                  <h2 className="text-lg font-bellefair text-yellow-600 mb-1 text-left tracking-wide leading-tight">{card.title}</h2>
                  <p className="text-xs font-antic text-yellow-200 text-left leading-snug">{card.desc}</p>
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
        </div>
        {/* Desktop: 3 columns, 2 cards each */}
        <div className="hidden lg:flex flex-1 gap-6 h-[700px]">
          {columns.map((colCards, colIdx) => {
            return (
              <div key={colIdx} className="flex flex-col gap-6 h-full flex-1">
                {colCards.map((card, rowIdx) => {
                  const globalIdx = getIdx(colIdx, rowIdx);
                  const isExpanded = expandedIdx === globalIdx;
                  const isOther = expandedIdx !== null && Math.floor(expandedIdx / 3) === colIdx && !isExpanded;
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
                      onClick={() => setExpandedIdx(isExpanded ? null : globalIdx)}
                    >
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <h2 className="text-4xl font-bellefair text-yellow-600 mb-4 text-center tracking-wide">{card.title}</h2>
                        <p className="text-lg font-antic text-yellow-200 text-center">{card.desc}</p>
                      </div>
                      <img
                        src={card.img}
                        alt={card.title}
                        className={`w-full object-cover object-top transition-all duration-500 ${isExpanded ? "h-[350px]" : "h-24"}`}
                        style={{ objectFit: isExpanded ? "contain" : "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* Right: Background and Title */}
      <div className="w-full lg:w-1/3 relative flex items-center justify-center min-h-[200px] lg:min-h-0 h-64 lg:h-auto mt-8 lg:mt-0">
        <img
          src="/scholarships.jpg"
          alt="Scholarships Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-l-3xl lg:rounded-l-3xl lg:rounded-none"
        />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bellefair text-yellow-600 text-center drop-shadow-lg">SCHOLARSHIPS</h1>
      </div>
    </div>
  );
};

export default Scholarships; 