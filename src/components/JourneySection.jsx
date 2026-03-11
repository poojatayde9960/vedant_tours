import React from "react";
import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    // <section className="w-full mt-52 py-16 pb-32 md:pb-16 px-6 md:px-20 md:mt-20 min-h-screen relative overflow-hidden">
    <section className="w-full mt-52 py-16 px-6 pb-32 md:-mb-40 md:px-20 md:mt-10 h-[80%] relative overflow-hidden">
      {/* Decorative Helicopter */}
      <img
        src="/img/Frame 11.png"
        alt="helicopter"
        className="hidden md:block absolute -top-2 right-60 w-24 lg:w-[1250px]"
      />

      <img
        src="/img/helicopter.png"
        className="hidden md:block md:h-[180px] h-40 absolute top-44 md:-top-10 right-1"
        alt="helicopter"
      />

      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-[36px] font-goodly font-medium  text-gray-800">
            Your Journey <span className="text-orange-500">Made</span> Easy
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-[17px] font-poppins">
            From selecting your destination to enjoying your trip, we handle
            everything with precision and care.
          </p>
          <button className="mt-6 bg-[#0644A0] font-poppins text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 relative">


          {/* Steps */}
          <div className="relative font-poppins h-[500px] mt-10 md:mt-0">
            <Step
              number="1"
              title="Travel & Enjoy"
              description="Relax while we handle the details. Enjoy a smooth, stress-free journey with dedicated support at every step."
              position="md:top-44 md:left-16 -top-24"
            />

            <Step
              number="2"
              title="Travel & Enjoy"
              description="Relax while we handle the details. Enjoy a smooth, stress-free journey with dedicated support at every step."
              position="md:top-10 md:left-[43%] top-[70px]"
            />

            <Step
              number="3"
              title="Travel & Enjoy"
              description="Relax while we handle the details. Enjoy a smooth, stress-free journey with dedicated support at every step."
              position="md:-top-52 md:-right-10 top-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Step Component */
/* Step Component */
function Step({ number, title, description, position }) {
  return (
    <div className={`absolute ${position} flex items-start mt-16 md:mt-0 gap-2 md:gap-4`}>

      {/* Number */}
      <span className="absolute -left-2 md:-left-12 text-[60px] md:text-[120px] lg:text-[150px] font-medium text-blue-100 font-poppins">
        {number}
      </span>

      {/* Text */}
      <div className="ml-10 md:ml-6 mt-6 md:mt-8">
        <h3 className="text-[16px] md:text-[20px] font-medium text-gray-800 font-poppins">
          {title}
        </h3>

        <p className="mt-1 text-[13px] md:text-[17px] text-[#00000094] font-normal max-w-[200px] md:max-w-xs font-poppins">
          {description}
        </p>
      </div>
    </div>
  );
}
