import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage'
import Categories from '../pages/Categories'

const Route = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default Route
