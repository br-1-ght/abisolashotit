// servicesData.js - Product Database

export const servicesData = [
  // Portrait Photography
  {
    id: 1,
    title: "Professional Portrait Session",
    category: "Portrait Photography",
    price: "₦50,000",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop",
    rating: 4.9,
    description: "Capture stunning professional portraits with our expert photographers. Perfect for corporate headshots, LinkedIn profiles, and personal branding.",
    features: [
      "2-hour studio session",
      "Professional lighting setup",
      "Multiple outfit changes allowed",
      "50+ edited high-resolution photos",
      "Makeup artist available on request",
      "Online gallery delivery within 5 days"
    ],
    includes: ["Photo retouching", "Digital copies", "Cloud storage access"]
  },
  {
    id: 2,
    title: "Family Portrait Package",
    category: "Portrait Photography",
    price: "₦75,000",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "Create lasting memories with beautiful family portraits. Ideal for family reunions, holiday cards, and generational photos.",
    features: [
      "3-hour photography session",
      "Indoor or outdoor location",
      "Up to 8 family members",
      "100+ edited photos",
      "Props and accessories included",
      "One 16x20 printed photo"
    ],
    includes: ["Professional editing", "USB drive with all photos", "Print rights"]
  },
  {
    id: 3,
    title: "Personal Branding Photoshoot",
    category: "Portrait Photography",
    price: "₦100,000",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    rating: 4.8,
    description: "Elevate your personal brand with a comprehensive photoshoot designed for entrepreneurs, influencers, and professionals.",
    features: [
      "4-hour dedicated session",
      "Multiple locations (up to 3)",
      "Wardrobe consultation included",
      "150+ professional photos",
      "Social media optimization",
      "Brand style guide creation"
    ],
    includes: ["Advanced retouching", "Web-ready formats", "Commercial use license"]
  },

  // Event Photography
  {
    id: 4,
    title: "Birthday Party Coverage",
    category: "Event Photography",
    price: "₦80,000",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    rating: 4.7,
    description: "Capture every joyful moment of your birthday celebration with our comprehensive event coverage.",
    features: [
      "5-hour event coverage",
      "Two professional photographers",
      "Candid and posed shots",
      "200+ edited photos",
      "Same-day highlight reel",
      "Drone photography available"
    ],
    includes: ["Online photo gallery", "Slideshow video", "Print-ready files"]
  },
  {
    id: 5,
    title: "Corporate Event Package",
    category: "Event Photography",
    price: "₦150,000",
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    rating: 4.9,
    description: "Professional documentation of your corporate events, conferences, and business gatherings.",
    features: [
      "Full-day coverage (8 hours)",
      "Team of 3 photographers",
      "Coverage of speakers and attendees",
      "300+ professional photos",
      "Live photo upload option",
      "Branded watermarks available"
    ],
    includes: ["Same-day editing", "Press-ready images", "Event highlights video"]
  },
  {
    id: 6,
    title: "Graduation Ceremony",
    category: "Event Photography",
    price: "₦60,000",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "Commemorate this milestone achievement with professional graduation photography.",
    features: [
      "4-hour ceremony coverage",
      "Individual and group photos",
      "Stage moment capture",
      "150+ edited photos",
      "Photo booth setup available",
      "Commemorative photo book option"
    ],
    includes: ["Expedited delivery", "High-resolution files", "Sharing gallery"]
  },

  // Wedding Photography
  {
    id: 7,
    title: "Premium Wedding Package",
    category: "Wedding Photography",
    price: "₦500,000",
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "Our most comprehensive wedding package capturing every precious moment of your special day.",
    features: [
      "Full-day coverage (12 hours)",
      "Lead photographer + 2 assistants",
      "Pre-wedding consultation",
      "500+ edited photos",
      "Cinematic highlight video (5-7 min)",
      "Same-day teaser photos"
    ],
    includes: ["Premium album (50 pages)", "Parent albums", "Drone photography", "Engagement session"]
  },
  {
    id: 8,
    title: "Traditional Wedding Coverage",
    category: "Wedding Photography",
    price: "₦350,000",
    duration: "8 hours",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
    rating: 4.9,
    description: "Specialized coverage for traditional wedding ceremonies with cultural sensitivity and expertise.",
    features: [
      "8-hour ceremony coverage",
      "Two experienced photographers",
      "Traditional attire photoshoot",
      "400+ edited photos",
      "Cultural moments highlighted",
      "Family portrait sessions"
    ],
    includes: ["Custom album design", "Thank you cards", "Digital delivery"]
  },
  {
    id: 9,
    title: "Destination Wedding Package",
    category: "Wedding Photography",
    price: "₦750,000",
    duration: "2 days",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "Complete coverage for destination weddings including travel and multi-day documentation.",
    features: [
      "2-day full coverage",
      "Travel included (within Nigeria)",
      "Pre-wedding day coverage",
      "800+ edited photos",
      "Documentary-style video (15 min)",
      "Venue scout visit"
    ],
    includes: ["Luxury photo album", "USB in custom box", "Canvas prints (3)", "All travel costs"]
  },

  // Videography
  {
    id: 10,
    title: "Event Highlight Video",
    category: "Videography",
    price: "₦120,000",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    rating: 4.8,
    description: "Capture the energy and emotion of your event with a professionally edited highlight video.",
    features: [
      "5-hour event filming",
      "Two videographers",
      "4K video quality",
      "3-5 minute highlight reel",
      "Cinematic color grading",
      "Licensed background music"
    ],
    includes: ["Raw footage access", "Social media formats", "Cloud delivery"]
  },
  {
    id: 11,
    title: "Wedding Cinematic Film",
    category: "Videography",
    price: "₦400,000",
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "A cinematic masterpiece telling the complete story of your wedding day.",
    features: [
      "Full-day filming (12 hours)",
      "Three-person video team",
      "4K cinema cameras with stabilization",
      "10-15 minute feature film",
      "3-minute trailer",
      "Audio vows recording"
    ],
    includes: ["Drone footage", "Slow-motion shots", "Custom music scoring", "Blu-ray disc"]
  },
  {
    id: 12,
    title: "Commercial Video Production",
    category: "Videography",
    price: "₦250,000",
    duration: "Custom",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    rating: 4.9,
    description: "Professional video production for businesses, products, and promotional content.",
    features: [
      "Pre-production consultation",
      "Scriptwriting assistance",
      "Professional lighting and sound",
      "Multiple revisions included",
      "30-60 second final video",
      "Multi-platform optimization"
    ],
    includes: ["Concept development", "Location scouting", "Talent coordination", "Commercial license"]
  },

  // Additional Services
  {
    id: 13,
    title: "Product Photography",
    category: "Portrait Photography",
    price: "₦40,000",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    rating: 4.7,
    description: "Professional product photography for e-commerce, catalogs, and marketing materials.",
    features: [
      "Up to 20 products",
      "White background studio shots",
      "Lifestyle shots included",
      "50+ edited photos",
      "Multiple angles per product",
      "Fast 48-hour turnaround"
    ],
    includes: ["Background removal", "Color correction", "Web-optimized files"]
  },
  {
    id: 14,
    title: "Maternity Photoshoot",
    category: "Portrait Photography",
    price: "₦65,000",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1520483601560-389b88a8f05e?w=800&h=600&fit=crop",
    rating: 5.0,
    description: "Beautiful maternity photography celebrating the journey to motherhood.",
    features: [
      "2-hour indoor/outdoor session",
      "Maternity gowns provided",
      "Partner and sibling photos included",
      "60+ edited photos",
      "Bump painting available",
      "Comfortable posing guidance"
    ],
    includes: ["Makeup artist", "Digital gallery", "Print package option"]
  },
  {
    id: 15,
    title: "Concert & Live Music Coverage",
    category: "Event Photography",
    price: "₦180,000",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    rating: 4.8,
    description: "Dynamic concert photography capturing the energy and atmosphere of live performances.",
    features: [
      "6-hour concert coverage",
      "Specialized low-light equipment",
      "Stage and crowd shots",
      "250+ edited photos",
      "Backstage access photos",
      "Same-night social media edits"
    ],
    includes: ["Artist performance rights", "Press kit photos", "High-speed delivery"]
  }
];

export const categories = [
  "All Services",
  "Portrait Photography",
  "Event Photography",
  "Wedding Photography",
  "Videography"
];

export default servicesData;