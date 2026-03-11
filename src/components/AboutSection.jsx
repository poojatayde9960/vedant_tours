import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full px-4  sm:px-6 md:px-10 relative overflow-hidden mt-[70%] md:mt-60 md:pt-40">

      {/* Balloon */}
      <img
        src="/img/box-balloon.png"
        alt="balloon"
        className="hidden md:block absolute w-20 right-[770px] top-0"
      />

      {/* Helicopter */}
      <img
        src="/img/helicopter.png"
        alt="helicopter"
        className="hidden md:block absolute w-56 right-0 top-[370px]"
      />

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:grid lg:grid-cols-3 items-center gap-6">

          {/* LEFT CONTENT (Buttons + Text) */}
          <div className="space-y-4 text-center md:text-right order-3 lg:order-1">

            {/* Desktop divider */}
            <div className="hidden lg:flex items-center gap-3 justify-end">
              <img src="/icons/Vector-2.svg" alt="icon" />
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
            </div>

            {/* Desktop paragraph */}
            <p className="hidden lg:block text-gray-600 max-w-sm text-[15px] font-poppins ml-auto">
              Our expert team handles everything from
              <br /> planning and bookings to on ground
              <br /> supports
            </p>

            {/* Mobile paragraph */}
            <div className="lg:hidden space-y-2 -mt-6">

              <p className="text-gray-600 font-medium max-w-md font-poppins text-[14px] md:text-[15px]">
                Our expert team handles everything from planning and bookings to on-ground supports
              </p>
            </div>

            {/* Buttons */}
            {/* Buttons */}
            <div className="flex gap-4  font-goodly justify-center md:justify-end pt-2 md:mt-0">
              <button className="bg-[#0644A0] text-white text-[14px] md:px-6 md:py-2 px-3 py-2 rounded-full whitespace-nowrap">
                Personalized <br className="hidden md:block" /> itineraries
              </button>

              <button className="bg-[#FFB724] text-white text-[15px] md:px-6 md:py-3 px-3 py-2 rounded-full whitespace-nowrap">
                Transparent <br className="hidden md:block" /> pricing
              </button>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center px-4 order-2">
            <img
              src="/img/Group-66.png"
              alt="travel"
              className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* RIGHT HEADING */}
          <div className="space-y-4 text-center md:text-left md:-mt-40 lg:-ml-16 order-1 lg:order-3">

            {/* Small heading */}
            <div className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
              <img src="/icons/Vector-2.svg" alt="icon" className="w-3" />

              <div className="w-6 border-t border-dotted border-[#FC8605]"></div>

              <p className="bg-gradient-to-r from-[#FFB724] to-[#F76200] bg-clip-text text-transparent font-goodly text-sm md:text-[17px] font-medium">
                Travel Beyond Expectations
              </p>

              <div className="w-6 border-t border-dotted border-[#FC8605]"></div>

              <img src="/icons/Vector-1.svg" alt="icon" className="w-3" />
            </div>

            {/* Main heading */}
            <h2 className="text-xl sm:text-3xl lg:text-[36px] text-gray-800 font-goodly font-medium">
              We specialize in <span className="text-orange-500">crafting</span>
              <span className="md:block md:mt-2 text-blue-600 lg:ml-2">
                {" "}unforgettable travel
              </span>
              <span className="md:block md:mt-2 lg:ml-2">experiences</span>
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;