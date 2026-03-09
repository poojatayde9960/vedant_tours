import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
import ConnectWithUs from "../pages/ConnectWithUs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  return (
    <nav className="w-full sticky top-0 bg-white z-40 md:pt-4">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-20 ">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/img/logo.png"
                alt="Vedant Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-20 font-medium text-[#0644A0]">
            <Link
              to="/about"
              className="flex items-center gap-2 border-b-2 border-[#FFB724] pb-1 hover:text-blue-600 transition"
            >
              About
              {/* <img src="/icons/Vector.svg" alt="icon" className="h-3 w-3" /> */}
            </Link>

            <Link
              to="/categories"
              className="flex items-center gap-2 border-b-2 border-[#FFB724] pb-1 hover:text-blue-600 transition"
            >
              Categories
              {/* <img src="/icons/Vector.svg" alt="icon" className="h-3 w-3" /> */}
            </Link>

            <Link
              to="/tour-packages"
              className="flex items-center gap-2 border-b-2 border-[#FFB724] pb-1 hover:text-blue-600 transition"
            >
              Tour Packages
              {/* <img src="/icons/Vector.svg" alt="icon" className="h-3 w-3" /> */}
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="w-full bg-gradient-to-l from-[#00357A] to-[#0061E0] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              onClick={() => setOpenConnect(true)}
            >
              Contact Us
            </button>
            <div
              className="bg-gradient-to-t from-[#F76200] to-[#FFB724] p-3 rounded-full text-white cursor-pointer"
              onClick={() => setOpenLogin(true)}
            >
              <FaUser />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-4">
          <Link to="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link to="/categories" className="block hover:text-blue-600">
            Categories
          </Link>
          <Link to="/tour-packages" className="block hover:text-blue-600">
            Tour Packages
          </Link>

          <button className="w-full bg-gradient-to-l from-[#00357A] to-[#0061E0] text-white py-2 rounded-full hover:opacity-90 transition">
            Contact Us
          </button>

          <div className="flex justify-center">
            <div
              className="bg-gradient-to-t from-[#F76200] to-[#FFB724] p-2 rounded-full text-white cursor-pointer"
              onClick={() => setOpenLogin(true)}
            >
              <FaUser />
            </div>
          </div>
        </div>
      )}

      {openLogin && (
        <SignIn onClose={() => setOpenLogin(false)} />
      )}

      {openConnect && (
        <ConnectWithUs onClose={() => setOpenConnect(false)} />
      )}
    </nav>
  );
};

export default Navbar;
