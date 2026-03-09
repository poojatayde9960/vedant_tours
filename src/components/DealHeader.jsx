import React, { useState } from "react";

const DealsHeader = () => {
  const [active, setActive] = useState("All Offers");

  const filters = ["All Offers", "Hotels", "Flights", "Buses", "Stays"];

  return (
    <section className="w-full py-14 px-4 relative overflow-hidden">
      {/* Left Balloon */}
      <img
        src="/public/img/box-balloon.png"
        alt="balloon"
        className="hidden md:block absolute left-40 top-40 -translate-y-1/2 w-14 lg:w-20"
      />

      {/* Content */}
      <div className="w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-goodly font-medium text-gray-800">
          Unmissable <span className="text-orange-500">Deals</span>, Limited
          Time <span className="text-blue-600">Only</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 md:mt-8 font-medium text-sm sm:text-[17px] max-w-2xl mx-auto text-poppins">
          Grab exclusive discounts on top destinations, honeymoon packages, and
          <br /> group tours. Book now and travel more while spending less.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:mt-8 text-poppins">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition
              
              ${
                active === item
                  ? "bg-[#0644A0] text-white shadow"
                  : "bg-[#C2EBFF7A] text-blue-700"
              }
              
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsHeader;
