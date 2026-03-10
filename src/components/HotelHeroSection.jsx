import React, { useState } from "react";
// import { ArrowRightLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import {
  ArrowRightLeft,
  Search,
  MapPin,
  CalendarDays,
  Users,
  BedDouble,
} from "lucide-react";

export default function HotelHeroSection() {
  const [tripType, setTripType] = useState("oneway");
  const navigate = useNavigate();

  return (
    <section className="relative w-full  bg-gray-100 md:px-20 font-goodly-medium">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/Rectangle 151.png"
          alt="travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Wrapper */}
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-64 md:pb-80">
        <h1 className="text-white font-goodly font-medium text-3xl sm:text-4xl md:text-5xl  max-w-3xl">
          Find You Next Place To Visit
        </h1>
        <p className="text-white/90 mt-4 max-w-2xl text-sm sm:text-base font-poppins">
          Discover amazing sites to discover
        </p>

        {/* Options Bar */}
        {/* Options Bar with Icons */}
      </div>

      {/* Search Card */}
      <div className="absolute z-20 font-poppins top-48 inset-x-0 md:top-[280px] md:flex  justify-center px-4 md:px-0">
        {/* <div className="bg-white md:max-w-6xl rounded-2xl shadow-xl p-6 w-full"> */}

        {/* Simple Form Fields in Flex */}
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-6xl bg-white rounded-[24px] border border-[#A9C1E6] p-8 pb-16 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-xs text-gray-500 truncate">
                    Chhatrapati Sambhaji Nagar
                  </p>
                </div>
              </div>

              {/* Check In */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <CalendarDays className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Check In</p>
                  <p className="text-xs text-gray-500">10-02-2026 | 11:00 am</p>
                </div>
              </div>

              {/* Check Out */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <CalendarDays className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Check Out</p>
                  <p className="text-xs text-gray-500">11-02-2026 | 11:00 am</p>
                </div>
              </div>

              {/* Adults */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Adults</p>
                  <p className="text-xs text-gray-500">Select</p>
                </div>
              </div>

              {/* Rooms */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <BedDouble className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Rooms</p>
                  <p className="text-xs text-gray-500">Select</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="flex items-center gap-2 bg-[#174EA6] text-white px-10 py-3 rounded-full hover:bg-blue-700 transition"
                onClick={() => navigate("/hotel-list")}
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Search Button */}

        {/* </div> */}
      </div>
    </section>
  );
}
