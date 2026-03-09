import React from "react";
import { FaPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const FlightListing = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen mt-72 p-4 md:p-8 md:mt-36 font-poppins">
      {/* Header */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-xl md:text-2xl font-semibold">
          Flight From New York To Paris
        </h1>

        <div className="flex bg-white rounded-lg shadow p-1">
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">
            Cheapest
          </button>
          <button className="px-4 py-2 text-sm">Non Stop First</button>
          <button className="px-4 py-2 text-sm">Others</button>
        </div>
      </div> */}

      <div className="flex items-center justify-between text-center ">
        <p className="font-poppins font-medium text-[17px] ">Filter By</p>

        <div className="flex flex-col md:flex-row  items-center mb-3 md:gap-[470px] font-poppins">
          <h1 className="text-xl md:text-2xl md:mr-0 mr-2 font-semibold md:mb-0 mb-2">
            Flight From New York To Paris
          </h1>

          <div className="flex bg-white rounded-lg border p-1 text-[14px]">
            <button className="md:px-4 md:py-2 p-2 text-sm border-r ">
              Cheapest
            </button>
            <button className="md:px-4 md:py-2 p-2 text-sm border-r ">
              Non Stop First
            </button>
            <button className="md:px-4 md:py-2 p-2 text-sm ">Others</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT FILTER PANEL */}
        <div className="w-full lg:w-1/5 space-y-4">
          {/* Budget */}
          <div className="bg-white rounded-xl border border-[#0644A02B] p-0">
            <div className="rounded-t-xl bg-[#D6E8FF] p-3">
              <h2 className="font-medium">Your Budget (Per Night)</h2>
            </div>

            <p className="text-[12px] p-3">Set your Own Budget</p>

            <div className="px-2">
              <input type="range" className="w-full accent-[#0644A0]" />
            </div>
            <div className="flex justify-between text-sm px-3 text-gray-500 mt-2">
              <span>€ 50</span>
              <span>€ 250</span>
            </div>
          </div>

          {/* Popular Airlines */}
          <FilterBox
            title="Popular Airlines"
            options={["Indigo", "United Airlines", "My Emirates"]}
          />

          {/* Popular Filter */}
          <FilterBox
            title="Popular Filter"
            options={[
              "Free Cancellation",
              "No Prepayment",
              "Breakfast Included",
            ]}
          />

          {/* Flight Stops */}
          <FilterBox
            title="Flight Stops"
            options={["0 Stop", "1 Stop", "2 Stop", "3+ Stop"]}
          />

          {/* Departure Time */}
          <FilterBox
            title="Departure Time"
            options={[
              "12 am to 6 am",
              "6 am to 12 pm",
              "12 pm to 6 pm",
              "6 pm to 12 am",
            ]}
          />

          {/* Arrival Time */}
          <FilterBox
            title="Arrival Time"
            options={[
              "12 am to 6 am",
              "6 am to 12 pm",
              "12 pm to 6 pm",
              "6 pm to 12 am",
            ]}
          />
        </div>

        {/* RIGHT FLIGHT LIST */}
        <div className="w-full lg:w-3/4 space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <FlightCard key={item} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightListing;

/* ---------------- COMPONENTS ---------------- */

const FilterBox = ({ title, options }) => {
  return (
    <div className="bg-white rounded-xl border border-[#0644A02B] p-0">
      <div className="font-medium rounded-t-xl bg-[#D6E8FF] p-3 flex justify-between items-center">
        <h2 className="">{title}</h2>
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
};

const FlightCard = ({ navigate }) => {
  return (
    <div
      
      className="bg-white rounded-xl border border-[#0061E030] p-4 space-y-4 cursor-pointer hover:shadow-lg transition duration-300"
    >
      {/* Top Section */}
      <div className="grid grid-cols-2 md:flex justify-between w-full items-center gap-4">
        <div className="flex gap-4 md:gap-10 col-span-2 md:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1486556813609-9a827fdc306f?q=80&w=2069&auto=format&fit=crop"
            alt="airline"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h3 className="font-semibold">United Airlines</h3>
            <p className="text-sm text-gray-500">UA 4556, AC 3456</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">United Airlines</h3>
          <p className="text-sm text-gray-500">UA 4556, AC 3456</p>
        </div>

        <div>
          <p className="font-semibold text-lg">Rs.1200</p>
          <p className="text-sm text-gray-500">Per Person</p>
        </div>

        <button className="mt-2 bg-[#00357A] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
        onClick={() => navigate("/flight-details")}>
          Go Ahead
        </button>
      </div>

      {/* Middle Journey Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-botted pt-4 gap-4 text-sm">
        <p>Start Journey</p>
        <div className="text-center">
          <p className="font-semibold text-lg">06:45 AM</p>
          <p className="text-gray-500">New York</p>
        </div>

        <div className="flex items-center gap-4 ">
          <p className="border-l">New York</p>
          <FaPlane className="text-blue-600" />
          <span className="text-gray-400">-----------</span>
          <p className="border-r">New York</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-lg">06:45 AM</p>
          <p className="text-gray-500">Paris</p>
        </div>
        <p>Start Journey</p>
      </div>

      {/* Warning */}
      <div className="bg-[#FEB1B038] text-[#FC8605] text-center text-sm p-2 rounded-md">
        Re Check In Of Baggage Required | Get Flat 10% Off On ICICI Credit Cards
      </div>

      {/* Bottom Tabs */}
      <div className="flex flex-wrap justify-between text-xs md:text-[15px] text-black border-t-2 border-dashed border-[#0644A0] py-4">
        <span>Flight Details</span>
        <span>Price Details</span>
        <span>Policy</span>
        <span>Refund</span>
        <span>Reschedule</span>
      </div>
    </div>
  );
};
