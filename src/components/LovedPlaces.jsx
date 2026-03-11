import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IoIosAirplane } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const places = [
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1544131417-4698ea7df9ec?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea456f88d47?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
  },
];

export default function LovedPlaces() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" p-4 md:p-0">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative  overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Goa"
            className="hidden md:block w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-6 left-20 right-6 text-white space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-goodly font-medium">
              Goa – Beaches & Nightlife
            </h2>
            <p className="text-sm  text-[13px] sm:text-[18px] lg:text-[15px]   max-w-xl text-gray-200 font-poppins font-normal">
              Goa is the perfect mix of relaxation and celebration. From golden
              beaches and vibrant nightlife to Portuguese heritage and water
              sports, it’s a complete holiday package.
            </p>
            <button
              className="bg-white text-blue-600 font-poppins font-medium px-6 py-2 rounded-full shadow hover:scale-105 transition text-[17px]"
              onClick={() => navigate("/tour-packages")}
            >
              Explore Packages
            </button>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <div className="space-y-8 -mt-24 md:mt-0">
          <div>
            <div className="flex items-center  md:mt-10 md:text-[17px] text-[10px] justify-start gap-3">
              <img src="/icons/Vector-2.svg" alt="icon" />
              <div className="w-10 border-t-2  border-dotted border-[#FC8605]"></div>
              <p className="bg-gradient-to-r font-goodly font-medium from-[#FFB724] to-[#F76200] bg-clip-text text-transparent">
                Popular Destinations
              </p>
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <img src="/icons/Vector-1.svg" alt="icon" />
            </div>
            <h2 className="text-xl sm:text-[36px] lg:text-[36px] mt-3 font-medium font-goodly text-gray-900 leading-tight">
              Explore The <span className="text-[#FC8605]">World's</span> Most
              <br /> Loved <span className="text-[#0061E0]">Places</span>
            </h2>
          </div>

          <div className="flex gap-6 text-[#00000040] font-medium text-sm sm:text-[17px] font-poppins">
            <span className="text-blue-600 font-poppins border-b-2 border-[#F76200] pb-1">
              Popular
            </span>
            <span className="hover:text-black cursor-pointer font-poppins">Luxurious</span>
            <span className="hover:text-black cursor-pointer font-poppins">Adventures</span>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-4 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {places.map((place, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
                style={{ width: "180px", height: "230px" }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2 left-2 text-white font-poppins font-semibold text-sm">
                  {place.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-0 md:pr-8">
            <div className="flex items-center justify-end gap-3">
              <p className=" bg-clip-text font-poppins font-medium text-[#00000094] md:text-[17px] ">
                View All Places & Packages
              </p>
              <div className="hidden md:block w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <img src="/icons/Vector-1.svg" alt="icon" className="hidden md:block" />
            </div>

            <div className="flex gap-3">
              <button
                className="p-3 rounded-full bg-[#FFB724] text-white shadow hover:scale-110 transition"
                onClick={() => scroll("prev")}
              >
                <IoIosAirplane size={18} className="-scale-x-100" />
              </button>

              <button
                className="p-3 rounded-full bg-[#0061E0] text-white shadow hover:scale-110 transition"
                onClick={() => scroll("next")}
              >
                <IoIosAirplane size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
