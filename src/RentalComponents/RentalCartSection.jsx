import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const rentalCartItems = [
  {
    id: 1,
    name: 'Canon DSLR Camera',
    image: 'https://picsum.photos/id/237/400/300',
    description: 'High-quality camera for professional shoots.',
    price: 500,
    duration: 'per day',
  },
  {
    id: 2,
    name: 'Electric Drill Machine',
    image: 'https://picsum.photos/id/1025/400/300',
    description: 'Perfect for home and industrial repairs.',
    price: 150,
    duration: 'per day',
  },
  {
    id: 3,
    name: 'Nikon DSLR Camera',
    image: 'https://picsum.photos/id/1062/400/300',
    description: 'Great for wildlife photography.',
    price: 550,
    duration: 'per day',
  },
  {
    id: 4,
    name: 'Bosch Drill Kit',
    image: 'https://picsum.photos/id/1040/400/300',
    description: 'Heavy-duty drill machine set.',
    price: 180,
    duration: 'per day',
  },
  {
    id: 5,
    name: 'DJI Drone Mini 2',
    image: 'https://picsum.photos/id/1011/400/300',
    description: 'Capture stunning aerial shots.',
    price: 1200,
    duration: 'per day',
  },
  {
    id: 6,
    name: 'Tripod Stand',
    image: 'https://picsum.photos/id/1033/400/300',
    description: 'Stable and lightweight stand.',
    price: 80,
    duration: 'per day',
  },
  {
    id: 7,
    name: 'Wireless Microphone',
    image: 'https://picsum.photos/id/1027/400/300',
    description: 'Perfect for interviews and podcasts.',
    price: 100,
    duration: 'per day',
  },
  {
    id: 8,
    name: 'Lighting Kit',
    image: 'https://picsum.photos/id/1079/400/300',
    description: 'Soft light setup for video shoots.',
    price: 200,
    duration: 'per day',
  },
  {
    id: 9,
    name: 'GoPro Hero 9',
    image: 'https://picsum.photos/id/1069/400/300',
    description: 'Adventure action camera.',
    price: 450,
    duration: 'per day',
  },
  {
    id: 10,
    name: 'Projector (HD)',
    image: 'https://picsum.photos/id/1080/400/300',
    description: 'Perfect for presentations and movie nights.',
    price: 700,
    duration: 'per day',
  },
  {
    id: 11,
    name: 'Mirrorless Camera',
    image: 'https://picsum.photos/id/1045/400/300',
    description: 'Compact and powerful.',
    price: 600,
    duration: 'per day',
  },
  {
    id: 12,
    name: 'Studio Background Setup',
    image: 'https://picsum.photos/id/1051/400/300',
    description: 'Professional backgrounds for shoots.',
    price: 250,
    duration: 'per day',
  },
  {
    id: 13,
    name: '360° Camera Rig',
    image: 'https://picsum.photos/id/1015/400/300',
    description: 'Immersive video equipment.',
    price: 1300,
    duration: 'per day',
  },
  {
    id: 14,
    name: 'Sound Mixer',
    image: 'https://picsum.photos/id/1084/400/300',
    description: 'Control audio channels on the go.',
    price: 400,
    duration: 'per day',
  },
  {
    id: 15,
    name: 'Laptop for Editing',
    image: 'https://picsum.photos/id/1039/400/300',
    description: 'High-performance editing laptop.',
    price: 900,
    duration: 'per day',
  },
  {
    id: 16,
    name: 'Handheld Stabilizer',
    image: 'https://picsum.photos/id/1060/400/300',
    description: 'Smooth motion video shooting.',
    price: 350,
    duration: 'per day',
  },
  {
    id: 17,
    name: 'PA System (Speakers + Mic)',
    image: 'https://picsum.photos/id/1003/400/300',
    description: 'Public address system for events.',
    price: 1100,
    duration: 'per day',
  },
  {
    id: 18,
    name: 'LED Display Panel',
    image: 'https://picsum.photos/id/1074/400/300',
    description: 'For indoor/outdoor events.',
    price: 2000,
    duration: 'per day',
  },
  {
    id: 19,
    name: 'AC Power Generator',
    image: 'https://picsum.photos/id/1032/400/300',
    description: 'Reliable power backup for events.',
    price: 1000,
    duration: 'per day',
  },
  {
    id: 20,
    name: 'Fog Machine',
    image: 'https://picsum.photos/id/1085/400/300',
    description: 'Create atmospheric effects for shows.',
    price: 300,
    duration: 'per day',
  },
];

const RentalCartSection = () => {
  const navigate = useNavigate();

  const handleRentNow = (item) => {
    navigate('/rentalcheckout', { state: { item } });
  };

  return (
    <div className="p-6 max-w-full mx-auto mt-16">
      <h2 className="text-3xl font-semibold mb-6">Your Rental Cart</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {rentalCartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden relative group"
          >
            <button className="absolute top-3 right-3  p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <Heart className="w-5 h-5 text-red-500" />
            </button>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  ₹{item.price}{' '}
                  <span className="text-sm font-medium text-gray-500">
                    {item.duration}
                  </span>
                </span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleRentNow(item)}
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalCartSection;
