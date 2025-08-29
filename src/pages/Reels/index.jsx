import React, { useRef, useEffect, useState } from "react";
import { Heart, ThumbsDown, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    productImage: "https://picsum.photos/100?random=11",
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
    productImage: "https://picsum.photos/100?random=12",
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
    productImage: "https://picsum.photos/100?random=13",
  },
];

const ReelsInstagramStyle = () => {
  const [reels, setReels] = useState(reelsData);
  const reelRefs = useRef([]);
  const observer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        if (!video) return;

        if (entry.isIntersecting) {
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
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black scroll-smooth relative">
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

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Top Left: Shop Name */}
          <div className="absolute top-4 left-4 text-white font-bold text-lg">
            {reel.shopName}
          </div>

          {/* Top Right: Close Button (Go Back) */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-black/50 rounded-full transition"
          >
            <X />
          </button>

          {/* Bottom Left: Product Box */}
          <a
            href={reel.productLink}
            className="absolute bottom-6 left-4 bg-black/70 p-2 rounded-lg flex items-center gap-2"
          >
            <img
              src={reel.productImage}
              alt="Product"
              className="w-14 h-14 object-cover rounded"
            />
            <span className="text-white text-sm line-clamp-2">
              {reel.description}
            </span>
          </a>

          {/* Bottom Right: Likes, Dislikes */}
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReelsInstagramStyle;
