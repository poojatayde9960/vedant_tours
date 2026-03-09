import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Plane,
  Globe,
  ShieldCheck,
  Check,
  Search,
  MapPin,
  Star,
  Sparkles,
  Home,
  Key,
  Lock,
  Users,
  CalendarClock,
  ChevronRight,
  Send,
} from "lucide-react";
import img4 from "/public/img/beach.jpg";
import img3 from "/public/img/suitcase-img.png";
import palmTree from "/public/img/tree-1.png";
import img7 from "/public/img/img7.png";
import img5 from "/public/img/img5.jpg";
import img6 from "/public/img/img6.jpg";
import balloon from "/public/img/balloon.svg";
import TravelBanner from "../components/TravelBanner";

// Image paths from brain folder
const heroImg = { img4 };
const suitcaseImg = { img3 };
const mountainBg = { img7 };
const balloonImg = { balloon };
const rightsideImg = { img5 };
const palmT = { palmTree };
const leftsideImg = { img6 };

const sideImg =
  "file:///C:/Users/pooja/.gemini/antigravity/brain/8ef3b158-c12b-435f-a619-fce941415391/about_mountains_eiffel_1772436205696.png";
const womanImg =
  "file:///C:/Users/pooja/.gemini/antigravity/brain/8ef3b158-c12b-435f-a619-fce941415391/about_woman_binoculars_1772436222377.png";
const illusImg =
  "file:///C:/Users/pooja/.gemini/antigravity/brain/8ef3b158-c12b-435f-a619-fce941415391/travel_illustrations_pack_1772436168600.png";
// const mountainBg = "file:///C:/Users/pooja/.gemini/antigravity/brain/8ef3b158-c12b-435f-a619-fce941415391/mountain_illustration_bg_1772441929627.png"

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden  font-['Poppins']">
      {/* Section 1: Hero */}
      <section className="px-4 lg:px-6 py-4 lg:py-4">
        <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[680px] overflow-visible">
          <div className="w-full h-full rounded-[20px] lg:rounded-[20px] overflow-hidden relative">
            <img
              src={heroImg.img4}
              className="w-full h-full object-cover "
              alt="Hero"
            />
            <div className="absolute inset-0 bg-[#0061E0]/20 flex flex-col justify-end p-6 sm:p-8 lg:p-20">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10">
                <h1 className="text-white text-[28px] sm:text-[40px] lg:text-[72px] font-['Goodly'] leading-[1.1] lg:leading-[1.05] max-w-3xl drop-shadow-lg">
                  Crafting Unforgettable Journeys Across The Globe
                </h1>
                <div className="max-w-xs sm:max-w-md mb-8 lg:mr-24 ">
                  <p className="text-white text-xl ">
                    We combine expertise, personalized <br /> service, and
                    global partnerships to deliver <br /> unforgettable travel
                    experiences.
                  </p>
                  <button
                    onClick={() => navigate("/tour-packages")}
                    className="bg-white text-[#0644A0]  font-['Poppins'] font-medium px-6 mt-8 lg:px-12 py-3 lg:py-4 rounded-full  text-[12px] lg:text-[18px] hover:scale-105 transition-transform shadow-xl"
                  >
                    Explore Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Suitcase Image overlap with precise positioning */}
          <div
            className="hidden lg:block absolute z-20 pointer-events-none"
            style={{
              width: "232px",
              height: "392px",
              top: "550px",
              right: "-50px",
              opacity: 1,
            }}
          >
            <img
              src={suitcaseImg.img3}
              alt="Suitcase"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Mobile fallback for suitcase */}
          <div className="lg:hidden absolute -bottom-12 -right-2 w-[120px] sm:w-[180px] h-auto z-20 pointer-events-none">
            <img
              src={suitcaseImg.img3}
              alt="Suitcase"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Section 2: More Than Travel */}
      <section className="px-6 lg:px-0 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative overflow-visible">

        {/* Background mountain */}


        {/* LEFT SIDE IMAGE */}
        <div className="relative z-10   flex justify-center lg:justify-start w-full lg:w-full">

          {/* Balloon */}
          <div
            className="absolute -top-10 lg:-top-16 -left-4 lg:-left-10 w-20 h-20 lg:w-32 lg:h-32 pointer-events-none animate-bounce z-20"
            style={{ animationDuration: "4s" }}
          >
            <img
              src={balloonImg.balloon}
              className="w-full h-full object-contain"
              alt="Balloon"
            />
          </div>

          {/* Main Image */}
          <div className="relative   ">

            <img
              src="/img/group5.png"
              className="w-full h-auto"
              alt="Travel Collage"
            />

            {/* Happy Customers Badge */}
            <div className="flex flex-col absolute -bottom-12 left-1/2 -translate-x-1/2 lg:left-[70%] items-center bg-white/40 backdrop-blur-md p-4 rounded-3xl shadow-xl lg:bg-transparent lg:p-0 lg:shadow-none">

              <div className="flex -space-x-3 gap-1 lg:gap-3 mb-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i + 15}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-xl lg:text-3xl leading-none">
                  1.8 k
                </p>
                <p className="text-[12px] lg:text-[18px] text-[#0644A0] font-semibold">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-6 w-full lg:w-full text-center lg:text-left">

          {/* About title */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">

            <div className="flex items-center gap-2">
              <div className="text-[#0644A0] rotate-[988deg] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                  />
                </svg>
              </div>

              <div className="border-t border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>
            </div>

            <span
              className="font-medium font-goodly text-[14px] lg:text-[17px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#FFB724 0%,#F76200 100%)",
              }}
            >
              About Us
            </span>

            <div className="flex items-center gap-2">
              <div className="border-t border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>

              <div className="text-[#0644A0] rotate-[90deg] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[44px] lg:text-[36px] font-medium font-['Goodly'] leading-[1.1] text-gray-900">
            More Than <span className="text-[#FC8605]">Travel</span>, We <br className="hidden sm:block" />
            Create <span className="text-[#0061E0]">Memories</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#00000094] text-[14px] lg:text-[17px] leading-relaxed max-w-xl font-medium opacity-80 mx-auto lg:mx-0">
            At vedant tours, we believe travel is more than just visiting new
            places — it's about creating memories that last a lifetime. With a
            passion for exploration and a commitment to excellence, we design
            seamless travel experiences tailored to every traveler's dreams.
          </p>

          {/* Palm Tree */}
          <div className="relative pt-6 lg:pt-10 flex justify-center lg:justify-end">
            <div className="w-24 sm:w-32 lg:w-40 h-auto opacity-90 hover:scale-110 transition-transform duration-500 lg:mr-12">
              <img
                src={palmT.palmTree}
                className="w-full h-full object-contain"
                alt="Palm Tree"
              />
            </div>
          </div>

        </div>

      </section>

      {/* Section 3: Seamless Experience (Blue BG) */}
      <div className="">
        <section className="bg-[#C2EBFF7A] md:px-20 md:py-10 p-4 grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="md:py-0 py-3">
            <div className="md:mb-0 mb-3">
              <h2 className="md:text-[36px] font-['Goodly'] font-medium leading-[1.2] text-gray-900 text-center lg:text-left">
                Everything You <span className="text-[#F76200]">Need for</span>{" "}
                a <br className="hidden lg:block" />
                Seamless <span className="text-[#0061E0]">Travel</span>{" "}
                Experience
              </h2>
              <p className="text-[#00000094] md:mt-4 text-[13px] sm:text-[18px] lg:text-[17px] font-medium  w-full max-w-full text-center lg:text-left mx-auto lg:mx-0 font-poppins leading-[24px] sm:leading-[28px] lg:leading-[24px]">
                From planning to booking and beyond, we provide complete{" "}
                <br className="sm:hidden" />
                travel solutions designed for comfort, convenience, and{" "}
                <br className="sm:hidden lg:block" />
                confidence.
              </p>
            </div>

            <div className="md:flex   items-center gap-4 md:mt-4">
              {/* Tour Packages Count Card */}
              <div className="relative md:mb-0 mb-3 flex justify-center w-full  gap-2 sm:w-[200px] md:w-[260px] lg:w-[220px] lg:h-[280px]  ">
                <div className="bg-[#0B4393] justify-center gap-6 flex md:grid h-[60px] md:py-0  sm:h-[285px] lg:h-[270px] rounded-[60px] items-center md:text-center text-white  shadow-2xl w-80 md:max-w-full">
                  <p className="text-[36px]  sm:text-[48px] lg:text-[48px] text-[#FFB724] leading-none mb-0 sm:mb-0 font-goodly">
                    250 +
                  </p>
                  <p className="text-[18px] md:-mt-12 sm:text-[20px] lg:text-[20px] font-medium leading-tight font-goodly">
                    Tour <br /> Packages
                  </p>
                </div>

                {/* OVERLAP IMAGE */}
                <div className="absolute md:block hidden md:left-1/2 left-80 -translate-x-1/2 bottom-6 sm:-bottom-24 lg:-bottom-8 w-[120px] sm:w-[160px] lg:w-[160px] z-20">
                  <img
                    src="/public/img/img-5.png"
                    className=" h-auto object-contain filter drop-shadow-2xl"
                    alt="Travel Illustration"
                  />
                </div>
              </div>

              {/* Features */}
              <div className=" w-full">
                {[
                  {
                    title: "Wide Range of Destinations",
                    desc: "Explore domestic and international destinations carefully curated for every type of traveler.",
                    icon: "🌍",
                  },
                  {
                    title: "Secure & Flexible Payments",
                    desc: "Enjoy multiple payment options with complete transparency and safe transactions.",
                    icon: "💳",
                  },
                  {
                    title: "Customized Travel Plans",
                    desc: "Personalized itineraries tailored to your preferences, budget, and schedule.",
                    icon: "🎯",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex   w-full space-y-4 sm:flex-row sm:items-center gap-3 sm:gap-4 group"
                  >
                    {/* Icon Box */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#FFB724] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform shrink-0 text-4xl sm:text-5xl">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="space-y-2 font-['Poppins'] text-[#000000]">
                      <h4 className="font-medium md:text-[15px]">{item.title}</h4>
                      <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[14px] leading-relaxed max-w-full font-medium opacity-70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:block hidden flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="/public/img/img8.png"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain scale-100 sm:scale-105 lg:scale-125"
              alt="Woman Explorer"
            />
          </div>
        </section>
      </div>

      {/* Section 4: CTA Adventure Banner - Refactored to match Screenshot 1 */}

      <div className="mt-10">
        <TravelBanner />
      </div>

    </div>
  );
};

export default About;

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import img4 from '/public/img/beach.jpg'
// import img3 from '/public/img/suitcase-img.png'
// import palmTree from '/public/img/tree-1.png'
// import balloon from '/public/img/balloon.png'

// const About = () => {
//   const navigate = useNavigate()
//   return (
//     <div className="overflow-hidden font-['Poppins']">

//       {/* Section 1: Hero */}
//       <section className="px-4 sm:px-6 lg:px-0 py-4 lg:py-10">
//         <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[800px] overflow-visible rounded-xl lg:rounded-[20px]">
//           <img src={img4} alt="Hero" className="w-full h-full object-cover rounded-xl lg:rounded-[20px]" />
//           <div className="absolute inset-0 bg-[#0061E0]/20 flex flex-col justify-end p-4 sm:p-6 lg:p-12">
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-8">
//               <h1 className="text-white text-[22px] sm:text-[36px] lg:text-[72px] font-['Goodly'] leading-tight lg:leading-[1.05] max-w-full sm:max-w-3xl drop-shadow-lg">
//                 Crafting Unforgettable Journeys Across The Globe
//               </h1>
//               <div className="max-w-full sm:max-w-md mb-6 lg:mb-0">
//                 <p className="text-white text-[14px] sm:text-[18px] lg:text-xl">
//                   We combine expertise, personalized service, and global partnerships to deliver unforgettable travel experiences.
//                 </p>
//                 <button
//                   onClick={() => navigate('/tour-packages')}
//                   className="bg-white text-[#0061E0] font-medium px-4 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full text-[12px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6 hover:scale-105 transition-transform shadow-xl">
//                   Explore Packages
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Suitcase Image */}
//           <div className="absolute right-0 bottom-0 lg:bottom-0 lg:right-[-70px] w-[120px] sm:w-[180px] lg:w-[322px] h-auto z-20 pointer-events-none">
//             <img src={img3} alt="Suitcase" className="w-full h-full object-contain" />
//           </div>
//         </div>
//       </section>

//       {/* Section 2: More Than Travel */}
//       <section className="px-4 sm:px-6 lg:px-0 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative">
//         {/* Left Content */}
//         <div className="relative z-10 flex flex-col items-center lg:items-start order-2 lg:order-1">
//           <div className="relative w-full mb-10 sm:mb-16 lg:mb-0">
//             <img src="/public/img/group5.png" className="w-full h-auto object-contain " alt="Travel Collage" />
//             {/* Happy Customers Badge */}
//             <div className="absolute bottom-[-40px] sm:bottom-[-70px] lg:-bottom-[4%] left-[50%] lg:left-[69%] -translate-x-1/2 items-center bg-white/40 backdrop-blur-md p-3 sm:p-4 rounded-3xl lg:bg-transparent lg:p-0 shadow-xl lg:shadow-none flex flex-col">
//               <div className="flex -space-x-2 gap-1 lg:gap-2 mb-2">
//                 {[1, 2, 3].map(i => (
//                   <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
//                     <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
//                   </div>
//                 ))}
//               </div>
//               <div className="text-center">
//                 <p className="font-bold text-gray-900 text-lg sm:text-xl lg:text-3xl">1.8 k</p>
//                 <p className="text-[10px] sm:text-[14px] lg:text-[18px] text-[#0644A0] font-semibold">Happy Customers</p>
//               </div>
//             </div>
//           </div>
//           {/* Hot Air Balloon */}
//           <div className="absolute top-[-20px] sm:-top-12 left-[-10px] sm:-left-8 w-16 sm:w-28 lg:w-32 pointer-events-none animate-bounce duration-[4s]">
//             <img src={balloon} alt="Balloon" className="w-full h-full object-contain" />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-4 lg:space-y-6 relative z-10 order-1 lg:order-2 text-center lg:text-left">
//           <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium font-['Goodly'] leading-[1.1]">
//             More Than <span className="text-[#FC8605]">Travel</span>, We <br className="hidden sm:block" /> Create <span className="text-[#0061E0]">Memories</span>
//           </h2>
//           <p className="text-[#00000094] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
//             At Vedant Tours, we believe travel is more than just visiting new places — it's about creating memories that last a lifetime. With a passion for exploration and a commitment to excellence, we design seamless travel experiences tailored to every traveler's dreams.
//           </p>
//           <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-6">
//             <img src={palmTree} className="w-24 sm:w-32 lg:w-40 h-auto opacity-90 hover:scale-105 transition-transform duration-500" alt="Palm Tree" />
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Seamless Experience */}
//       <section className="bg-[#C2EBFF7A] px-4 sm:px-6 lg:px-16 py-12 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
//         <div className="space-y-6 lg:space-y-8">
//           <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-['Goodly'] font-medium text-gray-900 text-center lg:text-left leading-tight">
//             Everything You <span className="text-[#F76200]">Need for</span> a <br className="hidden lg:block" /> Seamless <span className="text-[#0061E0]">Travel</span> Experience
//           </h2>
//           <p className="text-[#00000094] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-xl font-medium opacity-80 text-center lg:text-left mx-auto lg:mx-0">
//             From planning to booking and beyond, we provide complete travel solutions designed for comfort, convenience, and confidence.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-6 lg:mt-0">
//           {/* Tour Packages Card */}
//           <div className="relative w-full sm:w-[260px] lg:w-[275px]">
//             <div className="bg-[#0B4393] h-[260px] sm:h-[300px] lg:h-[325px] rounded-[50px] text-center text-white shadow-2xl pt-8 pb-12">
//               <p className="text-[48px] sm:text-[52px] text-[#FFB724] leading-none mb-4 font-goodly">250 +</p>
//               <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-medium leading-tight">Tour <br /> Packages</p>
//             </div>
//             <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 sm:-bottom-32 lg:-bottom-48 w-[160px] sm:w-[220px] z-20">
//               <img src="/public/img/img9.png" className="w-full h-auto object-contain filter drop-shadow-2xl" alt="Illustration" />
//             </div>
//           </div>

//           {/* Features */}
//           <div className="flex-1 space-y-6 sm:space-y-4 w-full">
//             {[
//               { title: "Wide Range of Destinations", desc: "Explore domestic and international destinations carefully curated for every type of traveler.", icon: "🌍" },
//               { title: "Secure & Flexible Payments", desc: "Enjoy multiple payment options with complete transparency and safe transactions.", icon: "💳" },
//               { title: "Customized Travel Plans", desc: "Personalized itineraries tailored to your preferences, budget, and schedule.", icon: "🎯" }
//             ].map((item, i) => (
//               <div key={i} className="flex gap-4 sm:gap-6 group items-start">
//                 <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#FFB724] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform text-3xl sm:text-4xl">{item.icon}</div>
//                 <div className="space-y-1 sm:space-y-2">
//                   <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium">{item.title}</h4>
//                   <p className="text-[14px] sm:text-[16px] lg:text-[17px] font-medium opacity-70 leading-relaxed max-w-[400px]">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 4: CTA Adventure Banner */}
//       <section className="px-4 sm:px-6 lg:px-12 mb-20 lg:mb-32">
//         <div className="relative mx-2 lg:mx-8">
//           <div className="bg-[#FFB724] min-h-[300px] sm:min-h-[360px] lg:h-[490px] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-12">
//             <h2 className="text-white text-[24px] sm:text-[36px] lg:text-[48px] font-goodly leading-tight">Ready To Start Your Next Adventure?</h2>
//             <p className="text-white text-[12px] sm:text-[14px] lg:text-[18px] font-medium opacity-95 mt-2 sm:mt-4 leading-relaxed">
//               Let us plan a seamless, stress-free journey tailored perfectly to your dreams and budget.
//             </p>
//             <button onClick={() => navigate('/tour-packages')} className="bg-white text-[#0061E0] px-6 sm:px-10 lg:px-14 py-2 sm:py-3 lg:py-5 rounded-xl lg:rounded-full font-bold text-[12px] sm:text-[14px] lg:text-base mt-4 sm:mt-6 hover:scale-105 transition-transform shadow-xl">
//               Explore Packages
//             </button>
//           </div>

//           {/* Statue */}
//           <div className="absolute -left-4 sm:-left-4 lg:left-[6%] -bottom-10 sm:-bottom-8 lg:-bottom-48 w-[120px] sm:w-[180px] lg:w-[199px] z-20 pointer-events-none">
//             <img src="/public/img/statue.png" className="w-full h-auto object-contain filter drop-shadow-2xl" alt="Statue of Liberty" />
//           </div>

//           {/* Balloon */}
//           <div className="absolute right-4 lg:right-20 -top-8 sm:-top-10 lg:-top-16 w-16 sm:w-28 lg:w-36 z-20 pointer-events-none animate-bounce duration-[3000ms]">
//             <img src="/public/img/balloon.png" className="w-full h-auto object-contain" alt="Hot Air Balloon" />
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default About+






// import React from "react";

// const AboutSection = () => {
//   return (
//     <section className="px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-visible">

//       {/* Background mountain */}
//       <div
//         className="hidden lg:block absolute pointer-events-none z-0"
//         style={{
//           width: "718px",
//           height: "784px",
//           top: "30%",
//           left: "-90px",
//           transform: "translateY(-50%) scale(1.4)",
//           opacity: 0.2,
//         }}
//       >
//         <img
//           src="/img/group15.png"
//           className="w-full h-full object-contain"
//           alt="Mountain BG"
//         />
//       </div>

//       {/* LEFT SIDE IMAGE */}
//       <div className="relative z-10 flex justify-center lg:justify-start w-full lg:w-1/2">

//         {/* Balloon */}
//         <div
//           className="absolute -top-10 lg:-top-16 -left-4 lg:-left-10 w-20 h-20 lg:w-32 lg:h-32 pointer-events-none animate-bounce z-20"
//           style={{ animationDuration: "4s" }}
//         >
//           <img
//             src={balloonImg.balloon}
//             className="w-full h-full object-contain"
//             alt="Balloon"
//           />
//         </div>

//         {/* Main Image */}
//         <div className="relative w-full max-w-lg">

//           <img
//             src="/img/group5.png"
//             className="w-full h-auto object-contain"
//             alt="Travel Collage"
//           />

//           {/* Happy Customers Badge */}
//           <div className="flex flex-col absolute -bottom-12 left-1/2 -translate-x-1/2 lg:left-[70%] items-center bg-white/40 backdrop-blur-md p-4 rounded-3xl shadow-xl lg:bg-transparent lg:p-0 lg:shadow-none">

//             <div className="flex -space-x-3 gap-1 lg:gap-3 mb-2">
//               {[1, 2, 3].map((i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"
//                 >
//                   <img
//                     src={`https://i.pravatar.cc/150?u=${i + 15}`}
//                     alt="user"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="text-center">
//               <p className="font-bold text-gray-900 text-xl lg:text-3xl leading-none">
//                 1.8 k
//               </p>
//               <p className="text-[12px] lg:text-[18px] text-[#0644A0] font-semibold">
//                 Happy Customers
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* RIGHT SIDE CONTENT */}
//       <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">

//         {/* About title */}
//         <div className="flex items-center gap-3 justify-center lg:justify-start">

//           <div className="flex items-center gap-2">
//             <div className="text-[#0644A0] rotate-[988deg] flex items-center justify-center">
//               <svg width="14" height="14" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
//                 />
//               </svg>
//             </div>

//             <div className="border-t border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>
//           </div>

//           <span
//             className="font-medium text-[14px] lg:text-[17px] bg-clip-text text-transparent"
//             style={{
//               backgroundImage:
//                 "linear-gradient(90deg,#FFB724 0%,#F76200 100%)",
//             }}
//           >
//             About Us
//           </span>

//           <div className="flex items-center gap-2">
//             <div className="border-t border-dashed border-[#F76200] w-8 sm:w-12 lg:w-20 opacity-50"></div>

//             <div className="text-[#0644A0] rotate-[90deg] flex items-center justify-center">
//               <svg width="14" height="14" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
//                 />
//               </svg>
//             </div>
//           </div>

//         </div>

//         {/* Heading */}
//         <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-medium font-['Goodly'] leading-[1.1] text-gray-900">
//           More Than <span className="text-[#FC8605]">Travel</span>, We <br className="hidden sm:block" />
//           Create <span className="text-[#0061E0]">Memories</span>
//         </h2>

//         {/* Paragraph */}
//         <p className="text-[#00000094] text-[14px] lg:text-[18px] leading-relaxed max-w-xl font-medium opacity-80 mx-auto lg:mx-0">
//           At vedant tours, we believe travel is more than just visiting new
//           places — it's about creating memories that last a lifetime. With a
//           passion for exploration and a commitment to excellence, we design
//           seamless travel experiences tailored to every traveler's dreams.
//         </p>

//         {/* Palm Tree */}
//         <div className="relative pt-6 lg:pt-10 flex justify-center lg:justify-end">
//           <div className="w-24 sm:w-32 lg:w-40 h-auto opacity-90 hover:scale-110 transition-transform duration-500 lg:mr-12">
//             <img
//               src={palmT.palmTree}
//               className="w-full h-full object-contain"
//               alt="Palm Tree"
//             />
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutSection;