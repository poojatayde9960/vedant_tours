import React from "react";

const Footer = () => {
  return (
    <section className="w-full py-6 px-3 sm:px-6">
      <div className="relative bg-[#1C71E9] text-white rounded-3xl p-6 sm:p-10 lg:p-10 overflow-hidden">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 border-b border-white/30 pb-6 text-left">
          <p className="text-sm sm:text-[16px] font-goodly font-light leading-relaxed max-w-xl">
            Your trusted travel partner, helping you explore the world with
            confidence and comfort. We design seamless journeys crafted with
            care, transparency, and expertise.
          </p>

          <img
            src="/img/white-logo.png"
            alt="Vedant Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Middle */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start text-left">
          {/* Left */}
          <div className="flex flex-col gap-6 lg:w-1/2 items-start">
            <p className="text-sm sm:text-base max-w-md">
              Crafting seamless travel <br />
              experiences with trust, <br />
              precision, and passion.
            </p>

            <div className="flex flex-row items-center bg-white rounded-full overflow-hidden w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter Email / Contact No"
                className="flex-1 px-5 py-3 text-gray-700 outline-none"
              />
              <button className="bg-[#FFB724] text-white px-6 py-3 font-medium">
                Submit
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm lg:w-1/2 text-left">
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About Us</a>
                </li>

                <li>
                  <a href="#services">Why Choose Us</a>
                </li>

                <li>
                  <a href="#book">Book</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-white/90">
                <li>+91 8585 666 322</li>
                <li>vedanttour@gmail.com</li>
                <li>
                  golden city center, chhatrapati
                  <br />
                  sambhajinagar 431001
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold mb-3">Social Media</h3>
              <ul className="space-y-2 text-white/90">
                <li>Whatsapp</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-left overflow-hidden">
          <h1 className="text-[28px] sm:text-6xl md:text-7xl lg:text-[113px] font-bold tracking-wide uppercase leading-tight">
            VEDANT HOLIDAY TOURS
          </h1>
        </div>

        {/* Badge */}
        <div className="absolute md:block hidden bottom-16 left-1/2 -translate-x-1/2 sm:left-1/3 sm:translate-x-0 rotate-[-15deg]">
          <div className="bg-yellow-400 text-white font-semibold px-6 py-3 shadow-lg">
            BEST <br /> HOLIDAY TOURS
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 text-left">
        <p className="text-[14px] font-medium">@2026 All rights Reserved</p>

        <div className="flex items-center gap-4">
          <p>Developed By</p>
          <img src="/img/tech_surya_logo.png" className="w-22 h-10" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
