import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, CalendarDays } from "lucide-react";

export default function CategoryHeroSection() {
  const [tripType, setTripType] = useState("oneway");
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-gray-100 pb-20 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/Rectangle 151.png"
          alt="travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-40">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-goodly font-medium max-w-3xl">
          Find You Next Place To Visit
        </h1>
        <p className="text-white/90 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl font-poppins">
          Discover amazing sites to explore
        </p>
      </div>

      {/* Search Card */}
      <div className="absolute z-20 inset-x-0 md:top-[190px] top-32 flex justify-center px-4 md:px-0">
        <div className="w-full max-w-6xl bg-white rounded-[24px] border border-[#A9C1E6] p-4 md:p-6 mt-9  shadow-sm">
          {/* Trip Type Buttons */}
          <div className="flex gap-2 md:gap-6 border-b pb-2 md:pb-4 mb-4 md:mb-6 overflow-x-auto">
            {["oneway", "round", "multi"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className="flex items-center gap-1 md:gap-2 text-[12px] md:text-sm font-medium px-2 py-1 md:px-3 md:py-2 flex-shrink-0"
              >
                <span
                  className={`w-3 h-3 md:w-5 md:h-5 rounded-full border flex items-center justify-center ${tripType === type
                    ? "bg-[#174EA6] border-[#174EA6]"
                    : "border-gray-400"
                    }`}
                ></span>
                <span className="whitespace-nowrap">
                  {type === "oneway"
                    ? "One Way"
                    : type === "round"
                      ? "Round Trip"
                      : "Multi"}
                </span>
              </button>
            ))}
          </div>

          {/* Flight Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_auto_1fr_1fr_1fr] gap-3 md:gap-4 items-center">
            {/* Flying From */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 border">
              <div className="bg-[#D6E8FF] p-1 sm:p-2 rounded-lg">
                <MapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold">Flying From</p>
                <p className="text-[10px] sm:text-xs text-gray-500">New York Terminal 5</p>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex items-center justify-center my-1 md:my-0">
              <div className="bg-[#FFB724] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow text-white text-lg">
                ⇄
              </div>
            </div>

            {/* Flying To */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 border">
              <div className="bg-[#D6E8FF] p-1 sm:p-2 rounded-lg">
                <MapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold">Flying To</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Paris Terminal</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 border">
              <div className="bg-[#D6E8FF] p-1 sm:p-2 rounded-lg">
                <CalendarDays className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold">15 Feb 2026</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Sunday</p>
              </div>
            </div>

            {/* Return Date */}
            <div className="flex items-center justify-center text-[#174EA6] font-medium cursor-pointer text-[12px] sm:text-sm mt-1 md:mt-0">
              + Add Return Date
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-4 md:mt-8">
            <button className="flex items-center gap-2 bg-[#174EA6] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}