import React, { useState } from "react";
import {
  X,
  MoreVertical,
  Search,
  Trash2,
  Pause,
  Settings,
} from "lucide-react";
import { MdQueue, MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

const WatchHistory = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Har Funn Maula | Aamir Khan | Elli A",
      channel: "T-Series",
      views: "107M views",
      duration: "5:28",
      description: "A new song 'Har Funn Maula' from the movie 'Koi Jaane Na'.",
      thumbnail: "https://picsum.photos/300/180?random=1",
    },
    {
      id: 2,
      title: "Taras | Munjya | Sharvari & Abhay Verma",
      channel: "Zee Music Company",
      views: "215M views",
      duration: "2:47",
      description: "Official full song from the movie 'Munjya'.",
      thumbnail: "https://picsum.photos/300/180?random=2",
    },
    {
      id: 3,
      title: "DD Returns Full Movie | Hindi Dubbed",
      channel: "Bolly Action",
      views: "2.8M views",
      duration: "1:50:00",
      description: "A group of friends hides a bag of money and jewels in a haunted bungalow.",
      thumbnail: "https://picsum.photos/300/180?random=3",
    },
    {
      id: 4,
      title: "React Native Full Course | Beginners",
      channel: "Sheryians Coding School",
      views: "272K views",
      duration: "4:21:14",
      description: "Learn React Native step-by-step in just 4 hours!",
      thumbnail: "https://picsum.photos/300/180?random=4",
    },
  ]);

  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };
  const removeVideo = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="relative bg-black text-white min-h-screen px-4 sm:px-6 lg:px-16 py-6 flex flex-col lg:flex-row">
      {/* Right: Sidebar (Fixed at center for lg) */}
      <div className="w-full lg:w-72 lg:fixed lg:right-16 lg:top-1/2 lg:-translate-y-1/2">
        <div className="flex flex-col lg:h-auto">
         <div className="group flex items-center border-b border-gray-600 focus-within:border-white transition-all duration-300 pb-2 mb-6 w-full lg:w-64">
  <Search className="text-gray-400 mr-2 h-4 w-4 group-focus-within:text-white transition-colors duration-300" />
  <input
    type="text"
    placeholder="Search watch history"
    className="bg-transparent outline-none text-sm w-full placeholder-gray-400 text-white transition-colors duration-300"
  />
</div>


          {/* Sidebar options */}
          <div className="space-y-5 text-sm w-full lg:w-64">
            <div className="flex items-center gap-3 font-semibold">
              <Trash2 className="h-4 w-4" />
              <span>Clear all watch history</span>
            </div>

            <div className="flex items-center gap-3 font-semibold">
              <Pause className="h-4 w-4" />
              <span>Pause watch history</span>
            </div>

            <div className="flex items-center gap-3 font-semibold">
              <Settings className="h-4 w-4" />
              <span>Manage all history</span>
            </div>

            <div className="pl-7 text-gray-400 space-y-2 pt-2">
              <div>Comments</div>
              <div>Posts</div>
              <div>Live chat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Left scrollable section */}
      <div className="flex-1 overflow-y-auto py-8 lg:pr-80">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Watch history</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="bg-white text-black font-medium px-4 py-1.5 rounded-full">All</button>
            <button className="bg-[#2c2c2c] text-white px-4 py-1.5 rounded-full">Videos</button>
            <button className="bg-[#2c2c2c] text-white px-4 py-1.5 rounded-full">Shorts</button>
            <button className="bg-[#2c2c2c] text-white px-4 py-1.5 rounded-full">Podcasts</button>
            <button className="bg-[#2c2c2c] text-white px-4 py-1.5 rounded-full">Music</button>
          </div>
          <p className="mt-6 font-semibold">Today</p>
        </div>

        {videos.map((video) => (
          <div key={video.id} className="flex flex-col sm:flex-row mb-8 gap-4 sm:gap-6 relative group">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-64 h-48 sm:h-36">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded"
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-xs px-1 py-0.5 rounded">
                {video.duration}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start flex-1 relative">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold pr-6">{video.title}</h3>
                <div className="flex gap-2">
                  <button onClick={() => removeVideo(video.id)} className="text-gray-500 hover:text-white">
                    <X size={26} />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(video.id)}
                      className="text-gray-500 hover:text-white"
                    >
                      <MoreVertical size={20} />
                    </button>

                    {dropdownOpenId === video.id && (
                      <div className="absolute right-0 mt-2 bg-[#1f1f1f] text-sm text-gray-300 rounded-xl shadow-lg py-1 z-50 w-52 border ">
                        <div className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded cursor-pointer">
                          <MdQueue size={20} />
                          <span>Add to queue</span>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded cursor-pointer">
                          <MdWatchLater size={20} />
                          <span>Save to Watch later</span>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded cursor-pointer">
                          <MdPlaylistAdd size={20} />
                          <span>Save to playlist</span>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded cursor-pointer">
                          <AiOutlineShareAlt size={20} />
                          <span>Share</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mt-1">
                <span>{video.channel}</span>
                <span>{video.views}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchHistory;
