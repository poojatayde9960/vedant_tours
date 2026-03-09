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
    <div className="w-full min-h-screen  px-4 md:px-10 lg:px-0 py-8 mt-0">
      {/* Breadcrumb */}
      <div className="flex items-center md:px-20 font-poppins gap-1 text-[17px] text-gray-500 mb-4">
        <GoHomeFill size={16} className="text-[#0061E0]" />

        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <span>›</span>

        <Link to="/hotels" className="hover:text-blue-600">
          Hotel Booking
        </Link>

        <span>›</span>

        <span className="text-gray-800 font-medium">Hotel Details</span>
      </div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:px-20 md:justify-between md:items-center gap-3">
        <div>
          <h1 className="text-[36px]  font-goodly font-medium">
            Hotel Heritage smart International
          </h1>

          <div className="flex items-center font-poppins gap-3 text-sm text-gray-500 mt-1">
            <div className="flex items-center ">
              <MdOutlineStar size={16} className="text-[#FFB724]" />
              <span className="ml-1">4.5 (120 Reviews)</span>
            </div>

            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              Golden City Center Chhatrapati Sambhajinagar
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Dynamic Stars */}
          <div className="flex items-center ">
            <p className="md:mr-2">4</p>
            {[...Array(5)].map((_, i) => (
              <MdOutlineStar
                key={i}
                size={20}
                className={i < 4 ? "text-[#FFB724]" : "text-gray-300"}
              />
            ))}
          </div>

          <button className="bg-blue-600 font-poppins text-white px-4 py-2 rounded-lg text-sm">
            View Map
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid lg:grid-cols-3 md:px-20 gap-4 mt-6">
        {/* Main Image */}
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="lg:col-span-2 h-[350px] w-full object-cover rounded-xl"
        />

        {/* Side Images */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            className="h-[170px] w-full object-cover rounded-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            className="h-[170px] w-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b md:px-20 mt-8 font-poppins text-sm">
        <button className="border-b-2 border-[#FFB724] pb-2 font-medium">
          Overview
        </button>
        <button className="pb-2">Amenities</button>
        <button className="pb-2">Policies</button>
        <button className="pb-2">Reviews</button>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-3 md:px-20 font-poppins gap-8 mt-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-[25px] font-semibold mb-2">
            Hotel Heritage smart international
          </h2>

          <p className="text-[#00000094] text-[17px] mb-5">
            230 Rooms | 145 Beds | Free Wifi
          </p>

          <hr />

          {/* Features */}
          <div className="space-y-6  md:mt-5">
            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3  rounded-full">
                <MdOutlineMeetingRoom className="text-[#0644A0]" size={22} />
              </div>

              <div>
                <h3 className="font-medium text-[17px]">Entire Room</h3>
                <p className="text-[14px] text-gray-500">
                  You'll have the guest suite to yourself.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3 rounded-full">
                <MdOutlineCleaningServices
                  className="text-[#0644A0]"
                  size={22}
                />
              </div>

              <div>
                <h3 className="font-medium text-[17px]">Enhanced Clean</h3>
                <p className="text-[14px] text-gray-500">
                  This host committed to enhanced cleaning process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3  rounded-full">
                <GrUserAdmin className="text-[#0644A0]" size={22} />
              </div>

              <div>
                <h3 className="font-medium text-[17px]">Self Check-In</h3>
                <p className="text-[14px] text-gray-500">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#D6E8FF] p-3  rounded-full">
                <RiUserForbidLine className="text-[#0644A0]" size={22} />
              </div>

              <div>
                <h3 className="font-medium text-[17px]">Entire Room</h3>
                <p className="text-[14px] text-gray-500">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        {/* Right Side */}
        <div className="space-y-6">
          {/* Booking Card */}
          <div className="bg-white rounded-xl border border-[#0061E038] p-5 h-fit">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <p className="text-xl font-bold">₹ 6715</p>
                <p className="text-sm text-gray-500">/ night starting rate</p>
              </div>

              <div className="text-yellow-500 text-sm">⭐ 4.5 (120)</div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border p-2 rounded-lg text-sm flex gap-4">
                <div className="bg-[#0000000F] p-2 w-fit rounded">
                  <MdOutlineCalendarMonth
                    className="text-[#0644A0]"
                    size={25}
                  />
                </div>
                <div>
                  <p>Check In</p>
                  <p>23/05/1003</p>
                </div>
              </div>

              <div className="border p-2 rounded-lg text-sm flex gap-4">
                <div className="bg-[#0000000F] p-2 w-fit rounded ">
                  <MdOutlineCalendarMonth
                    className="text-[#0644A0]"
                    size={25}
                  />
                </div>
                <div>
                  <p>Check In</p>
                  <p>23/05/1003</p>
                </div>
              </div>

              <div className="border p-2 rounded-lg text-sm flex gap-4">
                <div className="bg-[#0000000F] p-2 w-fit rounded">
                  <LuUsersRound className="text-[#0644A0]" size={25} />
                </div>
                <div>
                  <p>Guests</p>
                  <p>Select</p>
                </div>
              </div>

              <div className="border p-2 rounded-lg text-sm flex gap-4">
                <div className="bg-[#0000000F] p-2 w-fit rounded">
                  <HiOutlineMoon className="text-[#0644A0]" size={25} />
                </div>
                <div>
                  <p>Nights</p>
                  <p>Select</p>
                </div>
              </div>
            </div>

            <hr className="border border-dashed border-[#FC8605] md:my-5" />

            {/* <select className="border p-2 rounded-lg w-full text-sm mb-4">
            <option>Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
          </select> */}

            {/* Room Options */}
            <div className="space-y-2 text-sm mb-4">
              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2" />
                  Single Bed Room
                </span>
                ₹2000
              </label>

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2" />
                  Standard deluxe suit
                </span>
                ₹2000
              </label>

              <label className="flex justify-between">
                <span>
                  <input type="checkbox" className="mr-2" />
                  Super deluxe suit
                </span>
                ₹2000
              </label>
            </div>
          </div>
          {/* Price Details Card */}
          <div className="border border-blue-200 rounded-2xl p-6 mt-6">
            <h2 className="text-lg font-semibold text-center mb-4">
              Price Details
            </h2>

            <hr className="mb-4" />

            {/* Price Rows */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <p>Room Price × Nights</p>
                <p className="font-medium">₹ 2000</p>
              </div>

              <div className="flex justify-between">
                <p>Taxes & Fees</p>
                <p className="font-medium">₹ 2000</p>
              </div>

              <div className="flex justify-between">
                <p>Discount Applied</p>
                <p className="font-medium">₹ 2000</p>
              </div>
            </div>

            {/* Dashed Line */}
            <hr className="border-dashed border-orange-400 my-5" />

            {/* Total */}
            <div className="flex justify-between font-semibold text-lg mb-4">
              <p>Total Amount Payable</p>
              <p>₹ 23020</p>
            </div>

            {/* Coupon */}
            <p className="text-sm mb-2">Have A Coupon Code ?</p>

            <div className="flex gap-3 mb-5">
              <input
                type="text"
                placeholder="Add here"
                className="flex-1 bg-[#C2EBFF7A] placeholder:text-[#0644A0] rounded-lg px-4 py-3 text-sm outline-none"
              />

              <button className="bg-yellow-400 text-white px-5 py-2 rounded-full font-medium">
                Apply
              </button>
            </div>

            {/* Payment Button */}
            <button className="w-full bg-gradient-to-r from-[#174EA6] to-[#1E63D5] text-white py-3 rounded-xl font-medium">
              Continue To Payment ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
