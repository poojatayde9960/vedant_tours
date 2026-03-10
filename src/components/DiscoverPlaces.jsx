import React from "react";

export default function DiscoverPlaces() {
  const places = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  ];

  return (
    <section className="w-full min-h-screen bg-[#C2EBFF7A] md:py-10 pb-16 md:pb-10 md:mt-0 px-6 lg:px-20 overflow-hidden md:mb-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:mt-0 mt-10 font-goodly font-medium sm:text-3xl md:text-[36px] text-gray-800">
          Discover Beautiful <span className="text-orange-500">Places</span>{" "}
          Across The <span className="text-blue-600">Globe</span>
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-[17px] max-w-2xl mx-auto font-poppins">
          From tropical beaches and romantic islands to historic cities and<br />
          breathtaking mountains explore handpicked destinations designed for<br />
          every kind of traveler.
        </p>

        {/* Circle Layout */}
        <div className="relative mt-24 md:mt-[130px] flex items-center justify-center">
          {/* Center Globe */}
          <div className="w-56 h-56 sm:w-72 md:block hidden sm:h-72 md:w-[960px] rounded-full flex items-start justify-center relative overflow-visible">
            <img
              src="/img/Ellipse 38.png"
              alt="world map"
              className="w-3/4 -translate-y-1/4 md:mt-24 md:ml-32"
            />
          </div>

          {/* Arc Line */}
          <svg
            className="absolute hidden md:block"
            width="850"
            height="600"
            viewBox="0 0 900 600"
            style={{
              left: "50%",
              top: "89%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <path
              d="M50 400 A400 400 0 0 1 850 400"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1"
            />
          </svg>

          {/* Circular Images */}
          {places.map((img, index) => {
            const total = places.length;
            const angle = (index / (total - 1)) * Math.PI;

            // Original radius for desktop
            let radius = 370;
            let topOffset = "120%";

            // Scale radius for small screens (Nest Hub etc)
            if (window.innerWidth < 768) {
              radius = 150; // smaller radius
              topOffset = "110%"; // move the circle up a bit
            }

            const x = Math.cos(angle) * radius;
            const y = -Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute hidden md:block"
                style={{
                  left: "50%",
                  top: topOffset,
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={`${img}?auto=format&fit=crop&w=300&q=80`}
                  alt="place"
                  className="w-32 h-32 rounded-full object-cover shadow-lg hover:scale-110 transition"
                />
              </div>
            );
          })}
        </div>

        {/* Mobile Grid */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 md:mt-12 md:hidden">
          {places.map((img, index) => (
            <img
              key={index}
              src={`${img}?auto=format&fit=crop&w=300&q=80`}
              alt="place"
              className="md:w-full md:h-24 w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
