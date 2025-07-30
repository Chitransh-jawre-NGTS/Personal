import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import axios from "axios";

const RentalCartSection = () => {
  const navigate = useNavigate();
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNearbyRentals = async () => {
    setLoading(true);
    try {
      const latitude = 22.72;
      const longitude = 75.858;
      const { data } = await axios.get("https://e-commerse-backend-y5my.onrender.com/api/nearby-rentals", {
        params: { latitude, longitude },
      });
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

  const handleViewDetails = (id) => {
    navigate(`/rentalproduct/${id}`);
  };

  return (
    <div className="p-6 max-w-full bg-amber-50 mx-auto pt-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-yellow-500 to-red-500 bg-clip-text p-4 text-transparent tracking-wide drop-shadow-lg">
        💫 Explore Our Stunning Categories 💫
      </h2>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : rentals.length === 0 ? (
        <p className="text-center text-lg">No rentals found near you.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rentals.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden group transition hover:shadow-2xl flex flex-col h-auto min-h-[450px] relative cursor-pointer"
              onClick={() => handleViewDetails(item._id)}
            >
              <img
                src={item.image || "https://picsum.photos/400/300"}
                alt={item.name}
                className="w-full h-65 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <button className="p-1 bg-white rounded-full shadow hover:bg-gray-100 transition">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">Shop Review</span>
                  <span className="text-yellow-500 font-semibold text-sm">
                    ⭐ {item.rating || 4.5}
                  </span>
                  <span className="text-gray-400 text-xs">
                    ({item.reviews || 20})
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 tracking-wide mt-2">
                  The <span className="text-primary-600">Rental</span> Hub
                </p>
                <div className="mt-auto pt-4 flex justify-between items-center border-t">
                  <span className="text-lg font-bold text-green-600">
                    ₹{item.price}{" "}
                    <span className="text-sm font-medium text-gray-500">
                      {item.duration || "per day"}
                    </span>
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalCartSection;
