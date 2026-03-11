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
        className="absolute inset-0 w-full h-screen  block md:hidden"
      />

      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 mt-[20vh] md:mt-[16vh] w-full px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-2xl -mt-24 md:-mt-0 md:text-6xl leading-tight text-[#1E1E1E] font-goodly font-medium">
            <span className="bg-gradient-to-r from-[#FFB724] to-[#F76200] bg-clip-text text-transparent">
              Discover
            </span>{" "}
            Journeys That
            <br /> Become
            <span className="text-[#0061E0]"> Memories</span>
          </h1>

          {/* New Paragraph */}
          <p className="hidden md:block md:mt-4 mt-2 text-[13px] font-medium md:text-[15px] text-black max-w-2xl mx-auto font-poppins">
            From dream vecations to perfectly planned tours explore the world
            with seamless travel experinces, curated packages, and personalized
            support every step of the way.
          </p>

          <div className="mt-5 flex flex-col md:flex-row  text-[13px] md:text-[17px] justify-center items-center gap-3 md:gap-4">

            <buttonS
              className="bg-gradient-to-l from-[#F76200] to-[#FFB724]  text-white w-[60%] md:w-auto md:px-6 md:py-3 py-3 rounded-full transition font-poppins"
              onClick={() => navigate("/tour-packages")}
            >
              Explore Packages
            </buttonS>

            <button
              className="border border-white text-white  bg-gradient-to-l from-[#00357A] to-[#0061E0] w-[60%] md:w-auto md:px-10 md:py-3 py-3 rounded-full transition font-poppins"
            >
              Plan My Trip
            </button>

          </div>
          {/* Existing Paragraph */}

          {/* Search Bar */}
          <div className="md:ml-20 font-poppins font-medium md:mt-8 mt-4 p-2 md:p-4 bg-[#FFFFFF1A] backdrop-blur-xs flex flex-col md:flex-row rounded-2xl md:rounded-full border border-[#FFFFFF] md:max-w-4xl gap-2 md:gap-0">

            <div className="bg-white rounded-xl md:rounded-full flex flex-col md:flex-row z-40 items-center md:gap-6 w-full p-1 md:p-2">

              {/* Location */}
              <div className="flex items-center gap-2 px-3 py-3 md:px-4 md:py-2 w-full">
                <MapPin size={16} className="text-blue-600" />
                <select className="outline-none w-full text-[#0644A0] text-sm md:text-base">
                  <option className="font-poppins font-medium">Location</option>
                </select>
              </div>

              <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

              {/* Date */}
              <div
                className="flex items-center gap-2 px-3 py-3 md:px-4 md:py-2 w-full relative cursor-pointer"
                onClick={() => hiddenDateRef.current?.showPicker()}
              >
                <Calendar size={16} className="text-[#0644A0]" />

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

              <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

              {/* Travelers */}
              <div className="flex items-center gap-2 px-3 py-3 md:px-4 md:py-2 w-full">
                <Users size={16} className="text-blue-600" />
                <select className="outline-none w-full text-[#0644A0] text-sm md:text-base">
                  <option className="font-poppins font-medium">Travelers</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-l from-[#FFB724] to-[#F76200] text-white w-full md:w-auto px-5 md:px-14 py-3 md:py-2 rounded-full flex items-center justify-center gap-2 transition whitespace-nowrap md:-ml-12 z-10 text-sm md:text-base">
              <Search size={16} className="flex-shrink-0" />
              <span className="text-center font-poppins font-medium">Search Tour</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
