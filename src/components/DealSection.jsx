import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import DealsHeader from "./DealHeader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const offers = [
  {
    title: "Explore to Goa",
    subtitle: "Have a Great Vacation!",
    image:
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tour and Travel",
    subtitle: "Experience unforgettable journeys",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Vietnam",
    subtitle: "35% Off - Limited Deal",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mountain Escape",
    subtitle: "Adventure awaits in the peaks",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DealsSection() {
  const navigate = useNavigate();
  return (
    <section className="relative px-4 sm:px-6 md:px-0">
      <DealsHeader />

      <div className="relative w-full md:mt-0">
        <img
          src="/img/Rectangle-70.png"
          alt="wave"
          className="w-screen h-48 md:h-[570px] md:block hidden relative left-1/2 -translate-x-1/2"
        />
        {/* Cards Section ON TOP of Wave */}
        <div className="md:absolute md:top-40 inset-0 flex flex-col items-center">
          <div className="relative md:max-w-7xl mx-auto w-full mt-6 md:-mt-10 lg:-mt-20">
            <div className="px-4 pb-0 md:pb-12">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="dealsSwiper !pb-14"
              >
                {offers.map((offer, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl mb-4"
                    >
                      <div className="relative">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg font-goodly font-medium">
                            {offer.title}
                          </h3>
                          <p className="text-sm text-gray-200 font-poppins">
                            {offer.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center -mt-8 md:-mt-12">
              <button
                className="bg-blue-600 font-poppins text-white px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
                onClick={() => navigate("/tour-packages")}
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
