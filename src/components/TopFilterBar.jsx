import React, { useState } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const TopFilterBar = () => {
    const [sortOpen, setSortOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);

    const dropdownStyle = "absolute bg-white shadow-lg rounded-md mt-2 z-50";

    const sortOptions = ['Price: Low to High', 'Price: High to Low', 'Newest First'];
    const categoryOptions = ['Clothing', 'Footwear', 'Accessories'];
    const genderOptions = ['Men', 'Women', 'Kids'];

    return (
        <div className="fixed top-13 border-t left-0 right-0 bg-white shadow-md z-50 px-6 py-3 flex justify-start gap-6 items-center border-b border-gray-200">

            {/* Sort */}
            <div className="flex items-center justify-evenly pb-2">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button
                            onClick={() => setSortOpen(!sortOpen)}
                            className="flex w-full items-center gap-1 font-medium hover:text-blue-600"
                        >
                            <FaSort /> Sort <MdKeyboardArrowDown />
                        </button>
                        {sortOpen && (
                            <ul className={dropdownStyle}>
                                {sortOptions.map((item, idx) => (
                                    <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="w-px h-6 bg-gray-300" /> {/* Divider */}

                    <div>
                        <button
                            onClick={() => alert("Open Filters Sidebar/Modal")}
                            className="flex items-center w-full gap-2 font-medium hover:text-blue-600"
                        >
                            <FaFilter /> Filters
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopFilterBar;



{/* Category */ }
{/* <div className="relative">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center gap-1 font-medium hover:text-blue-600"
        >
          Category <MdKeyboardArrowDown />
        </button>
        {categoryOpen && (
          <ul className={dropdownStyle}>
            {categoryOptions.map((item, idx) => (
              <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div> */}

{/* Gender */ }
{/* <div className="relative">
        <button
          onClick={() => setGenderOpen(!genderOpen)}
          className="flex items-center gap-1 font-medium hover:text-blue-600"
        >
          Gender <MdKeyboardArrowDown />
        </button>
        {genderOpen && (
          <ul className={dropdownStyle}>
            {genderOptions.map((item, idx) => (
              <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div> */}