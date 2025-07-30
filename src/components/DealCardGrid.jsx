import React from "react";

const cardData = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { label: "Air conditioners", image: "https://picsum.photos/seed/ac/400/300" },
      { label: "Refrigerators", image: "https://picsum.photos/seed/fridge/400/300" },
      { label: "Microwaves", image: "https://picsum.photos/seed/microwave/400/300" },
      { label: "Washing machines", image: "https://picsum.photos/seed/washer/400/300" },
    ],
    footerLink: "See more",
  },
  {
    title: "Up to 60% off | Footwear & handbags",
    items: [
      { label: "Sports shoes", image: "https://picsum.photos/seed/sports/400/300" },
      { label: "Men's shoes", image: "https://picsum.photos/seed/mensshoes/400/300" },
      { label: "Women's shoes", image: "https://picsum.photos/seed/womensshoes/400/300" },
      { label: "Handbags", image: "https://picsum.photos/seed/handbag/400/300" },
    ],
    footerLink: "See all offers",
  },
  {
    title: "More Deals on Home Essentials",
    items: [
      { label: "Kitchen sets", image: "https://picsum.photos/seed/kitchen/400/300" },
      { label: "Furniture", image: "https://picsum.photos/seed/furniture/400/300" },
      { label: "Curtains", image: "https://picsum.photos/seed/curtains/400/300" },
      { label: "Lighting", image: "https://picsum.photos/seed/lighting/400/300" },
    ],
    footerLink: "Shop now",
  },
  {
    title: "Electronics & Gadgets",
    items: [
      { label: "Headphones", image: "https://picsum.photos/seed/headphones/400/300" },
      { label: "Smartphones", image: "https://picsum.photos/seed/smartphones/400/300" },
      { label: "Laptops", image: "https://picsum.photos/seed/laptops/400/300" },
      { label: "Speakers", image: "https://picsum.photos/seed/speakers/400/300" },
    ],
    footerLink: "Browse electronics",
  },
];

const DealCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-200">
      {cardData.map((section, idx) => {
        const isLastCard = idx === cardData.length - 1;

        return (
          <div
            key={idx}
            className={`bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col justify-between ${
              isLastCard ? "p-0 overflow-hidden" : "p-6"
            }`}
          >
            {/* Show heading only if it's not the last card */}
            {!isLastCard && (
              <h2 className="text-xl font-semibold text-gray-800 mb-5">
                {section.title}
              </h2>
            )}

            {!isLastCard ? (
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start text-sm text-gray-700 hover:text-black group"
                  >
                    <div className="overflow-hidden rounded-xl w-full shadow-sm group-hover:shadow-md transition-shadow">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-34 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-full">
                <img
                  src={"src/assets/images/Advertisement/Red Modern New Shoes Promo Instagram Post.png"}
                  alt={section.items[0].label}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {!isLastCard && (
              <a
                href="#"
                className="text-blue-600 text-sm mt-6 inline-block font-semibold relative group"
              >
                {section.footerLink}
                <span className="block h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DealCardGrid;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const DealCardGrid = () => {
//   const { sectionId } = useParams();
//   const [cardData, setCardData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulated API call
//     fetch(`/api/deals/${sectionId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCardData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching section:", err);
//         setLoading(false);
//       });
//   }, [sectionId]);

//   if (loading) return <div className="p-8 text-lg">Loading...</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-200">
//       {cardData.map((section, idx) => {
//         const isLastCard = idx === cardData.length - 1;

//         return (
//           <div
//             key={idx}
//             className={`bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col justify-between ${
//               isLastCard ? "p-0 overflow-hidden" : "p-6"
//             }`}
//           >
//             {!isLastCard && (
//               <h2 className="text-xl font-semibold text-gray-800 mb-5">
//                 {section.title}
//               </h2>
//             )}

//             {!isLastCard ? (
//               <div className="grid grid-cols-2 gap-4">
//                 {section.items.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-start text-sm text-gray-700 hover:text-black group"
//                   >
//                     <div className="overflow-hidden rounded-xl w-full shadow-sm group-hover:shadow-md transition-shadow">
//                       <img
//                         src={item.image}
//                         alt={item.label}
//                         className="w-full h-24 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105"
//                       />
//                     </div>
//                     <span className="mt-2 font-medium">{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="w-full h-full">
//                 <img
//                   src={section?.items?.[0]?.image}
//                   alt={section?.items?.[0]?.label || "Promo"}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}

//             {!isLastCard && (
//               <a
//                 href="#"
//                 className="text-blue-600 text-sm mt-6 inline-block font-semibold relative group"
//               >
//                 {section.footerLink}
//                 <span className="block h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
//               </a>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DealCardGrid;
