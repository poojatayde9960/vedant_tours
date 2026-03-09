import React, { useState, useRef } from "react";
import { MapPin, Calendar, Users, Search, ChevronDown } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const hiddenDateRef = useRef(null);

  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Background Imageee */}
      <img
        src="/img/hero-img.png"
        alt="hero"
        className="absolute h-[800px] inset-0     object-cover"
      />

      <img
        src="/img/hero-responsive.png"
        className="absolute inset-0 w-full h-screen block md:hidden object-cover"
      />

      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 mt-[20vh] md:mt-[16vh] w-full px-4 sm:px-8 lg:px-16 text-white text-center">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl md:text-6xl leading-tight text-[#1E1E1E] font-goodly font-medium">
            <span className="bg-gradient-to-r from-[#FFB724] to-[#F76200] bg-clip-text text-transparent">
              Discover
            </span>{" "}
            Journeys That
            <br /> Become
            <span className="text-[#0061E0]"> Memories</span>
          </h1>

          {/* New Paragraph */}
          <p className="mt-4 text-sm md:text-[15px] text-black max-w-2xl mx-auto font-poppins px-4">
            From dream vacations to perfectly planned tours explore the world
            with seamless travel experiences, curated packages, and personalized
            support every step of the way.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-gradient-to-l from-[#F76200] to-[#FFB724] text-white px-6 py-3 rounded-full transition font-poppins text-sm md:text-base"
              onClick={() => navigate("/tour-packages")}>
              Explore Packages
            </button>
            <button className="border border-white text-white bg-gradient-to-l from-[#00357A] to-[#0061E0] px-6 py-3 rounded-full transition font-poppins text-sm md:text-base">
              Plan My Trip
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-10 mx-auto p-2 md:p-4 bg-[#FFFFFF10] backdrop-blur-md flex flex-col md:flex-row rounded-3xl md:rounded-full border border-white/20 max-w-4xl font-poppins gap-2 md:gap-0 shadow-2xl">
            <div className="bg-white rounded-2xl md:rounded-full flex flex-col md:flex-row items-center md:gap-4 w-full p-1 md:pr-14">
              {/* Location */}
              <div className="flex items-center gap-2 px-4 py-3 md:py-2 w-full border-b md:border-b-0 md:border-r border-gray-100">
                <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                <select className="outline-none w-full text-[#0644A0] bg-transparent text-sm md:text-base">
                  <option>Location</option>
                </select>
              </div>

              {/* Date */}
              <div
                className="flex items-center gap-2 px-4 py-3 md:py-2 w-full relative cursor-pointer border-b md:border-b-0 md:border-r border-gray-100"
                onClick={() => hiddenDateRef.current?.showPicker()}
              >
                <Calendar size={18} className="text-[#0644A0] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Date From"
                  value={selectedDate}
                  readOnly
                  className="outline-none w-full text-[#0644A0] placeholder:text-[#0644A0] bg-transparent cursor-pointer text-sm md:text-base"
                />
                <input
                  ref={hiddenDateRef}
                  type="date"
                  className="absolute opacity-0 pointer-events-none"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              {/* Travelers */}
              <div className="flex items-center gap-2 px-4 py-3 md:py-2 w-full">
                <Users size={18} className="text-blue-600 flex-shrink-0" />
                <select className="outline-none w-full text-[#0644A0] bg-transparent text-sm md:text-base">
                  <option>Travelers</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-l from-[#FFB724] to-[#F76200] text-white w-full md:w-auto px-10 py-4 md:py-2 rounded-full flex items-center justify-center gap-2 transition md:-ml-12 z-10 shadow-lg hover:scale-105 active:scale-95 duration-200">
              <Search size={18} className="flex-shrink-0" />
              <span className="font-semibold">Search Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
