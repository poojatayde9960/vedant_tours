import React from "react";

const SignIn = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
      onClick={onClose} // outside click close
    >
      <div
        className="md:w-[1200px] md:h-[670px] font-poppins rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: "url('/img/Desktop - 11.png')",
        }}
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Logo Section */}
        <div className="mb-8 z-10">
          <img
            src="/img/logo.png"
            alt="Vedant Holiday Tour Logo"
            className="h-20 md:h-24"
          />
        </div>

        {/* Sign In Card */}
        <div className="bg-[#003B95] w-[160%] ml-10 max-w-[400px] rounded-[40px] p-8 md:p-6 shadow-2xl z-10">
          <div className="text-center mb-2">
            <h2 className="text-white text-2xl md:text-[17px] font-medium tracking-wide">
              Sign In
            </h2>

            <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
          </div>

          <form className="space-y-3">
            {/* Contact No */}
            <div className="space-y-2">
              <label className="text-white text-[15px] font-normal block">
                Contact no
              </label>

              <input
                type="text"
                placeholder="Enter Your Contact No"
                className="w-full bg-white rounded-xl placeholder:text-[15px] py-3 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none text-lg"
              />
            </div>

            {/* OTP */}
            <div className="space-y-2">
              <label className="text-white text-[15px] font-normal block">
                OTP
              </label>

              <input
                type="text"
                placeholder="Enter OTP Here"
                className="w-full bg-white rounded-xl placeholder:text-[15px] py-3 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none text-lg"
              />
            </div>

            {/* Button */}
            <div className="pt-14">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFB82B] to-[#FF8A00] text-white py-4 rounded-2xl text-[17px] font-semibold shadow-lg hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
