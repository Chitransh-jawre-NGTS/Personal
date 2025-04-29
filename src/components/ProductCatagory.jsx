import React from 'react';

const categories = [
  {
    title: "Lip Care",
    items: [
      "Complete Lip Care Collection",
      "Lip Scrubs",
      "Lip Balm",
      "Lip Masks",
    ],
  },
  {
    title: "Eye Care",
    items: [
      "Complete Eye Care Collection",
      "Eye Masks & Patches",
      "Under eye serums & eye creams",
    ],
  },
  {
    title: "Skin Care Gifts & Value Sets",
    items: [
      "Complete Skin Care Gifts & Value Sets Collection",
      "Skin Care Kits",
    ],
  },
  {
    title: "Face Tools",
    items: [
      "Complete Face Tools Collection"
    ],
  },
  {
    title: "Toners & Face Mists",
    items: [
      "Complete Toners & Face Mists Collection",
      "Toners",
      "Face Mists",
    ],
  },
  {
    title: "Moisturizers",
    items: [
      "Complete Moisturizers Collection",
      "Night Creams",
      "Serums & Essences",
      "Face Moisturizers",
      "Facial Oils",
      "Day Creams",
    ],
  },
  {
    title: "Masks",
    items: [
      "Complete Masks Collection",
      "Face Packs & Face Masks",
      "Sheet Masks",
    ],
  },
  {
    title: "Facial Kits & Bleaches",
    items: [
      "Complete Facial Kits & Bleaches Collection",
      "Facial Kits",
      "Bleaches",
    ],
  },
  {
    title: "Aromatherapy",
    items: [
      "Complete Aromatherapy Collection",
      "Essential Oils",
      "Carrier Oils",
    ],
  },
  {
    title: "Specialised Skincare",
    items: [
      "Complete Specialised Skincare Collection",
      "Acne Spot correctors",
      "Nose Strips",
    ],
  },
];

const SkincareCategories = () => {
  return (
    <div className="p-6 bg-white text-gray-800 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {categories.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2 text-base">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareCategories;
