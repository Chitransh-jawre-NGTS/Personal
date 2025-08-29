import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Star, SlidersHorizontal, ArrowUpDown, MapPinOff } from "lucide-react";
import axios from "axios";

const RentalCartSection = () => {
  const navigate = useNavigate();
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchNearbyRentals = async () => {
    setLoading(true);
    try {
      const latitude = 22.72;
      const longitude = 75.858;
      const { data } = await axios.get(
        "https://e-commerse-backend-y5my.onrender.com/api/nearby-rentals",
        { params: { latitude, longitude } }
      );
      setRentals(data);
    } catch (error) {
      console.error("Error fetching rentals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNearbyRentals();
  }, []);

  // Dummy categories for filter
  const categories = ["all", "electronics", "furniture", "vehicles", "fashion"];

  // Sorting logic
  const sortedRentals = [...rentals]
    .filter((r) =>
      selectedCategory === "all" ? true : r.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleViewDetails = (id) => {
    navigate(`/rentalproduct/${id}`);
  };

  return (
    <div className="flex  my-15 pt-20">
      {/* Sidebar Filter */}
      <aside className="hidden md:block w-64 bg-white shadow-md p-4 sticky top-20 h-screen">
        <h3 className="font-semibold text-gray-800 text-lg mb-4 flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" /> Filters
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 px-4 md:px-8">
        {/* Sort Bar */}
        <div className="flex justify-between items-center bg-white shadow-sm px-4 py-3 rounded-md mb-6">
          <h2 className="text-xl font-bold text-gray-800">Rentals for You</h2>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-gray-500" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
              >
                {/* Image Skeleton */}
                <div className="w-full h-52 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>

                <div className="p-3 space-y-3">
                  {/* Title */}
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>

                  {/* Description */}
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>

                  {/* Rating */}
                  <div className="flex gap-2 mt-2">
                    <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-8 animate-pulse"></div>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : sortedRentals.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <MapPinOff className="h-12 w-12 text-red-500" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Coming Soon 🚀
              </h1>

              {/* Message */}
              <p className="text-gray-600 mb-6">
                Sorry, currently we are not dealing in your area.
                Stay tuned, we are expanding very soon!
              </p>



              {/* Footer */}
              <p className="text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} WishCart • All Rights Reserved
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

            {sortedRentals.map((item) => (
              <div
                key={item._id}
                onClick={() => handleViewDetails(item._id)}
                className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden border border-gray-200 group"
              >
                <div className="relative">
                  <img
                    src={item.image || "https://picsum.photos/400/300"}
                    alt={item.name}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 mt-2">
                    {/* <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                      {item.rating || 4.5} <Star className="w-3 h-3" />
                    </span> */}
                    <span className="text-gray-500 text-xs">
                      ({item.reviews || 20})
                    </span>
                  </div>

                  {/* Price Section */}
                  <div className="mt-auto flex justify-between items-center pt-3">
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        ₹{item.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.duration || "per day"}
                      </p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default RentalCartSection;
