import React from "react";

const services = [
  { title: "Flight Booking", icon: "/img/img-1.png", bg: "#C2EBFF" },
  { title: "Hotel Booking", icon: "/img/img-2.png", bg: "#FC8605" },
  { title: "Bus Booking", icon: "/img/img-3.png", bg: "#B9FFBB" },
  { title: "Stays", icon: "/img/img-4.png", bg: "#FEB1B0" },
  { title: "Holiday Plans", icon: "/img/img-5.png", bg: "#D6E8FF" },
  { title: "Car Booking", icon: "/img/img-6.png", bg: "#EF5BA7" },
  { title: "Cruise Booking", icon: "/img/img-7.png", bg: "#FEB1B0" },
  { title: "Train Booking", icon: "/img/img-8.png", bg: "#D0FFBC" },
  { title: "Travel Insurance", icon: "/img/img-9.png", bg: "#C1B0FF" },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-0 overflow-hidden min-h-[650px] md:min-h-[720px] lg:min-h-[650px] flex flex-col">

      {/* Background Image */}
      <img
        src="/img/Frame-8.png"
        alt="Background"
        className="absolute w-full h-full object-cover hidden md:block"
      />

      {/* Top Cloud */}
      <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-white rounded-b-[80px] md:rounded-b-[100px] z-10"></div>

      <div className="relative z-20 md:mt-32 lg:mt-52 md:px-10 lg:px-20 pb-16">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-12 md:mb-16 text-center md:text-left">
          
          <h2 className="text-2xl sm:text-[32px] lg:text-[36px] text-gray-800 leading-snug font-goodly font-medium">
            Everything <span className="text-orange-500">You Need</span> For A
            <br />
            Perfect <span className="text-blue-600">Trip</span>
          </h2>

          <p className="text-gray-600 font-medium max-w-md font-poppins text-[14px] md:text-[15px]">
            From bookings to visas and personalized tour planning, we handle
            every detail of your journey so you can travel stress free and focus
            on making memories.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-10 lg:gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 group"
            >

              <div className="w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full p-[1px] bg-gradient-to-r from-[#FFB724] via-[#F76200] to-[#0061E0] group-hover:shadow-xl transition duration-300">

                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: service.bg }}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 md:w-15 md:h-15 lg:w-16 lg:h-16 object-contain"
                  />
                </div>

              </div>

              <p className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                {service.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;