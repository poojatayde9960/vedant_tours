import React, { useState } from "react";
import {
  ArrowRightLeft,
  Search,
  MapPin,
  CalendarDays,
  Users,
  BedDouble,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

export default function CategoryHeroSection() {
  const [tripType, setTripType] = useState("oneway");
  const [activeService, setActiveService] = useState("flight");
  const navigate = useNavigate();

  const options = [
    { label: "Flight", icon: <FaPlaneDeparture />, value: "flight" },
    { label: "Hotel", icon: <FaPlaneArrival />, value: "hotel" },
    { label: "Car", icon: <ArrowRightLeft />, value: "car" },
    { label: "Bus", icon: <LuCalendarDays />, value: "bus" },
  ];

  return (
    <section className="relative w-full bg-gray-100">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/img/Frame-9.png"
          alt="travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-40 md:pt-20 md:pb-56">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium max-w-3xl">
          Complete Travel & Lifestyle Solutions
        </h1>

        <p className="text-white/90 mt-4 md:mt-8 max-w-2xl text-sm sm:text-base">
          Discover a wide range of services designed to make your travel
          planning effortless, curated experiences, secure bookings, and
          reliable support.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap md:mt-10 md:gap-4 justify-center bg-white p-3 rounded-3xl">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => setActiveService(option.value)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition
              ${
                activeService === option.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <span className="text-sm">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Card Wrapper */}
      <div className="absolute z-20 md:mt-0 mt-28 inset-x-0 px-4 sm:px-6 md:px-0 md:flex justify-center top-[45%] md:top-[480px]">
        
        {/* FLIGHT SEARCH */}
        {activeService === "flight" && (
          <div className="bg-white w-full max-w-lg sm:max-w-2xl md:max-w-6xl rounded-2xl shadow-xl md:p-6 p-3 mx-auto">

            {/* Trip Type */}
            <div className="flex flex-wrap gap-4 border-b pb-4">
              {["oneway", "round", "multi"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    tripType === type ? "text-blue-600" : "text-black"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full border ${
                      tripType === type
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-400"
                    }`}
                  ></span>

                  {type === "oneway"
                    ? "One Way"
                    : type === "round"
                    ? "Round"
                    : "Multi Way"}
                </button>
              ))}
            </div>

            {/* Flight Inputs */}
            <div className="flex flex-col gap-3 mt-3 md:mt-6 md:flex-row md:items-center md:gap-4 font-poppins">

              {/* From */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Flying From</p>

                <div className="p-2 border flex items-center space-x-2 rounded-xl bg-gray-50">
                  <div className="bg-[#D6E8FF] rounded-lg p-2">
                    <FaPlaneArrival className="text-[#0644A0]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">New York</p>
                    <p className="text-xs text-gray-400">
                      New York terminal 5
                    </p>
                  </div>
                </div>
              </div>

              {/* Swap */}
              <div className="flex justify-center items-center md:mt-6">
                <div className="bg-yellow-400 p-3 rounded-full shadow">
                  <ArrowRightLeft size={18} />
                </div>
              </div>

              {/* To */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Flying To</p>

                <div className="p-2 border flex items-center space-x-2 rounded-xl bg-gray-50">
                  <div className="bg-[#D6E8FF] rounded-lg p-2">
                    <FaPlaneDeparture className="text-[#0644A0]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">London</p>
                    <p className="text-xs text-gray-400">
                      London Heathrow Airport
                    </p>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Departure Date</p>

                <div className="p-2 border flex items-center space-x-2 rounded-xl bg-gray-50">
                  <div className="bg-[#D6E8FF] rounded-lg p-2">
                    <LuCalendarDays className="text-[#0644A0]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Select Date</p>
                    <p className="text-xs text-gray-400">MM/DD/YYYY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="flex justify-center mt-3 md:mt-6">
              <button
                className="flex items-center gap-2 bg-[#0644A0] text-white px-14 py-2 rounded-full hover:bg-blue-700 transition"
                onClick={() => navigate("/flights")}
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        )}

        {/* HOTEL SEARCH */}
        {activeService === "hotel" && (
          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-6xl bg-white rounded-[24px] border border-[#A9C1E6] p-6 shadow-sm">

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
                    <p className="text-xs text-gray-500">
                      10-02-2026 | 11:00 am
                    </p>
                  </div>
                </div>

                {/* Check Out */}
                <div className="flex items-center gap-3 bg-white rounded-xl px-2 py-2 border">
                  <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <CalendarDays className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Check Out</p>
                    <p className="text-xs text-gray-500">
                      11-02-2026 | 11:00 am
                    </p>
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
                <button className="flex items-center gap-2 bg-[#174EA6] text-white px-10 py-3 rounded-full hover:bg-blue-700 transition"
                onClick={() => navigate("/hotel-list")}>
                  <Search size={18} />
                  Search
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}