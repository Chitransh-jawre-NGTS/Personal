import React from "react";
import {
  PackageCheck,
  Headphones,
  Undo2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <PackageCheck className="w-10 h-10 text-indigo-500" />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $200.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-indigo-500" />,
    title: "24/7 Support",
    description: "We're here for you anytime, day or night.",
  },
  {
    icon: <Undo2 className="w-10 h-10 text-indigo-500" />,
    title: "30-Day Returns",
    description: "Hassle-free returns within 30 days of purchase.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-500" />,
    title: "Secure Payments",
    description: "Your transactions are protected and encrypted.",
  },
];

export default function FeatureCards() {
  return (
    <section className="container mx-auto w-full py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 rounded-xl p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-base font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
