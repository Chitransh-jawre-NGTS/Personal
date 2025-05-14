import React from 'react';

const categories = [
  { image: 'src/assets/images/download.png', label: 'Catagorys' },
  { image: 'src/assets/images/ethentic wear.png', label: 'Ethnic Wear' },
  { image: 'src/assets/images/women lenga.png', label: 'Western Dresses' },
  { image: 'src/assets/images/mens wear.png', label: 'Menswear' },
  { image: 'src/assets/images/Footwear.png', label: 'Footwear' },
  { image: 'src/assets/images/beuty.jpg', label: 'Beauty' },
  // { image: 'https://picsum.photos/300/300?random=9', label: 'Trendy' },
];

const CategorySection = () => {
  return (
    <div className= " w-[95%] mx-auto hidden lg:flex py-10 lg:mt-20 bg-white">
      <div className="container px-4">
        <div className="flex flex-wrap justify-evenly gap-2 lg:gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-38 rounded-full  bg-white flex items-center justify-center">
                <img src={item.image} alt={item.label} className="w-42 h-42 " />
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;



{/* <div className="w-full   py-6 bg-white">
<div
  className="overflow-x-auto"
  style={{
    scrollbarWidth: 'none',          // Firefox
    msOverflowStyle: 'none'          // IE & Edge
  }}
>
  <div
    className="flex gap-4 px-4 min-w-max"
    style={{
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch'  // smooth scrolling on iOS
    }}
  >
    {/* Scrollbar hidden for Webkit (Chrome, Safari) */}
//     <style>
//       {`
// div::-webkit-scrollbar {
//   display: none;
// }
// `}
//     </style>

//     {categories.map((item, index) => (
//       <div key={index} className="flex flex-col items-center min-w-[70px]">
//         <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
//           <img src={item.image} alt={item.label} className="w-12 h-12 object-contain" />
//         </div>
//         <p className="mt-2 text-xs text-gray-700 font-medium text-center">{item.label}</p>
//       </div>
//     ))}
//   </div>
// </div>
// </div> */}