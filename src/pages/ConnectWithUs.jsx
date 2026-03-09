import React from "react";
import { FaCamera, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ConnectWithUs = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 font-poppins bg-black/50 flex items-center justify-center p-6 z-50"
      onClick={onClose} // outside click close
    >
      {/* Main Card */}
      <div
        className="relative rounded-[40px] bg-white max-w-5xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Background Image */}
        <img
          src="/img/mountain.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center p-3">
          
          {/* Girl Image */}
          <div className="hidden md:flex w-1/2 items-center justify-center p-10">
            <img
              src="/img/img9.png"
              className="w-[530px] absolute left-0 top-[250px]"
              alt=""
            />
          </div>

          <div className="md:block hidden">
            <img
              src="/img/box-balloon.png"
              className="absolute w-20 top-16 left-4"
              alt=""
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/1 md:p-10 p-3 text-white bg-[#0644A0] rounded-xl">

            <img
              src="/img/flying1.png"
              className="absolute w-[300px] left-[270px] top-[10px] md:block hidden"
              alt=""
            />

            <h2 className="md:text-[20px] mb-3 md:text-left md:ml-40">
              Connect With Us
            </h2>

            <p className="text-yellow-400 mb-8 md:text-left md:ml-40 font-poppins text-[14px]">
              Have questions about destinations, bookings,<br />
              cruises, or visa services? Our travel experts are<br />
              ready to assist you every step of the way.
            </p>

            <form className="space-y-3">

              {/* Name */}
              <div className="flex items-center gap-2 md:gap-10 md:ml-20">
                <div className="bg-orange-500 w-12 h-10 flex items-center justify-center rounded-full text-white text-xl">
                  <FaCamera />
                </div>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl placeholder:text-[#0644A0] placeholder:text-[14px] px-4 py-2 text-black outline-none"
                />
              </div>

              {/* Contact */}
              <div className="flex items-center gap-2 md:gap-10 md:ml-20">
                <div className="bg-orange-500 w-12 h-10 flex items-center justify-center rounded-full text-white text-xl">
                  <FaPhoneAlt />
                </div>

                <input
                  type="text"
                  placeholder="Contact No"
                  className="w-full rounded-xl placeholder:text-[#0644A0] placeholder:text-[14px] px-4 py-2 text-black outline-none"
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 md:gap-10 md:ml-20">
                <div className="bg-orange-500 w-12 h-10 flex items-center justify-center rounded-full text-white text-xl">
                  <FaMapMarkerAlt />
                </div>

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-xl placeholder:text-[#0644A0] placeholder:text-[14px] px-4 py-2 text-black outline-none"
                />
              </div>

              {/* Message */}
              <div className="md:ml-40">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full rounded-xl placeholder:text-[#0644A0] placeholder:text-[14px] px-4 py-2 text-black outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="md:ml-40">
                <button
                  className="w-full py-4 rounded-xl text-white font-poppins text-[17px]
                  bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90"
                >
                  Get In Touch
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;