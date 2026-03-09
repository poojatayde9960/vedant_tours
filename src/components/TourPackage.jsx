import React from "react";
import { motion } from "framer-motion";
import { Plane, ShieldCheck, Route } from "lucide-react";
import { BiSolidPlaneAlt } from "react-icons/bi";

export default function TourPackage() {
  return (
    <section className="py-16 px-4 md:px-0 overflow-hidden">
      <div className=" mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Images */}
        <div className="relative flex flex-col  w-full items-center   lg:items-start">
          <div className="relative w-full max-w-md md:max-w-4xl">
            <img src="/img/Group-68.png" alt="travel" />
          </div>

          <img src="/img/suitcase-2.png" className="absolute  md:h-52 left-[1330px] -top-10 z-40"/>

          {/* ✅ Counter moved here */}
          <div className="flex items-center gap-4 pt-6 md:ml-24">
            <BiSolidPlaneAlt className="text-[#0061E0]" size={40} />
            <h3 className="text-3xl sm:text-[36px]  font-goodly font-medium">
              <span className="text-[#FFB724]">250+</span> Tour Packages
            </h3>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-[36px]  leading-snug font-goodly font-medium">
            Your <span className="text-[#FC8605]">Journey</span>, Our
            <br />
            <span className="text-blue-600">Commitment</span>
          </h2>

          <p className="text-gray-600 font-poppins max-w-lg mx-auto lg:mx-0 text-sm sm:text-[17px]]">
            We don’t just plan trips — we craft seamless travel<br /> experiences
            designed around your comfort, preferences,<br /> and peace of mind.
          </p>

          {/* Features */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-4 bg-[#C2EBFF7A] text-[#0644A0] rounded-xl">
                <Route size={22} />
              </div>
              <div className="font-poppins">
                <h4 className="font-semibold text-[17px] text-[#FC8605]">
                  Personalized Travel Planning
                </h4>
                <p className="text-gray-500 text-[13px] ">
                  Every trip is thoughtfully designed based on your interests,<br />
                  budget, and travel style.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-4 bg-[#C2EBFF7A] text-[#0644A0] rounded-xl">
                <ShieldCheck size={22} />
              </div>
              <div className="font-poppins">
                <h4 className="font-semibold text-[17px] text-[#FC8605]">
                  Trusted Travel Experts
                </h4>
                <p className="text-gray-500 text-[13px]">
                  Our experienced team ensures smooth coordination,<br /> reliable
                  bookings, and expert guidance at every step.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
