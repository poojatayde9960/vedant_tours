// import React from "react";
// import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
// import { MdDateRange } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";

// const FlightSearch = () => {
//   return (
//     <div className="w-full py-10 px-4">

//       {/* Hero Section */}
//       <div
//         className="relative w-full h-64 mx-auto rounded-2xl overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="bg-gradient-to-r from-blue-900/70 to-purple-700/70 p-8 sm:p-12 text-center text-white">
//           <h1 className="text-2xl sm:text-4xl font-semibold">
//             Find Your Next Place To Visit
//           </h1>
//           <p className="text-sm sm:text-base mt-2 opacity-90">
//             Discover amazing sites to discover
//           </p>
//         </div>
//       </div>

//       {/* Search Card */}
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 -mt-10 relative z-10">

//         {/* Trip Type */}
//         <div className="flex flex-wrap gap-6 border-b pb-4">
//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input type="radio" name="trip" defaultChecked className="accent-blue-600" />
//             One Way
//           </label>
//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input type="radio" name="trip" className="accent-blue-600" />
//             Round
//           </label>
//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input type="radio" name="trip" className="accent-blue-600" />
//             Multi Way
//           </label>
//         </div>

//         {/* Input Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

//           {/* From */}
//           <div className="border rounded-xl p-3 flex items-center gap-3">
//             <FaPlaneDeparture className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-xs text-gray-500">Flying From</p>
//               <p className="text-sm font-medium">New York</p>
//               <p className="text-xs text-gray-400">New York Terminal 5</p>
//             </div>
//           </div>

//           {/* To */}
//           <div className="border rounded-xl p-3 flex items-center gap-3">
//             <FaPlaneArrival className="text-yellow-500 text-lg" />
//             <div>
//               <p className="text-xs text-gray-500">Flying To</p>
//               <p className="text-sm font-medium">New York</p>
//               <p className="text-xs text-gray-400">New York Terminal 5</p>
//             </div>
//           </div>

//           {/* Date */}
//           <div className="border rounded-xl p-3 flex items-center gap-3">
//             <MdDateRange className="text-blue-600 text-lg" />
//             <div>
//               <p className="text-xs text-gray-500">Departure</p>
//               <p className="text-sm font-medium">15 Feb 2026</p>
//               <p className="text-xs text-gray-400">Sunday</p>
//             </div>
//           </div>

//           {/* Return Date */}
//           <div className="flex items-center justify-center md:justify-start">
//             <button className="text-blue-600 text-sm font-medium hover:underline">
//               + Add Return Date
//             </button>
//           </div>
//         </div>

//         {/* Search Button */}
//         <div className="flex justify-center mt-6">
//           <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition duration-300">
//             <IoSearch />
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightSearch;

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

export default function CategoryHeroSection() {
  const [tripType, setTripType] = useState("oneway");
  const navigate = useNavigate();

  return (
    <section className="relative w-full  bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/public/img/Rectangle 151.png"
          alt="travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Wrapper */}
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-40">
        <h1 className="text-white text-3xl font-goodly font-medium sm:text-4xl md:text-5xl  max-w-3xl">
          Find You Next Place To Visit
        </h1>
        <p className="text-white/90 mt-4 max-w-2xl text-sm sm:text-base font-poppins">
          Discover amazing sites to discover
        </p>

        {/* Options Bar */}
        {/* Options Bar with Icons */}
      </div>

      {/* Search Card */}
      <div className="absolute z-20 font-poppins top-32 inset-x-0 md:top-[190px] md:flex  justify-center px-4 md:px-0">
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-6xl bg-white rounded-[24px] border border-[#A9C1E6] p-6 shadow-sm">
            {/* Trip Type */}
            <div className="flex gap-6 border-b pb-4 mb-6">
              {["oneway", "round", "multi"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      tripType === type
                        ? "bg-[#174EA6] border-[#174EA6]"
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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr_1fr] gap-4 items-center ">
              {/* Flying From */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Flying From</p>
                  <p className="text-xs text-gray-500">New York Terminal 5</p>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex items-center justify-center">
                <div className="bg-[#FFB724] w-10 h-10 rounded-full flex items-center justify-center shadow">
                  ⇄
                </div>
              </div>

              {/* Flying To */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Flying To</p>
                  <p className="text-xs text-gray-500">Paris Terminal</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border">
                <div className="bg-[#D6E8FF] p-2 rounded-lg">
                  <CalendarDays className="text-blue-600" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">15 Feb 2026</p>
                  <p className="text-xs text-gray-500">Sunday</p>
                </div>
              </div>

              {/* Return Date */}
              <div className="flex items-center justify-center text-[#174EA6] font-medium cursor-pointer">
                + Add Return Date
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-8">
              <button className="flex items-center gap-2 bg-[#174EA6] text-white px-12 py-3 rounded-full hover:bg-blue-700 transition">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
