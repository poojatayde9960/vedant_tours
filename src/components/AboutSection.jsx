import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 relative overflow-hidden mt-20 md:mt-60  md:pt-40">
      {/* Balloon - top */}
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
        {/* Grid */}
        <div className="grid lg:grid-cols-3 items-center gap-8">
          {/* LEFT SECTION */}
          <div className="space-y-6 text-center md:text-right">
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <img src="/icons/Vector-2.svg" alt="icon" />
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
            </div>

            <p className="text-gray-600 max-w-sm md:text-[15px] font-poppins ml-auto">
              Our expert team handles everything from
              <br /> planning and bookings to on ground
              <br /> supports
            </p>

            <div className="flex gap-4 font-poppins justify-center md:justify-end">
              <button className="bg-[#0644A0] text-white md:px-6 md:py-3 px-3 py-2 rounded-full">
                Personalized <br /> itineraries
              </button>

              <button className="bg-[#FFB724] text-white md:px-6 md:py-3 px-3 py-2 rounded-full">
                Transparent <br /> pricing
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center px-4">
            <img
              src="/img/Group-66.png"
              alt="travel"
              className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* RIGHT SECTION - desktop fixed */}
          <div className="space-y-6 text-start md:text-left md:-mt-40 lg:-ml-16">
            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <img src="/icons/Vector-2.svg" alt="icon" />
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <p className="bg-gradient-to-r from-[#FFB724] to-[#F76200] bg-clip-text text-transparent font-goodly font-light">
                Travel Beyond Expectations
              </p>
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <img src="/icons/Vector-1.svg" alt="icon" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] text-gray-800 leading-relaxed font-goodly font-medium">
              We specialize in <span className="text-orange-500">crafting</span>
              <span className="block mt-2 text-blue-600">
                unforgettable travel
              </span>
              <span className="block mt-2">experiences</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
