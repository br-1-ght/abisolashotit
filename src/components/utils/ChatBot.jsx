import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ setCurrentPage, setServiceCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! Welcome to AAS Photography. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleServiceNavigation = (category) => {
    // Close the chatbot first
    setIsOpen(false);
    
    // Set the service category
    if (setServiceCategory) {
      setServiceCategory(category);
    }
    
    // Navigate to services page
    if (setCurrentPage) {
      setCurrentPage('services');
    }
    
    // Scroll to top after a brief delay to ensure page has changed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const FAQ_RESPONSES = {
    services: {
      keywords: ['service', 'services', 'what do you do', 'offer', 'photography', 'videography', 'all services'],
      response: 'We offer:\n• Portrait Photography - Capturing your unique personality\n• Event Photography - Memorable moments from any event\n• Wedding Photography - Your special day preserved beautifully\n• Videography - Professional video coverage',
      hasLink: true,
      linkText: 'View All Services',
      action: () => handleServiceNavigation('All Services')
    },
    portrait: {
      keywords: ['portrait', 'headshot', 'photo shoot', 'individual', 'personal', 'family portrait', 'professional portrait', 'branding photoshoot', 'product photography', 'maternity'],
      response: 'Our Portrait Photography services include:\n• Professional Portrait Session - ₦50,000\n• Family Portrait Package - ₦75,000\n• Personal Branding Photoshoot - ₦100,000\n• Product Photography - ₦40,000\n• Maternity Photoshoot - ₦65,000',
      hasLink: true,
      linkText: 'View Portrait Photography',
      action: () => handleServiceNavigation('Portrait Photography')
    },
    event: {
      keywords: ['event photography', 'birthday', 'party', 'corporate event', 'graduation', 'celebration', 'concert'],
      response: 'Our Event Photography services include:\n• Birthday Party Coverage - ₦80,000\n• Corporate Event Package - ₦150,000\n• Graduation Ceremony - ₦60,000\n• Concert & Live Music Coverage - ₦180,000',
      hasLink: true,
      linkText: 'View Event Photography',
      action: () => handleServiceNavigation('Event Photography')
    },
    wedding: {
      keywords: ['wedding', 'marriage', 'bride', 'groom', 'ceremony', 'traditional wedding', 'destination wedding'],
      response: 'Our Wedding Photography packages include:\n• Premium Wedding Package - ₦500,000\n• Traditional Wedding Coverage - ₦350,000\n• Destination Wedding Package - ₦750,000\n\nAll packages include full-day coverage and professional editing!',
      hasLink: true,
      linkText: 'View Wedding Photography',
      action: () => handleServiceNavigation('Wedding Photography')
    },
    videography: {
      keywords: ['video', 'videography', 'film', 'cinematic', 'wedding video', 'event video', 'commercial video'],
      response: 'Our Videography services include:\n• Event Highlight Video - ₦120,000\n• Wedding Cinematic Film - ₦400,000\n• Commercial Video Production - ₦250,000\n\nAll videos are shot in 4K quality with professional editing!',
      hasLink: true,
      linkText: 'View Videography Services',
      action: () => handleServiceNavigation('Videography')
    },
    pricing: {
      keywords: ['price', 'pricing', 'cost', 'how much', 'rates', 'fee', 'charge', 'package'],
      response: 'Our pricing varies by service:\n• Portrait Photography: ₦40,000 - ₦100,000\n• Event Photography: ₦60,000 - ₦180,000\n• Wedding Photography: ₦350,000 - ₦750,000\n• Videography: ₦120,000 - ₦400,000\n\nFor detailed pricing and custom quotes, contact our customer care team at +234 810 137 9235',
      hasLink: true,
      linkText: 'View All Services & Prices',
      action: () => handleServiceNavigation('All Services')
    },
    booking: {
      keywords: ['book', 'booking', 'reserve', 'schedule', 'appointment', 'available', 'availability'],
      response: 'You can book our services directly through our website using the "Book Now" button. We\'ll need details like:\n• Your name and contact info\n• Event date and venue\n• Type of service needed\n• Any special requests\n\nOr contact us at +234 810 137 9235 to book.',
      hasLink: false
    },
    location: {
      keywords: ['location', 'where', 'address', 'based', 'area', 'lagos'],
      response: 'We are based in Lagos, Nigeria. We serve clients across Lagos and can travel for destination events. Contact us at +234 810 137 9235 for availability in your area.',
      hasLink: false
    },
    contact: {
      keywords: ['contact', 'reach', 'call', 'email', 'phone', 'number', 'get in touch'],
      response: 'You can reach us at:\n📞 Phone: +234 810 137 9235\n📧 Email: avisualsaav@gmail.com\n📍 Location: Lagos, Nigeria\n\nWe\'re available to answer your questions!',
      hasLink: false
    },
    hours: {
      keywords: ['hours', 'time', 'when', 'open', 'working hours', 'business hours'],
      response: 'For our working hours and availability, please contact our customer care team at +234 810 137 9235. We\'re flexible and work around your schedule for events!',
      hasLink: false
    },
    portfolio: {
      keywords: ['portfolio', 'work', 'photos', 'pictures', 'examples', 'gallery', 'see your work'],
      response: 'You can view our portfolio on our website or social media pages:\n• Instagram\n• Facebook\n• TikTok',
      hasLink: true,
      linkText: 'View Our Services',
      action: () => handleServiceNavigation('All Services')
    }
  };

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(input)) {
      return { text: 'Hello! How can I assist you with AAS Photography today?', hasLink: false };
    }

    // Check for thanks
    if (/thank|thanks|appreciate/.test(input)) {
      return { text: 'You\'re welcome! Is there anything else I can help you with?', hasLink: false };
    }

    // Search through FAQ responses - FIXED THIS PART
    for (const [key, faq] of Object.entries(FAQ_RESPONSES)) {
      if (faq.keywords.some(keyword => input.includes(keyword))) {
        return faq;
      }
    }

    // Default response for unmatched queries
    return {
      text: 'I\'m not sure about that specific question. For detailed assistance, please contact our customer care team:\n\n📞 +234 810 137 9235\n📧 avisualsaav@gmail.com\n\nThey\'ll be happy to help you!',
      hasLink: false
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and respond
    setTimeout(() => {
      const response = findBestMatch(inputValue);
      const botResponse = {
        type: 'bot',
        text: response.text || response.response,
        timestamp: new Date(),
        hasLink: response.hasLink,
        linkText: response.linkText,
        action: response.action
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    'Our Services',
    'Wedding Photography',
    'Event Photography',
    'Contact Info'
  ];

  const handleQuickAction = (action) => {
    setInputValue(action);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ background: 'linear-gradient(to right, rgba(6, 1, 51, 0.9), rgba(19, 12, 79, 0.9))' }}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white z-50 hover:scale-110"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div style={{ background: 'linear-gradient(to right, rgba(6, 1, 51, 0.9), rgba(19, 12, 79, 0.9))' }} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ background: 'linear-gradient(to right, rgba(6, 1, 51, 0.9), rgba(19, 12, 79, 0.9))' }} className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white font-bold">
                AAS
              </div>
              <div>
                <h3 className="text-white font-semibold">AAS Photography</h3>
                <p className="text-purple-100 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'text-white'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                  }`}
                  style={message.type === 'user' ? { background: 'linear-gradient(to right, rgba(6, 1, 51, 0.9), rgba(19, 12, 79, 0.9))' } : {}}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.hasLink && message.linkText && (
                    <button
                      onClick={() => message.action()}
                      style={{ background: 'rgba(6, 1, 51, 0.9)' }}
                      className="mt-2 text-white text-xs px-3 py-1.5 rounded-full hover:opacity-80 transition-all inline-flex items-center gap-1"
                    >
                      {message.linkText}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                  <span className={`text-xs mt-1 block ${
                    message.type === 'user' ? 'text-gray-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-200 bg-white">
            <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  style={{ background: 'rgba(6, 1, 51, 0.1)', color: 'rgba(6, 1, 51, 0.9)' }}
                  className="text-xs px-3 py-1.5 rounded-full hover:opacity-80 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                style={{ borderColor: 'rgba(6, 1, 51, 0.3)' }}
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent"
                onFocus={(e) => e.target.style.borderColor = 'rgba(6, 1, 51, 0.9)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6, 1, 51, 0.3)'}
                aria-label="Type your message"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                style={{ background: 'linear-gradient(to right, rgba(6, 1, 51, 0.9), rgba(19, 12, 79, 0.9))' }}
                className="text-white rounded-full p-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;