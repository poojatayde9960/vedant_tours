import React from "react";
import { Star, MapPin, BedDouble, ShieldCheck, KeyRound } from "lucide-react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { RiUserForbidLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { HiOutlineMoon } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";

export default function HotelInfo() {
  const rating = 4;

  return (
    <div className="w-full min-h-screen px-4 md:px-20 py-8 mt-0 font-poppins">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-1 text-[14px] md:text-[17px] text-gray-500 mb-6">
        <GoHomeFill size={16} className="text-[#0061E0] flex-shrink-0" />

        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <span>›</span>

        <Link to="/hotels" className="hover:text-blue-600">
          Hotel Booking
        </Link>

        <span>›</span>

        <span className="text-gray-800 font-medium truncate">Hotel Details</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <h1 className="text-xl md:text-[36px] font-goodly font-medium leading-tight">
            Hotel Heritage smart International
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
            <div className="flex items-center ">
              <MdOutlineStar size={16} className="text-[#FFB724]" />
              <span className="ml-1">4.5 (120 Reviews)</span>
            </div>

            <div className="flex items-center">
              <MapPin size={14} className="mr-1 flex-shrink-0" />
              <span className="text-xs sm:text-base break-words">
                Golden City Center Chhatrapati Sambhajinagar
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
          <div className="flex items-center">
            <p className="mr-2 font-semibold">4</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <MdOutlineStar
                  key={i}
                  size={20}
                  className={i < 4 ? "text-[#FFB724]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-lg text-sm font-medium">
            View Map
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {/* Main Image */}
        <div className="lg:col-span-2 h-[250px] sm:h-[350px] md:h-[450px] w-full relative">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            className="h-full w-full object-cover rounded-2xl"
            alt="Main Hotel"
          />
        </div>

        {/* Side Images */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="h-[120px] sm:h-[170px] lg:h-[215px] w-full">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              className="h-full w-full object-cover rounded-2xl"
              alt="Room view 1"
            />
          </div>

          <div className="h-[120px] sm:h-[170px] lg:h-[215px] w-full">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
              className="h-full w-full object-cover rounded-2xl"
              alt="Room view 2"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mt-8 overflow-x-auto no-scrollbar whitespace-nowrap text-sm">
        <button className="border-b-2 border-[#FFB724] pb-2 font-semibold text-[#FFB724]">
          Overview
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-800 transition-colors">Amenities</button>
        <button className="pb-2 text-gray-500 hover:text-gray-800 transition-colors">Policies</button>
        <button className="pb-2 text-gray-500 hover:text-gray-800 transition-colors">Reviews</button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-xl md:text-[28px] font-medium font-poppins mb-2">
            Hotel Heritage smart international
          </h2>

          <p className="text-[#00000094] text-[12px] md:text-[18px] mb-6">
            230 Rooms | 145 Beds | Free Wifi
          </p>

          <hr className="mb-8" />

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3 h-fit rounded-full flex-shrink-0">
                <MdOutlineMeetingRoom className="text-[#0644A0]" size={24} />
              </div>

              <div>
                <h3 className="font-medium font-poppins text-md md:text-[17px]">Entire Room</h3>
                <p className="text-[14px] text-gray-500 mt-1">
                  You'll have the guest suite to yourself.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3 h-fit rounded-full flex-shrink-0">
                <MdOutlineCleaningServices
                  className="text-[#0644A0]"
                  size={24}
                />
              </div>

              <div>
                <h3 className="font-medium font-poppins text-md md:text-[17px]">Enhanced Clean</h3>
                <p className="text-[14px] text-gray-500 mt-1">
                  This host committed to enhanced cleaning process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3 h-fit rounded-full flex-shrink-0">
                <GrUserAdmin className="text-[#0644A0]" size={24} />
              </div>

              <div>
                <h3 className="font-medium font-poppins text-md md:text-[17px]">Self Check-In</h3>
                <p className="text-[14px] text-gray-500 mt-1">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3 h-fit rounded-full flex-shrink-0">
                <RiUserForbidLine className="text-[#0644A0]" size={24} />
              </div>

              <div>
                <h3 className="font-medium font-poppins text-md md:text-[17px]">Room Rules</h3>
                <p className="text-[14px] text-gray-500 mt-1">
                  Please follow the host's house rules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Card & Price Details */}
        <div className="space-y-8">
          {/* Booking Card */}
          <div className="bg-white rounded-2xl border border-[#0061E038] p-6 shadow-sm">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-2xl font-medium font-poppins text-gray-900">₹ 6,715</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Starting rate / night</p>
              </div>

              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                <span className="text-yellow-600 font-bold text-sm">⭐ 4.5</span>
                <span className="text-gray-400 text-xs ml-1">(120)</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-100 bg-gray-50/50 p-3 rounded-xl flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <MdOutlineCalendarMonth
                    className="text-[#0644A0]"
                    size={22}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Check In</p>
                  <p className="text-sm font-medium">23/05/2024</p>
                </div>
              </div>

              <div className="border border-gray-100 bg-gray-50/50 p-3 rounded-xl flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <MdOutlineCalendarMonth
                    className="text-[#0644A0]"
                    size={22}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Check Out</p>
                  <p className="text-sm font-medium">25/05/2024</p>
                </div>
              </div>

              <div className="border border-gray-100 bg-gray-50/50 p-3 rounded-xl flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <LuUsersRound className="text-[#0644A0]" size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Guests</p>
                  <p className="text-sm font-medium">2 Adults</p>
                </div>
              </div>

              <div className="border border-gray-100 bg-gray-50/50 p-3 rounded-xl flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <HiOutlineMoon className="text-[#0644A0]" size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Nights</p>
                  <p className="text-sm font-medium">2 Nights</p>
                </div>
              </div>
            </div>

            <hr className="border border-dashed border-orange-300 mb-6" />

            {/* Room Options */}
            <div className="space-y-3 mb-4">
              <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Single Bed Room</span>
                </div>
                <span className="text-sm font-medium font-poppins text-gray-900">₹2,000</span>
              </label>

              <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Standard Deluxe Suite</span>
                </div>
                <span className="text-sm font-medium font-poppins text-gray-900">₹4,500</span>
              </label>

              <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Super Deluxe Suite</span>
                </div>
                <span className="text-sm font-medium font-poppins text-gray-900">₹6,000</span>
              </label>
            </div>
          </div>

          {/* Price Details Card */}
          <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h2 className="text-lg font-medium font-poppins text-gray-900 mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-blue-600 font-medium font-poppins rounded-full mr-3"></span>
              Price Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center text-gray-600">
                <p>Room Price × 2 Nights</p>
                <p className="font-medium font-poppins text-gray-900">₹ 13,430</p>
              </div>

              <div className="flex justify-between items-center text-gray-600">
                <p>Taxes & Fees</p>
                <p className="font-medium font-poppins text-gray-900">₹ 1,215</p>
              </div>

              <div className="flex justify-between items-center text-green-600">
                <p>Discount Applied</p>
                <p className="font-medium font-poppins">- ₹ 500</p>
              </div>

              <hr className="border-dashed border-gray-200 my-2" />

              <div className="flex justify-between items-center text-lg font-medium font-poppins text-gray-900">
                <p>Total Payable</p>
                <p className="text-blue-600 font-medium font-poppins">₹ 14,145</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Have A Coupon Code?</p>
              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-xl font-medium font-poppins transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#174EA6] to-[#1E63D5] hover:from-[#1e63d5] hover:to-[#174EA6] text-white py-4 rounded-xl font-medium font-poppins text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
              Continue To Payment
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
