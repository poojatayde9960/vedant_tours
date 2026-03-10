import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Categories from "./pages/Categories";
import Flights from "./pages/Flights";
import FlightDetails from "./components/FlightDetails";
import About from "./pages/About";
import TourPackages from "./pages/TourPackages";
import HotelDetails from "./pages/HotelDetails";
import HotelInfo from "./pages/HotelInfo";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/hotel-list" element={<HotelDetails />} />
        <Route path="/hotel-details/:id" element={<HotelInfo />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
