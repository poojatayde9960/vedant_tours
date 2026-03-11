import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IoIosAirplane } from "react-icons/io";

const testimonials = [
  {
    name: "Priya & Rohan Sharma",
    text: "Our honeymoon was perfectly planned from start to finish. The hotel, private transfers, and surprise candlelight dinner were beyond our expectations. Thank you for making it so special!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Verma",
    text: "Everything was smooth and hassle-free. The itinerary was well planned and the support team was always available.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    text: "Best travel experience ever! Amazing destinations and great hospitality throughout the trip.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative py-20 px-4 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/Rectangle 86.png')",
      }}
    >
      <div className="max-w-2xl mx-auto text-center text-white relative z-10">
        <h2 className="text-3xl sm:text-[36px] font-goodly font-medium">
          What Our <span className="text-yellow-300">Travelers</span>
          <span className="inline-block bg-white text-[#0644A0] px-3 py-1 md:ml-2 rounded-3xl -rotate-6 translate-y-1 shadow">
            <span className="block rotate-6 text-center font-medium">Say</span>
          </span>
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-sm sm:text-[16px] font-poppins">
          Real stories from happy travelers who trusted us to
          <br /> plan their unforgettable journeys.
        </p>

        {/* Testimonial Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-[#00000094] rounded-3xl shadow-2xl mt-12 p-8 sm:p-12 max-w-3xl mx-auto"
        >
          <div className="flex justify-center -mt-16">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h3 className="mt-6 font-semibold text-[17px] font-poppins text-black">
            {testimonials[index].name}
          </h3>
          <p className="mt-4 text-sm sm:text-[14px] leading-relaxed font-poppins">
            "{testimonials[index].text}"
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-[#FFB724] text-white rounded-full shadow hover:scale-110 transition"
          >
            <IoIosAirplane size={22} className="-scale-x-100" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white text-blue-600 rounded-full shadow hover:scale-110 transition"
          >
            <IoIosAirplane size={22} />
          </button>
        </div>
      </div>

      {/* Decorative floating avatars (hidden on small screens) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* <img
          src="https://randomuser.me/api/portraits/women/12.jpg"
          className="w-16 h-16 rounded-full absolute top-10 left-10 border-4 border-white"
          alt="avatar"
        /> */}
        {/* <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          className="w-16 h-16 rounded-full absolute top-20 right-16 border-4 border-white"
          alt="avatar"
        /> */}
        {/* <img
          src="https://randomuser.me/api/portraits/women/22.jpg"
          className="w-16 h-16 rounded-full absolute bottom-16 left-20 border-4 border-white"
          alt="avatar"
        /> */}
        {/* <img
          src="https://randomuser.me/api/portraits/men/60.jpg"
          className="w-16 h-16 rounded-full absolute bottom-10 right-24 border-4 border-white"
          alt="avatar"
        /> */}
      </div>
    </section>
  );
}
