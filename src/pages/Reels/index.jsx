import React, { useRef, useEffect, useState } from "react";
import { Heart, ThumbsDown, ShoppingBag } from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";

const reelsData = [
  {
    id: 1,
    shopName: "Fashion Hub",
    avatar: "https://picsum.photos/50?random=1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 120,
    dislikes: 5,
    productLink: "/products/1",
    description: "New summer collection T-shirts",
  },
  {
    id: 2,
    shopName: "Style Store",
    avatar: "https://picsum.photos/50?random=2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 95,
    dislikes: 2,
    productLink: "/products/2",
    description: "Elegant Sarees for weddings",
  },
  {
    id: 3,
    shopName: "Urban Wear",
    avatar: "https://picsum.photos/50?random=3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 150,
    dislikes: 8,
    productLink: "/products/3",
    description: "Latest men's jackets",
  },
];

const ReelsInstagramStyle = () => {
  const [reels, setReels] = useState(reelsData);
  const reelRefs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        if (!video) return;

        if (entry.isIntersecting) {
          // Pause all other videos
          reelRefs.current.forEach((ref) => {
            const otherVideo = ref?.querySelector("video");
            if (otherVideo && otherVideo !== video) otherVideo.pause();
          });
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    reelRefs.current.forEach((ref) => {
      if (ref) observer.current.observe(ref);
    });

    return () => observer.current.disconnect();
  }, []);

  const handleLike = (id) => {
    setReels((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleDislike = (id) => {
    setReels((prev) =>
      prev.map((r) => (r.id === id ? { ...r, dislikes: r.dislikes + 1 } : r))
    );
  };

  return (
    <>
      <SmallNavbar showBottomNav={false} showSearch={false} />
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black scroll-smooth">
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            ref={(el) => (reelRefs.current[index] = el)}
            className="relative h-screen w-full snap-start flex items-end justify-start"
          >
            <video
              src={reel.videoUrl}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-4 text-white max-w-[70%]">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={reel.avatar}
                  alt={reel.shopName}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <h3 className="font-bold text-lg">{reel.shopName}</h3>
              </div>
              <p className="text-sm line-clamp-2">{reel.description}</p>
            </div>

            <div className="absolute right-4 bottom-16 flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handleLike(reel.id)}
                  className="text-white text-3xl hover:scale-125 transition-transform active:scale-110"
                >
                  <Heart />
                </button>
                <span className="text-white text-sm">{reel.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handleDislike(reel.id)}
                  className="text-white text-3xl hover:scale-125 transition-transform active:scale-110"
                >
                  <ThumbsDown />
                </button>
                <span className="text-white text-sm">{reel.dislikes}</span>
              </div>
              <a
                href={reel.productLink}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                <ShoppingBag className="inline w-4 h-4 mr-1" />
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReelsInstagramStyle;
