import React, { useState } from 'react';
import HeroCarousel from '../../RentalComponents/HeroCraouslRental';
import CategorySection from '../../RentalComponents/CatagorySectionRental';
import RentalCartSection from '../../RentalComponents/RentalCartSection';
import toast from 'react-hot-toast';

const RentalHub = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(coords);
          setError('');

          // Fetch human-readable address
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
              'Unknown Area';

            toast.success(
              `📍 Location detected: ${addressText} (${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)})`,
              { duration: 3000 }
            );
          } catch (e) {
            toast.error('⚠️ Failed to fetch location address');
          }
        },
        () => {
          setError('❌ Location access denied or unavailable.');
        }
      );
    } else {
      setError('❌ Geolocation is not supported by your browser.');
    }
  };

  // 📍 Show permission screen if no location
  if (!location) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center p-6">
        <h1 className="text-3xl font-bold mb-4">📍 Allow Location to Continue</h1>
        <p className="mb-4 max-w-md">
          We use your location to show you the best rental options nearby.
        </p>
        <button
          onClick={handleLocationRequest}
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
        >
          Allow Location
        </button>
        {error && <p className="mt-4 text-red-300 font-semibold">{error}</p>}
      </div>
    );
  }

  // ✅ After permission granted
  return (
    <>
      <HeroCarousel />
      <CategorySection />
      <RentalCartSection />
    </>
  );
};

export default RentalHub;
