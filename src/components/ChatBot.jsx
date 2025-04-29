import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [stage, setStage] = useState('initial');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const initialOptions = [
    { label: 'Track my order', value: 'track' },
    { label: 'Cancel an order', value: 'cancel' },
    { label: 'Return / Refund', value: 'return' },
    { label: 'Payment issue', value: 'payment' },
    { label: 'Talk to support', value: 'support' },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      simulateBotMessage('👋 Hello! I am your assistant. How can I help you today?', 'selectingOption');
    } else {
      setMessages([]);
      setStage('initial');
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const simulateBotMessage = (text, nextStage = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text }]);
      setIsTyping(false);
      if (nextStage) setStage(nextStage);
    }, 1000); // 1 sec typing delay
  };

  const handleOptionClick = (value) => {
    const option = initialOptions.find(opt => opt.value === value);
    setMessages((prev) => [...prev, { sender: 'user', text: option?.label || '' }]);

    let response = '';

    switch (value) {
      case 'track':
        response = '🚚 You can track your order here: [Track Order Link]';
        break;
      case 'cancel':
        response = '❌ To cancel an order, go to "My Orders" and tap "Cancel".';
        break;
      case 'return':
        response = '↩️ Go to "My Orders" > "Request Return" to start a return/refund.';
        break;
      case 'payment':
        response = '💳 Payments are usually refunded in 3-5 business days.';
        break;
      case 'support':
        response = '📞 You can reach support at support@example.com or 123-456-7890.';
        break;
      default:
        response = "Sorry, I couldn't understand.";
    }

    simulateBotMessage(response);
    setTimeout(() => {
      simulateBotMessage('✅ Are you satisfied with this answer?', 'satisfaction');
    }, 2000);
  };

  const handleSatisfactionClick = (satisfied) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: satisfied ? 'Yes, thanks' : 'I have another query' },
    ]);

    if (satisfied) {
      simulateBotMessage('🎉 Glad to help! Have a great day!');
      setStage('ended');
    } else {
      simulateBotMessage('🙌 Sure! How else can I assist you?', 'selectingOption');
    }
  };

  return (
    <div className="fixed bottom-6 right-0 w-50 z-50 font-sans">
      <button
        onClick={toggleChat}
        className="bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬 Chat with us
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="mt-3 bg-white border border-blue-600 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            <div className="flex-1 overflow-y-auto p-4  space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75   %] p-3 rounded-2xl text-sm shadow ${
                      msg.sender === 'user'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl text-sm shadow animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {(stage === 'selectingOption' || stage === 'satisfaction') && (
              <div className="p-3 border-t flex flex-col space-y-2 bg-gray-50">
                {stage === 'selectingOption' &&
                  initialOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option.value)}
                      className="w-full bg-blue-100 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-200 transition text-left"
                    >
                      {option.label}
                    </button>
                  ))}

                {stage === 'satisfaction' && (
                  <>
                    <button
                      onClick={() => handleSatisfactionClick(true)}
                      className="w-full bg-green-100 text-green-700 py-2 px-3 rounded-lg hover:bg-green-200 transition"
                    >
                      ✅ Yes, thanks
                    </button>
                    <button
                      onClick={() => handleSatisfactionClick(false)}
                      className="w-full bg-yellow-100 text-yellow-700 py-2 px-3 rounded-lg hover:bg-yellow-200 transition"
                    >
                      ❓ I have another query
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;



// import { useAuth } from '../auth/AuthContext'; // Import the auth hook
// import { useState } from 'react';

// const Chatbot = () => {
//   const { isAuthenticated } = useAuth();
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello! I am your Chatbot 🤖. How may I help you today?' },
//   ]);
//   const [options, setOptions] = useState([
//     'Track my order',
//     'Cancel my order',
//     'Return or Replace a product',
//     'Offers and Discounts',
//     'Talk to customer support'
//   ]);
//   const [showSatisfaction, setShowSatisfaction] = useState(false);

//   if (!isAuthenticated) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl font-semibold text-gray-600">Please login to use Chatbot 🔒</p>
//       </div>
//     );
//   }

//   const handleOptionClick = (option) => {
//     let botResponse = '';

//     switch (option) {
//       case 'Track my order':
//         botResponse = 'Sure! Please enter your Order ID to track your order 📦';
//         break;
//       case 'Cancel my order':
//         botResponse = 'Please provide your Order ID. We will cancel it if it’s eligible ❌';
//         break;
//       case 'Return or Replace a product':
//         botResponse = 'You can initiate a return or replacement from your orders page 🔄';
//         break;
//       case 'Offers and Discounts':
//         botResponse = 'Check out our latest deals on the Offers page 🎉';
//         break;
//       case 'Talk to customer support':
//         botResponse = 'Connecting you to our customer support... Please wait 🤝';
//         break;
//       default:
//         botResponse = 'Sorry, I didn’t understand that.';
//     }

//     setMessages((prev) => [...prev, { sender: 'user', text: option }, { sender: 'bot', text: botResponse }]);
//     setOptions([]);
//     setShowSatisfaction(true);
//   };

//   const handleSatisfaction = (feedback) => {
//     const botReply = feedback === 'Yes'
//       ? 'Glad to hear that! Let me know if you need anything else 😊'
//       : 'Sorry for the inconvenience. I will connect you to a human agent 👤';

//     setMessages((prev) => [...prev, { sender: 'user', text: feedback }, { sender: 'bot', text: botReply }]);
//     setShowSatisfaction(false);
//     setOptions([
//       'Track my order',
//       'Cancel my order',
//       'Return or Replace a product',
//       'Offers and Discounts',
//       'Talk to customer support'
//     ]); // Reset options for new queries
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg animate-fadeIn">
//       <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Chatbot</h2>
//       <div className="space-y-3 h-[400px] overflow-y-auto mb-4 p-2 bg-gray-50 rounded">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
//           >
//             <div
//               className={`px-4 py-2 rounded-lg text-white ${msg.sender === 'bot' ? 'bg-blue-500' : 'bg-green-500'}`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Options to select */}
//       {options.length > 0 && (
//         <div className="grid grid-cols-1 gap-2">
//           {options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Satisfaction feedback */}
//       {showSatisfaction && (
//         <div className="mt-4 space-x-4 flex justify-center">
//           <button
//             onClick={() => handleSatisfaction('Yes')}
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//           >
//             ✅ Yes
//           </button>
//           <button
//             onClick={() => handleSatisfaction('No')}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             ❌ No
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
