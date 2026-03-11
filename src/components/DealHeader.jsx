import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DealsHeader = () => {
  const [active, setActive] = useState("Show All Offers");
  const navigate = useNavigate();

  const filters = ["Show All Offers", "Hotels", "Flights", "Buses", "Stays"];

  const handleFilterClick = (item) => {
    setActive(item);

    const mapping = {
      "Hotels": "hotel",
      "Flights": "flight",
      "Buses": "bus",
      "Stays": "hotel",
      "Show All Offers": "flight"
    };

    navigate("/categories", { state: { activeService: mapping[item] } });
  };

  return (
    <section className="w-full py-8 md:py-14 px-4 mt-6 md:mt-9 relative overflow-hidden">
      {/* Left Balloon */}
      <img
        src="/img/balloon.svg"
        alt="balloon"
        className="hidden md:block absolute left-40 top-40 -translate-y-1/2 w-14 lg:w-20"
      />

      {/* Content */}
      <div className="w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:-mt-10 -mt-9 lg:-mt-0 sm:text-3xl lg:text-[40px] font-goodly font-medium text-gray-800">
          Unmissable <span className="text-orange-500">Deals</span>, Limited
          Time <span className="text-blue-600">Only</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 md:mt-8 font-medium text-sm sm:text-[17px] max-w-2xl mx-auto text-poppins">
          Grab exclusive discounts on top destinations, honeymoon packages, and
          <br /> group tours. Book now and travel more while spending less.
        </p>

        {/* Filter Buttons Carousel */}
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 md:gap-3 mt-6 md:mt-8 font-poppins no-scrollbar px-2 md:px-4 scroll-smooth">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => handleFilterClick(item)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-poppins font-medium transition flex-shrink-0
      ${active === item
                  ? "bg-[#0644A0] text-white shadow"
                  : "bg-[#C2EBFF7A] text-blue-700"
                }`}
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

