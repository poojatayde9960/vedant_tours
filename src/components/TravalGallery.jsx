import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const galleryImages = [
  "https://images.unsplash.com/photo-1772950399275-81eea958d92b?q=80&w=1243&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  "https://plus.unsplash.com/premium_photo-1710010209274-2c2266291da2?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1754663455828-0ba40ec6771f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1698154050418-4030ef03a685?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1684853948444-0811966ca2bf?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622214366189-72b19cc61597?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488747279002-c8523379faaa",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
];

export default function TravelGallery() {
  const slides = [];

  for (let i = 0; i < galleryImages.length; i += 10) {
    let chunk = galleryImages.slice(i, i + 10);

    while (chunk.length < 10) {
      chunk.push(...galleryImages.slice(0, 10 - chunk.length));
    }

    slides.push(chunk);
  }

  return (
    <section className="py-20 overflow-hidden w-full hidden md:block">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="continuousSwiper"
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          1000: {
            spaceBetween: 330, // Nest Hub range
          },
          1100: {
            spaceBetween: 0, // Laptop reset
          },
        }}
      >
        {slides.map((slideImages, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full flex justify-center">
              <GalleryLayout images={slideImages} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function GalleryLayout({ images }) {
  return (
    <>
      {/* Mobile Layout - Single Row Carousel */}
      <div className="flex md:hidden justify-center items-center gap-4 w-max shrink-0 px-4">
        {images.map((img, i) => (
          <GalleryItem
            key={i}
            img={img}
            className="w-[140px] h-[180px] rounded-2xl shrink-0"
          />
        ))}
      </div>

      {/* Desktop / Tablet ZigZag */}
      <div className="hidden md:flex justify-center items-start gap-4 lg:gap-6 w-max shrink-0">
        <div className="flex flex-col gap-4 shrink-0">
          <GalleryItem img={images[0]} />
          <GalleryItem img={images[1]} />
        </div>

        <div className="flex flex-col gap-4 md:mt-12 shrink-0">
          <GalleryItem img={images[2]} />
          <GalleryItem img={images[3]} />
        </div>

        <div className="flex flex-col gap-6 md:mt-28 shrink-0 relative">
          {/* <img
            src="/img/para-balloon.png"
            alt="balloon"
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-auto z-10"
          /> */}
          <GalleryItem img={images[4]} />
        </div>

        <div className="flex flex-col gap-6 md:mt-28 shrink-0">
          <GalleryItem img={images[5]} />
        </div>

        <div className="flex flex-col gap-4 md:mt-12 shrink-0">
          <GalleryItem img={images[6]} />
          <GalleryItem img={images[7]} />
        </div>

        <div className="flex flex-col gap-4 shrink-0">
          <GalleryItem img={images[8]} />
          <GalleryItem img={images[9]} />
        </div>
      </div>
    </>
  );
}

function GalleryItem({ img, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden 
w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] xl:w-[230px]
h-[220px] lg:h-[280px] rounded-3xl ${className}`}
    >
      <img
        src={`${img}?q=80&w=800&auto=format`}
        alt="travel"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
