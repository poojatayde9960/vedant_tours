import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import LovedPlaces from "../components/LovedPlaces";
import DealsSection from "../components/DealSection";
import TourPackage from "../components/TourPackage";
import TestimonialsSection from "../components/TestimonialsSection";
import TravelGallery from "../components/TravalGallery";
import TravelBanner from "../components/TravelBanner";

const LandingPage = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="places">
        <LovedPlaces />
      </section>

      <section id="deals">
        <DealsSection />
      </section>

      <section id="packages">
        <TourPackage />
      </section>
      {/* <section id="packages">
        <TourPackage />
      </section> */}

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="gallery">
        <TravelGallery />
      </section>

      <section id="book">
        {/* <TravelBanner /> */}
      </section>
    </div>
  );
};

export default LandingPage;
