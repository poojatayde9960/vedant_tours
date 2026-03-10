import React from "react";
import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 3,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
  {
    id: 4,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  },
  {
    id: 5,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: 6,
    name: "Hotel Rama International",
    price: "1200",
    rating: "4.5",
    reviews: "127",
    location: "Connat Place Chhatrapati Sambhajinagar 431001",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
];

export default function HotelListing() {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen font-poppins p-4 md:py-8 mt-[500px] md:mt-72">
      <div className="w-full mx-auto grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-4">

          {/* Budget */}
          <div className="bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
            <h3 className="bg-[#D6E8FF] text-black  font-medium px-4 py-2">
              Your Budget (Per Night)
            </h3>

            <div className="p-4">
              <input type="range" min="50" max="250" className="w-full accent-blue-500" />

              <div className="flex justify-between text-sm mt-1">
                <span>€ 50</span>
                <span>€ 250</span>
              </div>
            </div>
          </div>


          {/* Star Rating */}
          <div className="bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
            <h3 className="bg-[#D6E8FF] text-black font-medium px-4 py-2">
              Star Rating
            </h3>

            <div className="p-4">
              {["5 star", "3 star", "2 star", "Budget Hotel"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm mb-1">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>


          {/* Property Type */}
          <div className="bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
            <h3 className="bg-[#D6E8FF] text-black font-medium px-4 py-2">
              Property Type
            </h3>

            <div className="p-4">
              {["Hotel", "Resort", "Villa", "Apartment", "Guest House"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm mb-1">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>


          {/* Amenities */}
          <div className="bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
            <h3 className="bg-[#D6E8FF] text-black font-medium px-4 py-2">
              Amenities
            </h3>

            <div className="p-4">
              {[
                "Free Wifi",
                "Swimming Pool",
                "Breakfast Included",
                "Free Cancellation",
                "Air Conditioning",
                "Parking available",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm mb-1">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Hotel Grid */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Total Available Hotels (10)
            </h2>

            <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
              Clear All Filter
            </button>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => navigate(`/hotel-details/${hotel.id}`)}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              >
                <img
                  src={hotel.image}
                  alt=""
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-md">{hotel.name}</h3>

                  <div className="flex items-center text-sm text-yellow-500 mt-1">
                    <Star size={16} />
                    <span className="ml-1">
                      {hotel.rating} ({hotel.reviews} Reviews)
                    </span>
                  </div>

                  <div className="flex items-start text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="mr-1 mt-1" />
                    {hotel.location}
                  </div>

                  <div className="mt-3">
                    <span className="text-blue-600 font-bold text-lg">
                      Rs.{hotel.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      Price Starts From
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
