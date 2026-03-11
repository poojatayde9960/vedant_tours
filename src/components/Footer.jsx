import React from "react";

const Footer = () => {
  return (
    <section className="w-full py-5 px-3 sm:px-6">
      <div className="relative bg-[#1C71E9] text-white rounded-3xl p-5 sm:p-8 lg:p-12 lg:pb-20 overflow-hidden">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 border-b border-white/30 pb-4 text-left">

          {/* Logo - mobile first */}
          <img
            src="/img/white-logo.png"
            alt="Vedant Logo"
            className="h-14 w-auto order-1 lg:order-2"
          />

          <p className="text-sm sm:text-[16px] font-goodly font-light leading-relaxed max-w-xl order-2 lg:order-1">
            Your trusted travel partner, helping you explore the world with
            confidence and comfort. We design seamless journeys crafted with
            care, transparency, and expertise.
          </p>

        </div>

        {/* Middle */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-start text-left">

          {/* Left */}
          <div className="flex flex-col gap-5 lg:w-1/2 items-start w-full">
            <p className="text-sm font-poppins font-normal sm:text-base max-w-md">
              Crafting seamless travel <br className="hidden sm:block" />
              experiences with trust, <br className="hidden sm:block" />
              precision, and passion.
            </p>

            <div className="flex flex-row items-center bg-white rounded-full overflow-hidden w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter Email / Contact No"
                className="flex-1 px-4 sm:px-5 py-2 text-gray-700 outline-none text-xs sm:text-sm"
              />
              <button className="bg-[#FFB724] text-white px-4 sm:px-6 py-2 font-medium text-sm">
                Submit
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-poppins text-[15px] sm:text-base lg:w-1/2 text-left w-full">

            <div className="text-left">
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-white/90 text-left">
                <li className="text-left"><a href="#home">Home</a></li>
                <li className="text-left"><a href="#about">About Us</a></li>
                <li className="text-left"><a href="#services">Why Choose Us</a></li>
                <li className="text-left"><a href="#book">Book</a></li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-white/90 text-left">
                <li className="text-left">+91 8585 666 322</li>
                <li className="text-left break-all">vedanttour@gmail.com</li>
                <li className="text-left">
                  golden city center, chhatrapati
                  <br />
                  sambhajinagar 431001
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-semibold mb-3">Social Media</h3>
              <ul className="space-y-2 text-white/90 text-left">
                <li className="text-left">Whatsapp</li>
                <li className="text-left">Facebook</li>
                <li className="text-left">Instagram</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Big Text */}
        <div className="mt-10 text-left">
          <h1 className="hidden sm:block text-[28px] sm:text-6xl md:text-7xl lg:text-[113px] font-semibold tracking-wide md:whitespace-nowrap">
            VEDANT HOLIDAY TOURS
          </h1>
        </div>

        {/* Badge */}
        <div className="absolute md:block hidden bottom-8 md:ml-16 left-1/2 -translate-x-1/2 sm:left-1/3 sm:translate-x-0 rotate-[-25deg]">
          <div className="bg-yellow-400 text-white font-semibold px-4 py-3 shadow-lg">
            BEST <br /> HOLIDAY TOURS
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 text-left">
        <p className="text-[14px] font-medium">
          © 2026 Vedant Tours & Travel. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <p>Developed By</p>
          <img
            src="/img/tech_surya_logo.png"
            className="w-20 h-8"
            alt="Tech Surya"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;