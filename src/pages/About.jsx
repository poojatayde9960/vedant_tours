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
const img4 = "/img/beach.jpg";
const img3 = "/img/suitcase-img.png";
const palmTree = "/img/tree-1.png";
const img7 = "/img/img7.png";
const img5 = "/img/img5.jpg";
const img6 = "/img/img6.jpg";
const balloon = "/img/balloon.svg";
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
                  <p className="text-white text-lg ">
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
      <section className="px-6 lg:px-0 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative overflow-visible">

        {/* Background mountain */}


        {/* LEFT SIDE IMAGE */}
        <div className="relative z-10   flex justify-center lg:justify-start w-full lg:w-full">

          {/* Balloon */}
          <div
            className="absolute -top-10 lg:-top-16 -left-4 lg:-left-5 w-20 h-20 lg:w-32 lg:h-32 pointer-events-none animate-bounce z-20"
            style={{ animationDuration: "4s" }}
          >
            <img
              src={balloonImg.balloon}
              className="w-full h-full object-contain"
              alt="Balloon"
            />
          </div>

          {/* Main Image */}
          <div className="relative mr-4 -ml-7 sm:ml-0">

            <img
              src="/img/group5.png"
              className="w-full h-auto"
              alt="Travel Collage"
            />

            {/* Happy Customers Badge */}
            <div className="hidden lg:flex flex-col absolute -bottom-12 left-1/2 -translate-x-1/2 lg:left-[70%] items-center bg-white/40 backdrop-blur-md p-4 rounded-3xl shadow-xl lg:bg-transparent lg:p-0 lg:shadow-none">

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
          <h2 className="text-xl sm:text-[44px] lg:text-[36px] font-medium font-['Goodly'] text-gray-900">
            More Than <span className="text-[#FC8605]">Travel</span>, We
            <br className="block sm:hidden" />
            Create <span className="text-[#0061E0]">Memories</span>
            <br className="hidden sm:block" />
          </h2>

          {/* Paragraph */}
          <p className="text-[#00000094] text-[13px] lg:text-[17px] leading-relaxed max-w-xl font-medium  mx-auto lg:mx-0">
            At Vedant Tours, we believe travel is more than just visiting new
            places — it’s about creating memories that last a lifetime. With a
            passion for exploration and a commitment to excellence, we design
            seamless travel experiences tailored to every traveler’s dreams.
          </p>

          {/* Palm Tree */}
          {/* <div className="relative pt-6 lg:pt-10 flex justify-center lg:justify-end">
            <div className="w-24 sm:w-32 lg:w-40 h-auto opacity-90 hover:scale-110 transition-transform duration-500 lg:mr-12">
              <img
                src={palmT.palmTree}
                className="w-full h-full object-contain"
                alt="Palm Tree"
              />
            </div>
          </div> */}

        </div>

      </section>

      {/* Section 3: Seamless Experience (Blue BG) */}
      <div className="">
        <section className="bg-[#C2EBFF7A] md:px-20 md:py-10 p-4 grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="md:py-0 py-3">
            <div className="md:mb-0 mb-3">
              <h2 className="md:text-[36px] text-xl font-['Goodly'] font-medium leading-[1.6] text-gray-900 text-center lg:text-left">
                Everything You <span className="text-[#F76200]">Need for</span>{" "}
                a <br className="hidden lg:block" />
                Seamless <span className="text-[#0061E0]">Travel</span>{" "}
                Experience
              </h2>
              <p className="text-[#00000094] md:mt-4 mt-6 text-[13px] sm:text-[18px] lg:text-[17px] font-medium w-full max-w-full text-center lg:text-left mx-auto lg:mx-0 font-poppins leading-[24px] sm:leading-[28px] lg:leading-[24px]">
                From planning to booking and beyond,
                <br className="block sm:hidden" />
                we provide complete travel solutions
                <br className="block sm:hidden" />
                designed for comfort, convenience, and confidence.

                <br className="hidden sm:block" />
                travel solutions designed for comfort, convenience, and
                <br className="hidden sm:block lg:block" />
                confidence.
              </p>
            </div>

            <div className="md:flex   items-center gap-4 md:mt-4">
              {/* Tour Packages Count Card */}
              <div className="hidden md:flex relative md:mb-0 mb-3 justify-center w-full gap-2 sm:w-[200px] md:w-[260px] lg:w-[220px] lg:h-[280px]">

                <div className="bg-[#0B4393] justify-center flex md:grid h-[60px] md:py-0 sm:h-[285px] lg:h-[270px] rounded-[60px] items-center md:text-center text-white shadow-2xl w-80 md:max-w-full">

                  <p className="text-[36px] mt-9 font-medium pl-6 sm:text-[48px] lg:text-[48px] text-[#FFB724] leading-none mb-0 sm:mb-0 font-goodly">
                    250 +
                  </p>

                  <p className="text-[18px] font-poppins sm:text-[20px] mb-24 lg:text-[20px] font-medium leading-tight">
                    Tour <br /> Packages
                  </p>

                </div>

                {/* OVERLAP IMAGE */}
                <div className="absolute md:block hidden md:left-1/2 left-80 -translate-x-1/2 bottom-6 sm:-bottom-24 lg:-bottom-8 w-[120px] sm:w-[160px] lg:w-[160px] z-20">
                  <img
                    src="/img/img-5.png"
                    className="h-auto object-contain filter drop-shadow-2xl"
                    alt="Travel Illustration"
                  />
                </div>

              </div>

              {/* Features */}
              <div className="w-full">
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
                    className="flex w-full space-y-4 sm:flex-row sm:items-center gap-3 sm:gap-4 group"
                  >
                    {/* Icon Box */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mt-2 sm:mt-0 bg-[#FFB724] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform shrink-0 text-4xl sm:text-5xl">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="space-y-2 font-['Poppins'] text-[#000000]">
                      <h4 className="font-medium md:text-[15px]">{item.title}</h4>
                      <p className="text-[13px] sm:text-[16px] md:text-[17px] lg:text-[14px] leading-relaxed max-w-full font-medium opacity-70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:block lg:ml-28 hidden flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="/img/img8.png"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain scale-100 sm:scale-105 lg:scale-125"
              alt="Woman Explorer"
            />
          </div>
        </section>
      </div>

      {/* Section 4: CTA Adventure Banner - Refactored to match Screenshot 1 */}

      <div className="mt-10">
        {/* <TravelBanner /> */}
      </div>

    </div>
  );
};

export default About;

