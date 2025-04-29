import React from 'react';

const InfoBanner = () => {
  const infoItems = [
    {
      icon:"https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg",
      title: '100% Secure Payments',
      description: 'All major credit & debit cards accepted.',
    },
    {
      icon: "https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg",
      title: 'Beauty Assistant',
      description: 'Tell me what you are looking for and I will work my magic to help you find your perfect match.',
    },
    {
      icon: 'https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg',
      title: 'Help Center',
      description: 'Got a question? Look no further. Browse FAQs or submit your query.',
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain" />
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBanner;
