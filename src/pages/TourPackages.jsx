import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  Home,
  Settings,
  Plane,
  Ship,
  Bus,
  Car,
  Clock,
  Share2,
  Search,
  ChevronDown,
} from "lucide-react";
const TourPackages = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const tourCards = [
    {
      id: 1,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/beach.jpg",
    },
    {
      id: 2,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/Rectangle 71.png",
    },
    {
      id: 3,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/Rectangle 72.png",
    },
    {
      id: 4,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/Rectangle 35.png",
    },
    {
      id: 5,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/Rectangle 37.png",
    },
    {
      id: 6,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/Rectangle 86.png",
    },
    {
      id: 7,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/img1.jpg",
    },
    {
      id: 8,
      title: "Majestic Europe Tour",
      locations: "Europe | Germany | Switzerland | Austria",
      duration: "16 Days | 15 Nights",
      price: "€ 23,000",
      image: "/img/img2.jpg",
    },
  ];

  return (
    <div className="font-poppins ">
      {/* --- FILTER & LISTING SECTION --- */}
      <section className=" mx-auto px-6 py-16 lg:pr-16 lg:pl-16 lg:py-20">
        {/* Filters Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-12 text-center lg:text-left">
          <div className="space-y-4 w-full lg:w-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 text-base lg:text-[17px] font-medium">
              <Home size={18} className="text-[#0061E0]" />
              <span>Home</span>
              <ChevronRight size={14} />
              <span className="text-gray-900">Tour Packages</span>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 mb-2 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="text-[#0644A0] transform rotate-[988deg] flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    className="lg:w-[18px] lg:h-[18px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                    />
                  </svg>
                </div>
                <div className="border-t-[1px] border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>
              </div>
              <span
                className="font-['Goodly'] font-medium text-[14px] lg:text-[17px] leading-[100%] tracking-normal whitespace-nowrap bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFB724 0%, #F76200 100%)",
                }}
              >
                Popular Destinations
              </span>
              <div className="flex items-center gap-2">
                <div className="border-t-[1px] border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>
                <div className="text-[#0644A0] flex rotate-[90deg] items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    className="lg:w-[18px] lg:h-[18px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-xl sm:text-[36px] lg:text-[36px] font-medium font-goodly text-gray-900 leading-tight">
              Explore The <span className="text-[#FC8605]">World's</span> Most
              <br /> Loved <span className="text-[#0061E0]">Places</span>
            </h2>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-nowrap items-center justify-center font-['Poppins'] lg:justify-end gap-4 p-2 w-full lg:w-auto overflow-x-auto">
            {["Popular", "Luxurious", "Adventures"].map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat)}
                className="relative font-medium text-[15px] font-poppins md:text-[17px] transition-all pb-2 whitespace-nowrap"
              >
                <span
                  className={`${activeTab === cat
                    ? "text-[#0061E0]"
                    : "text-gray-400 font-poppins hover:text-gray-600"
                    } transition-colors`}
                >
                  {cat}
                </span>

                {/* Orange Underline */}
                {activeTab === cat && (
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#F76200] rounded-full transition-all"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Toolbar - Exactly as per Screenshots */}
        {/* <div className="bg-[#C2EBFF7A] rounded-[40px] lg:rounded-full p-4 lg:p-4 mb-20 shadow-[0_20px_60px_-15px_rgba(0,97,224,0.1)] w-full mx-auto flex flex-col lg:flex-row items-stretch lg:items-center relative gap-4 lg:gap-0"> */}
        {/* Inner White Capsule for Inputs */}

        <div className="md:ml-0 md:mt-8 mb-8 p-4 bg-[#C2EBFF7A] flex flex-col md:flex-row md:rounded-full rounded-xl border border-[#FFFFFF] md:w-full font-poppins gap-3">

          <div className="bg-white md:rounded-full rounded-xl flex flex-col md:flex-row items-center md:gap-6 w-full p-3">

            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-2 w-full">
              <MapPin size={18} className="text-blue-600" />
              <select className="outline-none w-full text-[#0644A0]">
                <option>Location</option>
              </select>
            </div>

            <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

            {/* Price */}
            <div className="flex items-center gap-2 px-4 py-2 w-full">
              <Calendar size={18} className="text-[#0644A0]" />
              <input
                type="text"
                placeholder="Price"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="outline-none w-full text-[#0644A0] placeholder:text-[#0644A0]"
              />
            </div>

            {/* Tour Type */}
            <div className="flex items-center gap-2 px-4 py-2 w-full">
              <Calendar size={18} className="text-[#0644A0]" />
              <input
                type="text"
                placeholder="Tour Type"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="outline-none w-full text-[#0644A0] placeholder:text-[#0644A0]"
              />
            </div>

            <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

            {/* Duration */}
            <div className="flex items-center gap-2 px-4 py-2 w-full">
              <Users size={18} className="text-blue-600" />
              <select className="outline-none w-full text-[#0644A0]">
                <option>Duration</option>
              </select>
            </div>

          </div>

          {/* Search Button */}
          <button className="bg-gradient-to-l from-[#FFB724] to-[#F76200] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition whitespace-nowrap w-full md:w-auto">
            <Search size={18} />
            <span>Search Tour</span>
          </button>

        </div>

        {/* </div> */}

        {/* Tour Grid */}
        <div className="grid  md:mt-6 grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-8">
          {tourCards.map((card) => (
            <div
              key={card.id}
              className="group relative border border-[#E0E0E0] rounded-xl duration-500"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
                <img
                  src={card.image}
                  className="w-full h-full object-cover transition-transform rounded-xl duration-700"
                  alt={card.title}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Bottom Icons Over Image */}
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-10 flex items-center gap-2 lg:gap-3">
                  {[
                    { type: "icon", name: "raphael:car" },
                    {
                      type: "icon",
                      name: "material-symbols:award-meal-rounded",
                    },
                    { type: "icon", name: "solar:camera-bold" },
                    { type: "icon", name: "fa7-solid:hotel" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all bg-white border border-white/30"
                    >
                      <Icon
                        icon={item.name}
                        className="w-5 h-5 lg:w-6 lg:h-6 text-[#0061E0] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 lg:p-3 space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                  <div className="space-y-1">
                    {/* Title */}
                    <h3 className="text-[19px] text-[#000000] font-medium font-['Poppins']">
                      {card.title}
                    </h3>

                    {/* Location */}
                    <p className="text-[15px] text-[#00000094] font-medium font-['Poppins']">
                      {card.locations}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 px-0 sm:px-4 py-0 sm:py-2 text-[#000000] font-['Poppins'] font-medium text-[16px]">
                    <img
                      src="/img/img-5.png"
                      alt="duration"
                      className="w-6 h-6 object-contain"
                    />

                    <span>{card.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[29px] font-medium font-['Poppins'] text-[#0644A0]">
                      {card.price}
                      <span className="text-[12px] text-[#00000094] font-['Poppins']">
                        {" "}
                        / Person
                      </span>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-1 gap-2 sm:gap-4">
                    <button className="hidden sm:block flex-1 sm:flex-none font-['Poppins'] bg-[#FFB724] text-white px-6 py-3 rounded-full text-[16px] font-semibold hover:shadow-xl hover:translate-y-[-2px] transition-all">
                      View Details
                    </button>
                    <button className="flex-1 sm:flex-none bg-[#0047B3] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-['Poppins'] text-[13px] md:text-[16px] font-medium whitespace-nowrap hover:shadow-xl hover:translate-y-[-2px] transition-all">
                      Enquire Now
                    </button>
                  </div>

                  {/* Download Icon */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#FC8605] rounded-full flex items-center justify-center cursor-pointer transition-all group shrink-0">
                    <Icon
                      icon="solar:download-broken"
                      className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 mb-24 lg:mb-40">
        {/* ================= MOBILE VERSION ================= */}
        <div
          className="relative lg:hidden h-[520px] 
  rounded-[30px] 
  overflow-hidden 
  flex flex-col 
  items-center justify-center 
  text-center px-6
  bg-cover bg-center"
          style={{ backgroundImage: "url('/img/group2.png')" }}
        >
          {/* <img
                        src="/img/group2.png"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Mobile Background"
                    /> */}

          {/* Overlay (optional dark effect for readability) */}
          {/* <div className="absolute "></div> */}

          {/* Mobile Content */}
          <div className="relative z-10 space-y-6">
            <h2
              className="text-white text-[34px] 
    font-medium 
    font-['Goodly'] 
    leading-tight 
    -mt-20"
            >
              Customised <span className="text-[#FFB724]">Your</span> <br />{" "}
              Trip
            </h2>
            <button
              className=" 
    px-6 lg:px-6 
    py-2.5 lg:py-3 
    rounded-full 
    font-semibold 
    text-sm  bg-[#FFFFFF]
    flex items-center gap-2 
    ml-8 text-[#0644A0]
    hover:shadow-xl hover:scale-105 
    transition-all shadow-md 
    font-['Poppins']"
            >
              Get Tour Details
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="hidden lg:flex bg-[#0061E0] rounded-[30px] 
h-[420px] xl:h-[520px] 
relative overflow-visible items-center justify-start 
px-12 xl:p-32 text-left shadow-2xl"
        >
          {/* Desktop Content */}
          <div className="relative space-y-6 xl:left-32 xl:-mt-20">
            <h2 className="text-white text-[30px] xl:text-[36px] font-medium font-['Goodly'] leading-tight drop-shadow-xl">
              Customised <span className="text-[#FFB724]">Your</span> <br />{" "}
              Trip
            </h2>

            <button className="bg-white text-[#0061E0] px-6 py-3 rounded-full text-[16px] xl:text-[17px] flex items-center gap-4 shadow-xl transition-all">
              Get Tour Details <ChevronRight size={22} />
            </button>
          </div>

          {/* Balloon */}
          <div className="absolute top-0 left-[6%] w-24 xl:w-36 z-20">
            <img
              src="/img/box-balloon.png"
              className="w-full"
              alt="Parachute"
            />
          </div>

          <div className="absolute top-10 left-[45%] w-14 xl:w-20 z-20">
            <img src="/img/para-balloon.png" className="w-full" alt="Balloon" />
          </div>

          <div className="absolute top-72 -left-[4%] w-20 lg:w-40 xl:w-64 z-20">
            <img src="/img/helicopter-2.png" className="w-full" alt="Helicopter" />
          </div>

          {/* Camera */}
          <div className="absolute bottom-6 xl:bottom-12 left-[22%] xl:left-[26%] w-28 xl:w-44 z-20 -rotate-10">
            <img src="/img/camera.png" className="w-full" alt="Camera" />
          </div>

          {/* Plane */}
          <div className="absolute  -bottom-6 xl:-bottom-36 right-0 w-[75%] xl:w-[61%] z-20">
            <img src="/img/Group 69.png" className="w-full" alt="Plane" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
