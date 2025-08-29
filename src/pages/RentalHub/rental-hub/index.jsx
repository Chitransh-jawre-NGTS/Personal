import React, { useState, useEffect } from "react";
import HeroCarousel from "../../../RentalComponents/HeroCraouslRental";
import CategorySection from "../../../RentalComponents/CatagorySectionRental";
import RentalCartSection from "../../../RentalComponents/RentalCartSection";
import toast from "react-hot-toast";
import AmazonStyleNavbar from "../../../components/Navbar";

const RentalHub = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Load saved location from localStorage on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    }
  }, []);

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(coords);
          setError("");

          // 🔹 Save coords in localStorage
          localStorage.setItem("userLocation", JSON.stringify(coords));

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
            );
            const data = await response.json();
            const addressText =
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.village ||
              data?.address?.state ||
              "Unknown Area";

            toast.success(
              `📍 Location detected: ${addressText} (${coords.latitude.toFixed(
                3
              )}, ${coords.longitude.toFixed(3)})`,
              { duration: 3000 }
            );
          } catch (e) {
            toast.error("⚠️ Failed to fetch location address");
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError("❌ Location access denied or unavailable.");
          setLoading(false);
        }
      );
    } else {
      setError("❌ Geolocation is not supported by your browser.");
    }
  };

  // 📍 If no location & not saved in localStorage
  if (!location) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center p-6"
        style={{
          backgroundImage:
            "url('src/assets/images/location/top-view-magnifying-glass-compass.jpg')",
        }}
      >
        <h1 className="text-5xl text-black font-bold mb-4">
          Allow Location to Continue
        </h1>
        <p className="mb-4 text-blue-800 max-w-md">
          We use your location to show you the best rental options nearby.
        </p>

        <button
          onClick={handleLocationRequest}
          disabled={loading}
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Allow Location"
          )}
        </button>

        {error && <p className="mt-4 text-red-300 font-semibold">{error}</p>}
      </div>
    );
  }

  // ✅ After permission granted or loaded from localStorage
  return (
    <>
      <AmazonStyleNavbar showMobileBottom={false} />
      {/* <HeroCarousel />
      <CategorySection /> */}
      <RentalCartSection />
    </>
  );
};

export default RentalHub;
