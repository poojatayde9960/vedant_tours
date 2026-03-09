import React from "react";
import { FaPlane, FaTag } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const FlightDetails = () => {
  return (
    <div className="relative min-h-screen pb-[1150px] md:pb-[500px]">
      <div className="relative h-[500px]">
        {/* Background Image */}
        <img
          src="/img/Rectangle 86.png"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* Blue Header OVER Image */}
        <div className="absolute inset-0  flex ">
          <div className="bg-gradient-to-r  text-white py-10 px-4 text-center w-full">
            <h1 className="text-2xl md:text-[36px] font-goodly font-medium ">
              Flight Details
            </h1>
            <p className="text-[17px] mt-2 opacity-90 font-poppins">
              Book Your Next flight with vedant tours
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[160px] font-poppins  md:top-[160px] mb-[200px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Flight Info Card */}
          <div className="bg-white rounded-xl shadow p-6 space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium">
              <MdFlightTakeoff className="text-blue-600" />
              Flight from JDXB , Dubai - UAE to RUH Riyadh - Saudi Arabia
            </div>

            <div className="flex flex-col-2 md:flex-row justify-between items-center gap-6 border-t pt-6">
              <div className="">
                <div className="bg-[#0644A0] w-12 h-12 p-2 rounded-full">
                  <div className="bg-white w-8 h-8 rounded-full p-2">
                    <div className="bg-[#FC8605] w-4 h-4 rounded-full" />
                  </div>
                </div>
              </div>
              {/* Departure */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">Friday</p>
                <h2 className="md:text-[22px]">
                  7:00 <span className="text-[#00000040]">AM</span>
                </h2>
                <p className="text-gray-500 text-sm">DXB</p>
              </div>

              {/* Duration */}
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-500 text-sm">Duration 2h 30min</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaPlane />
                  <span className="text-gray-400">--------</span>
                </div>
                <p className="text-green-600 text-sm">Direct</p>
              </div>

              {/* Arrival */}
              <div className="text-center ">
                <p className="text-gray-500 text-sm">Saturday</p>
                <h2 className="md:text-xl font-semibold">
                  8:45 <span className="text-[#00000040]">AM</span>
                </h2>
                <p className="text-gray-500 text-sm">CKG</p>
              </div>

              <hr className="text-black" />

              {/* Terminal */}
              <div className="text-center">
                <p className="font-medium">Terminal 4 New York</p>
                <p className="text-gray-500 text-sm">Wed 4, Feb 2026</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center border-t pt-4 gap-4">
              <div className="flex gap-6 text-sm">
                <div className="flex gap-3 items-center text-[#0061E0]">
                  <RiRefund2Fill size={20} />
                  <p>Refundable</p>
                </div>
                <span>Baggage Included</span>
              </div>
              <button className="bg-[#FFB724] text-white hover:bg-yellow-500 px-6 py-2 rounded-full text-sm font-medium">
                Flight Details
              </button>
            </div>
          </div>

          {/* Extra Convenience Section */}
          <div className="bg-white rounded-xl border border-[#0061E03D] p-6 space-y-4">
            <h2 className="font-semibold">Extra Convenience For Your Trip</h2>

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#0061E0] p-2 rounded-full">
                    <FaTag className="text-white" />
                  </div>
                  Booking Hotel & Flight together saves upto 3%
                </div>
                <span className="text-blue-600">›</span>
              </div>
            ))}

            <div className="text-center pt-4">
              <button className="border border-[#0644A0] text-[#0644A0] px-6 py-2 rounded-lg text-[17px]  hover:bg-blue-50">
                See Group Fare Rule
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Passenger Details */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="font-semibold border-b text-center">
              Passenger Details
            </h2>

            <div className="grid grid-cols-3 gap-3">
              <select className="border rounded-md p-2 text-sm bg-[#C2EBFF57]">
                <option>Adults</option>
              </select>
              <select className="border rounded-md p-2 text-sm bg-[#C2EBFF57]">
                <option>Childrens</option>
              </select>
              <select className="border rounded-md p-2 text-sm bg-[#C2EBFF57]">
                <option>Infants</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Regular
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Student
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Arm Force
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Sr. Citizen
              </label>
            </div>
          </div>

          {/* Price Details */}
          <div className="bg-white rounded-xl border border-[#0061E045]  p-6 space-y-3 text-sm">
            <h2 className="font-semibold mb-2 border-b text-center">
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

            <div className="flex justify-between  pt-2">
              <span>Total Fare</span>
              <span>₹ 8512</span>
            </div>

            <div className="flex border-t-2 font-semibold border-[#FFB724] py-3 justify-between">
              <span>Final Fare</span>
              <span>₹ 250</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="bg-white rounded-xl border border-[#0061E045] p-6 space-y-3">
            <h2 className="font-semibold text-sm">Have A Coupon Code ?</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add here"
                className=" rounded-md p-2 placeholder:text-[#0644A0] text-sm w-full bg-[#C2EBFF7A]"
              />
              <button className="bg-[#F8CA13] text-white px-4 rounded-2xl text-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gradient-to-r from-[#0644A0] to-[#0061E0] hover:bg-blue-800 text-white py-3 rounded-lg font-medium">
            Continue To Payment ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
