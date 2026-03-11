import React from "react";

const SignIn = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
      onClick={onClose} // outside click close
    >
      <div
        className="w-full md:w-[950px] md:h-[600px] font-poppins md:rounded-3xl md:bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative md:shadow-2xl md:bg-[url('/img/Desktop%20-%2011.png')]"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Logo Section */}
        <div className="mb-6 z-10 hidden md:block">
          <img
            src="/img/logo.png"
            alt="Vedant Holiday Tour Logo"
            className="h-16 md:h-20"
          />
        </div>

        {/* Sign In Card */}
        <div className="bg-[#003B95] w-full max-w-[380px] rounded-[36px] p-6 md:p-8 shadow-2xl z-10">
          <div className="text-center mb-4">
            <h2 className="text-white text-xl md:text-[20px] font-medium tracking-wide">
              Sign In
            </h2>

            <div className="w-full h-[1px] bg-white/20 mt-4"></div>
          </div>

          <form className="space-y-4">
            {/* Contact No */}
            <div className="space-y-1.5">
              <label className="text-white text-[14px] font-normal block">
                Contact no
              </label>

              <input
                type="text"
                placeholder="Enter Your Contact No"
                className="w-full bg-white rounded-xl placeholder:text-[14px] py-1.5 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none text-base"
              />
            </div>

            {/* OTP */}
            <div className="space-y-1.5">
              <label className="text-white text-[14px] font-normal block">
                OTP
              </label>

              <input
                type="text"
                placeholder="Enter OTP Here"
                className="w-full bg-white rounded-xl placeholder:text-[14px] py-1.5 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none text-base"
              />
            </div>

            {/* Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFB82B] to-[#FF8A00] text-white py-3 rounded-xl text-[16px] font-semibold shadow-lg hover:opacity-90 transition-opacity"
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
