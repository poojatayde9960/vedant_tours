import React, { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FlightListing = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mt-40 p-4 md:p-8 md:mt-36 font-poppins min-h-screen relative">
      {/* Sticky Header */}
      <div className="sticky top-[64px] md:top-[80px] bg-white z-30 -mx-4 md:-mx-8 px-4 md:px-8 py-4 border-b shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          {/* Desktop Filter Label */}
          <p className="font-poppins font-medium text-[17px] hidden md:block">Filter By</p>

          {/* Page Title + Sorting */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto md:justify-between flex-1 md:ml-[17%] gap-4">
            <h1 className="text-xl md:text-xl font-poppins font-medium whitespace-nowrap">
              Flight From New York To Paris
            </h1>

            <div className="flex bg-white rounded-lg border p-1 text-[14px]">
              <button className="md:px-4 md:py-2 px-2 py-1 text-sm border-r hover:bg-gray-100 transition whitespace-nowrap">
                Cheapest
              </button>
              <button className="md:px-4 md:py-2 px-2 py-1 text-sm border-r hover:bg-gray-100 transition whitespace-nowrap">
                Non Stop First
              </button>
              <button className="md:px-4 md:py-2 px-2 py-1 text-sm hover:bg-gray-100 transition whitespace-nowrap">
                Others
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Header - Now inside the sticky container */}
        <div
          className="md:hidden mt-4 pt-4 border-t border-gray-100 flex items-center justify-between px-2 cursor-pointer"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <p className="font-poppins font-medium text-[17px]">Filter By</p>
          <IoIosArrowDown
            className={`transition-transform duration-300 ${showMobileFilters ? "rotate-180" : ""}`}
            size={20}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* LEFT FILTER PANEL */}
        <div className="w-full lg:w-1/5">
          {/* Mobile Filters Content */}
          <div className={`${showMobileFilters ? "block" : "hidden"} md:hidden space-y-4 mb-6`}>
            <BudgetFilter />
            <FilterBox title="Popular Airlines" options={["Indigo", "United Airlines", "My Emirates"]} />
            <FilterBox title="Popular Filter" options={["Free Cancellation", "No Prepayment", "Breakfast Included"]} />
            <FilterBox title="Flight Stops" options={["0 Stop", "1 Stop", "2 Stop", "3+ Stop"]} />
            <FilterBox title="Departure Time" options={["12 am to 6 am", "6 am to 12 pm", "12 pm to 6 pm", "6 pm to 12 am"]} />
            <FilterBox title="Arrival Time" options={["12 am to 6 am", "6 am to 12 pm", "12 pm to 6 pm", "6 pm to 12 am"]} />
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block space-y-4 lg:sticky lg:top-[160px] lg:self-start lg:max-h-[calc(100vh-180px)] overflow-y-auto no-scrollbar pb-10">
            <BudgetFilter />
            <FilterBox title="Popular Airlines" options={["Indigo", "United Airlines", "My Emirates"]} />
            <FilterBox title="Popular Filter" options={["Free Cancellation", "No Prepayment", "Breakfast Included"]} />
            <FilterBox title="Flight Stops" options={["0 Stop", "1 Stop", "2 Stop", "3+ Stop"]} />
            <FilterBox title="Departure Time" options={["12 am to 6 am", "6 am to 12 pm", "12 pm to 6 pm", "6 pm to 12 am"]} />
            <FilterBox title="Arrival Time" options={["12 am to 6 am", "6 am to 12 pm", "12 pm to 6 pm", "6 pm to 12 am"]} />
          </div>
        </div>

        {/* RIGHT FLIGHT LIST */}
        <div className="w-full lg:w-3/4 space-y-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <FlightCard key={item} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightListing;

/* ---------------- COMPONENTS ---------------- */

const BudgetFilter = () => (
  <div className="bg-white rounded-xl border border-[#0644A02B] p-0 shadow-sm">
    <div className="rounded-t-xl bg-[#D6E8FF] p-3">
      <h2 className="font-medium text-sm">Your Budget (Per Night)</h2>
    </div>
    <div className="p-4">
      <p className="text-[12px] mb-2">Set your Own Budget</p>
      <input type="range" className="w-full accent-[#0644A0]" />
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>€ 50</span>
        <span>€ 250</span>
      </div>
    </div>
  </div>
);

const FilterBox = ({ title, options }) => (
  <div className="bg-white rounded-xl border border-[#0644A02B] p-0">
    <div className="font-medium rounded-t-xl bg-[#D6E8FF] p-3 flex justify-between items-center cursor-pointer">
      <h2>{title}</h2>
      <IoIosArrowDown />
    </div>

    <div className="space-y-2 text-sm p-3">
      {options.map((option, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          {option}
        </label>
      ))}
    </div>
  </div>
);

const FlightCard = ({ navigate }) => (
  <div className="bg-white rounded-xl border border-[#0061E030] p-4 space-y-4 cursor-pointer hover:shadow-lg transition duration-300">
    <div className="flex flex-col md:flex-row justify-between w-full md:items-center gap-4">
      {/* Airline Info & Mobile Button Wrapper */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex gap-3 md:gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1486556813609-9a827fdc306f?q=80&w=2069&auto=format&fit=crop"
            alt="airline"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="w-[110px] sm:w-auto">
            <h3 className="font-poppins font-medium text-[14px] md:text-base truncate">United Airlines</h3>
            <p className="text-[10px] md:text-sm text-gray-500 truncate">UA 4556, AC 3456</p>
          </div>
        </div>

        {/* Go Ahead Button - Mobile Only */}
        <button
          className="md:hidden bg-[#00357A] text-white px-3 py-1.5 rounded-md text-[12px] whitespace-nowrap hover:bg-blue-700 font-poppins"
          onClick={(e) => { e.stopPropagation(); navigate("/flight-details"); }}
        >
          Go Ahead
        </button>
      </div>

      {/* Duration & Price Group */}
      <div className="flex justify-between md:contents items-center mt-2 md:mt-0 px-1 md:px-0">
        <div className="text-left md:text-center">
          <h3 className="font-poppins font-medium text-sm md:text-base">15h 22m</h3>
          <p className="text-[10px] md:text-sm text-gray-500">1 Stop via Network</p>
        </div>

        <div className="text-right md:text-left">
          <p className="font-poppins font-medium text-base md:text-lg">Rs.1200</p>
          <p className="text-[10px] md:text-sm font-poppins font-medium text-gray-500">Per Person</p>
        </div>
      </div>

      {/* Go Ahead Button - Desktop Only */}
      <button
        className="hidden md:block bg-[#00357A] text-white px-6 py-3 rounded-md text-[15px] font-medium hover:bg-blue-700 font-poppins"
        onClick={(e) => { e.stopPropagation(); navigate("/flight-details"); }}
      >
        Go Ahead
      </button>
    </div>

    {/* Journey Section */}
    <div className="flex flex-row justify-between items-center border-t border-dashed pt-4 gap-2 sm:gap-4 text-[10px] sm:text-[15px] font-poppins text-black">
      {/* Start Group (Left) */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-14 lg:gap-20 text-left">
        <div>
          <p className="font-bold md:font-medium whitespace-nowrap">Start Journey</p>
          <p className="text-gray-500 md:hidden text-[9px]">New York</p>
        </div>
        <p className="font-medium text-sm sm:text-lg md:text-xl">06:45 AM</p>
      </div>

      {/* Desktop City 1 Group */}
      <div className="hidden md:flex items-center gap-6">
        <span className="text-gray-300 font-light text-xl">|</span>
        <p className="font-medium whitespace-nowrap">New York</p>
      </div>

      {/* Middle Flight Path */}
      <div className="flex flex-1 justify-center items-center gap-1 sm:gap-4 px-1">
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-gray-400 font-light text-[10px] md:text-sm hidden md:block tracking-tighter">&lt;-----</span>
          <FaPlane className="text-blue-600 text-[10px] sm:text-base md:text-xl" />
          <span className="text-gray-400 font-light text-[10px] md:text-sm hidden md:block tracking-tighter">-----&gt;</span>
          <span className="text-gray-300 sm:hidden">---</span>
        </div>
      </div>

      {/* Desktop Time 2 & City 2 Group */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <p className="font-poppins font-medium text-xl">06:45 AM</p>
        <span className="text-gray-300 font-light text-xl">|</span>
        <p className="font-medium whitespace-nowrap">Paris</p>
      </div>

      {/* End Group (Right) */}
      <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-14 lg:gap-20">
        <div className="md:hidden text-right">
          <p className=" font-poppins font-medium text-sm sm:text-lg">06:45 AM</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold md:font-medium whitespace-nowrap">End Journey</p>
          <p className="text-gray-500 md:hidden text-[9px]">Paris</p>
        </div>
      </div>
    </div>

    {/* Warning with Icon */}
    <div className="bg-[#FFF4F4] rounded-lg py-2.5 px-4 flex items-center justify-center gap-2">
      <div className="flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#FC8605" className="flex-shrink-0">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <p className="text-[#FC8605] text-[9px] sm:text-xs md:text-sm font-medium font-poppins tracking-wide text-center">
        Re Check In Of Baggage Required | Get Flat 10% Off On ICICI Credit Cards Using SDFGHJKLCVBN
      </p>
    </div>

    {/* Bottom Tabs */}
    <div
      className="flex justify-between items-center text-[10px] md:text-[15px] text-black py-3 whitespace-nowrap overflow-x-auto"
      style={{
        borderTop: "1px dashed #0644A0",
        borderImage: "repeating-linear-gradient(90deg, #0644A0 0 2px, transparent 2px 4px) 1"
      }}
    >
      <span className="px-1">Flight Details</span>
      <span className="px-1">Price Details</span>
      <span className="px-1">Policy</span>
      <span className="px-1">Refund</span>
      <span className="px-1">Reschedule</span>
    </div>
  </div>
);