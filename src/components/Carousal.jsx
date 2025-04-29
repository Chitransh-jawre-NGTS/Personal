// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Carousel = () => {
//   const [images, setImages] = useState([]);
//   const sliderRef = useRef(null); // Reference to the Slider component

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false, // We will disable default arrows
//     pauseOnHover: false,
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const fetchedImages = [];
//         // Fetching 5 random images from Picsum
//         for (let i = 0; i < 5; i++) {
//           const response = await fetch('https://picsum.photos/1600/800?random=' + i);
//           fetchedImages.push(response.url);
//         }
//         setImages(fetchedImages);
//       } catch (error) {
//         console.error('Error fetching carousel images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   // Function to go to the previous slide
//   const handlePrev = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   // Function to go to the next slide
//   const handleNext = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   return (

//     <>
//     <div className="w-full flex mt-30 justify-center relative">
//     <div className="w-[100%] h-[500px] overflow-hidden  shadow-sm relative">
//       {/* Custom navigation buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
//       >
//         <span className="text-2xl">&#8592;</span>
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
//       >
//         <span className="text-2xl">&#8594;</span>
//       </button>
  
//       <Slider ref={sliderRef} {...settings}>
//         {images.map((imageUrl, index) => (
//           <div key={index}>
//             <img
//               src={imageUrl}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   </div>

 
//   <div className="w-full bg-red-200 mt-14 h-[150px] flex items-center justify-center">
//   <div className="w-[80%]">
//     <img
//       src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1744800103_top-nl-of-the-week-header-web-2.jpg"
//       alt=""
//       className="mx-auto"
//     />
//   </div>
// </div>

// </>
//   );
// };

// export default Carousel;




import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null); // Reference to the Slider component

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // We will disable default arrows
    pauseOnHover: false,
  };

  // Simulating a backend API call to fetch image URLs
  const fetchImagesFromBackend = async () => {
    try {
      // Here, we're adding the provided Meesho image URL to the list of images
      const fetchedImages = [
        'https://images.meesho.com/images/marketing/1744783895378.webp', // Your specific image URL
        'https://picsum.photos/1600/800?random=1',
        // 'https://picsum.photos/1600/800?random=2',
        // 'https://picsum.photos/1600/800?random=3',
        // 'https://picsum.photos/1600/800?random=4',
      ];

      setImages(fetchedImages); // Set the images in the state
    } catch (error) {
      console.error('Error fetching carousel images:', error);
    }
  };

  useEffect(() => {
    fetchImagesFromBackend(); // Fetch images on component mount
  }, []);

  // Function to go to the previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="w-full flex mt-15 lg:mt-30 justify-center relative">
        <div className="w-[100%] h-auto overflow-hidden shadow-sm relative">
          {/* Custom navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute hidden lg:flex left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute hidden lg:flex  right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <span className="text-2xl">&#8594;</span>
          </button>

          <Slider ref={sliderRef} {...settings}>
            {images.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full bg-red-200  lg:mt-14 flex items-center justify-center py-4 sm:py-6 md:py-10">
  <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
    <img
      src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1744800103_top-nl-of-the-week-header-web-2.jpg"
      alt="Top Banner"
      className="w-full h-auto rounded-md shadow-sm"
    />
  </div>
</div>

    </>
  );
};

export default Carousel;
