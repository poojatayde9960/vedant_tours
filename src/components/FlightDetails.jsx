import React from "react";
import { FaPlane, FaTag } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const FlightDetails = () => {
  return (
    <div className="relative min-h-screen pb-[1150px]  md:pb-[500px]">
      <div className="relative h-[500px]">
        {/* Background Image */}
        <img
          src="/img/Rectangle 86.png"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* Blue Header OVER Image */}
        <div className="absolute inset-0  flex ">
          <div className="bg-gradient-to-r  text-white py-10 mt-4 text-center w-full">
            <h1 className="text-2xl md:text-[36px] font-goodly font-medium ">
              Flight Details
            </h1>
            <p className="text-[17px] mt-2 opacity-90 font-poppins">
              Book Your Next flight with vedant tours
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[120px] font-poppins p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-9">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Flight Info Card */}
          <div className="bg-white rounded-xl shadow p-4 md:p-6 space-y-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdFlightTakeoff className="text-blue-600" />
              Flight from JDXB, Dubai - UAE to RUH Riyadh - Saudi Arabia
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-4">
              {/* Journey Row (Departure, Duration, Arrival) */}
              <div className="flex flex-row justify-between items-center w-full md:flex-1 gap-2 sm:gap-4">
                {/* Decorative Circle (Show only on desktop) */}
                <div className="hidden md:block">
                  <div className="bg-[#0644A0] w-12 h-12 p-2 rounded-full">
                    <div className="bg-white w-8 h-8 rounded-full p-2">
                      <div className="bg-[#FC8605] w-4 h-4 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Departure Group */}
                <div className="text-center flex flex-col items-center">
                  <p className="text-gray-500 text-xs sm:text-sm">Friday</p>
                  <h2 className="text-lg sm:text-xl md:text-[22px] font-poppins md:font-medium flex flex-col md:flex-row items-center leading-tight md:leading-normal mt-1 md:mt-0">
                    <span>7:00</span>
                    <span className="text-[#00000020] md:text-[#00000040] text-xl sm:text-2xl md:text-[22px] md:ml-2 font-medium md:font-normal uppercase">AM</span>
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 md:mt-0">DXB</p>
                </div>

                {/* Duration Group */}
                <div className="flex flex-col items-center text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">Duration 2h 30min</p>
                  <div className="flex items-center gap-1 sm:gap-2 text-blue-600 my-1 md:my-0">
                    <span className="text-gray-400 font-light text-xs">&lt;-----</span>
                    <FaPlane className="md:rotate-0" />
                    <span className="text-gray-400 font-light text-xs">-----&gt;</span>
                  </div>
                  <p className="text-black text-xs sm:text-sm font-bold md:font-medium">Direct</p>
                </div>

                {/* Arrival Group */}
                <div className="flex flex-col items-center text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">Saturday</p>
                  <h2 className="text-lg sm:text-xl md:text-xl font-poppins md:font-medium flex flex-col md:flex-row items-center leading-tight md:leading-normal mt-1 md:mt-0">
                    <span>8:45</span>
                    <span className="text-[#00000020] md:text-[#00000040] text-xl sm:text-2xl md:text-xl md:ml-2 font-medium md:font-normal uppercase">AM</span>
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 md:mt-0">CKG</p>
                </div>
              </div>

              {/* Terminal - Desktop side, Mobile below */}
              <div className="text-center md:mt-0 border-t md:border-t-0 md:border-l-2 md:border-gray-300 md:px-7 md:ml-6 pt-4 md:pt-0 w-full md:w-auto h-full md:h-20">
                <p className="font-medium text-sm font-poppins sm:text-base">Terminal 4 New York</p>
                <p className="text-gray-500 text-xs font-poppins sm:text-sm">Wed 4, Feb 2026</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center border-t pt-3 gap-2">
              <div className="flex gap-3 text-xs sm:text-sm">
                <div className="flex gap-2 items-center text-[#0061E0]">
                  <RiRefund2Fill size={18} />
                  <p>Refundable</p>
                </div>
                <span>Baggage Included</span>
              </div>
              <button className="bg-[#FFB724] text-white hover:bg-yellow-500 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                Flight Details
              </button>
            </div>
          </div>

          {/* Extra Convenience Section */}
          <div className="bg-white rounded-xl border border-[#0061E03D] p-4 md:p-6 space-y-3">
            <h2 className="font-semibold text-sm sm:text-base">Extra Convenience For Your Trip</h2>

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2 sm:gap-3 text-sm">
                  <div className="bg-[#0061E0] p-2 rounded-full">
                    <FaTag className="text-white text-xs sm:text-sm" />
                  </div>
                  Booking Hotel & Flight together saves upto 3%
                </div>
                <span className="text-blue-600">›</span>
              </div>
            ))}

            <div className="text-center pt-2">
              <button className="border border-[#0644A0] text-[#0644A0] px-4 py-2 rounded-lg text-xs sm:text-[17px] hover:bg-blue-50">
                See Group Fare Rule
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 md:space-y-6 mt-4 md:mt-0">
          {/* Passenger Details */}
          <div className="bg-white rounded-xl shadow p-4 md:p-6 space-y-3">
            <h2 className="font-semibold border-b text-center text-sm sm:text-base">
              Passenger Details
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <select className="border rounded-md p-2 text-xs sm:text-sm bg-[#C2EBFF57]">
                <option>Adults</option>
              </select>
              <select className="border rounded-md p-2 text-xs sm:text-sm bg-[#C2EBFF57]">
                <option>Childrens</option>
              </select>
              <select className="border rounded-md p-2 text-xs sm:text-sm bg-[#C2EBFF57]">
                <option>Infants</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" />
                Regular
              </label>
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" />
                Student
              </label>
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" />
                Arm Force
              </label>
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" />
                Sr. Citizen
              </label>
            </div>
          </div>

          {/* Price Details */}
          <div className="bg-white rounded-xl border border-[#0061E045] p-4 md:p-6 space-y-2 text-xs sm:text-sm">
            <h2 className="font-semibold mb-1 border-b text-center text-sm sm:text-base">
              Price Details
            </h2>
            <div className="flex justify-between">
              <span>Base Fare</span>
              <span>₹ 6715</span>
            </div>
            <div className="flex justify-between">
              <span>Fee & Surcharges</span>
              <span>₹ 250</span>
            </div>

            <div className="flex justify-between pt-1">
              <span>Total Fare</span>
              <span>₹ 8512</span>
            </div>

            <div className="flex border-t-2 font-semibold border-[#FFB724] py-2 justify-between">
              <span>Final Fare</span>
              <span>₹ 250</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="bg-white rounded-xl border border-[#0061E045] p-4 md:p-6 space-y-2 text-xs sm:text-sm">
            <h2 className="font-semibold text-sm">Have A Coupon Code ?</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add here"
                className="rounded-md p-2 placeholder:text-[#0644A0] text-xs sm:text-sm w-full bg-[#C2EBFF7A]"
              />
              <button className="bg-[#F8CA13] text-white px-3 sm:px-4 rounded-2xl text-xs sm:text-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gradient-to-r from-[#0644A0] to-[#0061E0] hover:bg-blue-800 text-white py-3 rounded-lg font-medium text-sm sm:text-base">
            Continue To Payment ›
          </button>
        </div>
      </div>
    </div >
  );
};

export default FlightDetails;
