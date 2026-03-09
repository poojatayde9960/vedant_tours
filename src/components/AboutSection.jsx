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
        <div className="grid lg:grid-cols-3 items-center gap-12 lg:gap-8">
          {/* RIGHT SECTION - Now first on mobile */}
          <div className="space-y-6 text-center md:text-left lg:-mt-20 order-1 lg:order-3">
            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <img src="/icons/Vector-2.svg" alt="icon" className="w-4 h-4" />
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <p className="bg-gradient-to-r from-[#FFB724] to-[#F76200] bg-clip-text text-transparent font-goodly font-light text-sm md:text-base">
                Travel Beyond Expectations
              </p>
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
              <img src="/icons/Vector-1.svg" alt="icon" className="w-4 h-4" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-gray-800 leading-tight font-goodly font-medium px-4 md:px-0">
              We specialize in <span className="text-orange-500">crafting</span>
              <span className="block mt-2 text-blue-600">
                unforgettable travel
              </span>
              <span className="block mt-2">experiences</span>
            </h2>
          </div>

          {/* CENTER IMAGE - order-2 */}
          <div className="flex justify-center order-2 lg:order-2 px-4">
            <img
              src="/img/Group-66.png"
              alt="travel"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              style={{ minHeight: '200px' }}
            />
          </div>

          {/* LEFT SECTION - order-3 */}
          <div className="space-y-6 text-center lg:text-right order-3 lg:order-1">
            <div className="flex items-center gap-3 justify-center lg:justify-end">
              <img src="/icons/Vector-2.svg" alt="icon" className="w-4 h-4" />
              <div className="w-10 border-t-2 border-dotted border-[#FC8605]"></div>
            </div>

            <p className="text-gray-600 max-w-sm md:text-[15px] font-poppins mx-auto lg:ml-auto lg:mr-0 px-4">
              Our expert team handles everything from
              planning and bookings to on ground
              supports
            </p>

            <div className="flex gap-4 font-poppins justify-center lg:justify-end px-4">
              <button className="bg-[#0644A0] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg active:scale-95 transition-transform">
                Personalized <br /> itineraries
              </button>

              <button className="bg-[#FFB724] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg active:scale-95 transition-transform">
                Transparent <br /> pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
