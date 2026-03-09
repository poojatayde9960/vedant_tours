import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import DealsHeader from "./DealHeader";

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
];

export default function DealsSection() {
  return (
    <section className=" relative overflow-hidden ">
      <DealsHeader />

      <div className="relative w-full md:mt-0">
        <img
          src="/img/Rectangle-70.png"
          alt="wave"
          className="w-screen h-48 md:h-[500px]  md:block hidden relative left-1/2 -translate-x-1/2"
        />
        {/* Cards Section ON TOP of Wave */}
        <div className="md:absolute   md:top-40 inset-0 flex items-start">
          <div className="relative md:max-w-7xl mx-auto px-4 md:px-10 w-full -mt-20">
            <div className="grid grid-cols-1 md:mt-0 mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg  font-goodly font-medium">
                        {offer.title}
                      </h3>
                      <p className="text-sm text-gray-200 font-poppins">
                        {offer.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* <div className="p-5 flex items-center justify-between font-poppins">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                      Book Now
                    </button>
                    <Plane className="text-blue-600" size={20} />
                  </div> */}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div className="flex justify-center mt-12">
              <button className="bg-blue-600 font-poppins text-white px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
                Plan My Trip
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
