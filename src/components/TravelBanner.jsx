import React from "react";
import { useNavigate } from "react-router-dom";

export default function TravelBanner() {

  const navigate = useNavigate();

  return (
    <section className="px-6 mb-24 relative">
      <div className="bg-[#FFB724] h-[360px] relative md:mt-0 mt-20 flex flex-col items-center justify-center text-center p-8 lg:p-12 group overflow-hidden">
        {/* SVG Clouds/Planes decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 right-20 animate-bounce delay-700">
            <div className="w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          </div>
          <div className="absolute bottom-10 left-20">
            <div className="w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="z-10 relative space-y-10 md:-mt-10">
          <div>
            <h2 className="text-white text-[32px] lg:text-[36px] font-goodly font-medium leading-tight drop-shadow-md">
              Ready To Start Your Next Adventure?
            </h2>
            <p className="text-white text-[14px] md:mt-2 lg:text-[16px] font-poppins max-w-2xl mx-auto opacity-90 leading-relaxed">
              Let us plan a seamless, stress-free journey tailored perfectly to
              your dreams and budget.
            </p>
          </div>

          <button className="bg-white font-poppins text-[#0061E0] px-12 py-4 rounded-full text-[17px] text-base hover:shadow-2xl hover:scale-105 transition-all"
            onClick={() => navigate("/tour-packages")}>
            Explore Packages
          </button>
        </div>

        {/* Statues / Illustrations from pack */}
        <div className="absolute md:block hidden left-[-5%] -bottom-[10%] w-[350px] h-[350px] pointer-events-none">
          <img
            src="/img/statue.svg"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute md:block hidden left-[15%] -bottom-[20%] w-[350px] h-[350px] pointer-events-none">
          <img
            src="/img/flying1.png"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute md:block hidden left-[72%] -bottom-[24%] w-[450px] h-[350px] pointer-events-none">
          <img
            src="/img/flying2.png"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Hot air balloon outside parent to prevent cut */}
      <div className="absolute md:block hidden right-80 -top-16 w-32 h-32 z-40">
        <img
          src="/img/para-balloon.png"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
