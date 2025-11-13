import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './HomePage.css';

const HomePage = ({ setShowBookingForm, setCurrentPage }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const galleryImages = [
    { src: "/assets/images/image-1.jpg", alt: "Professional wedding in Lagos - Elegant bride portrait", className: "tall" },
    { src: "/assets/images/DSC_4365.jpg", alt: "Nigerian traditional wedding - Couple in traditional attire", className: "" },
    { src: "/assets/images/DSC_2190do.jpg", alt: "Event coverage Lagos - Corporate event", className: "" },
    { src: "/assets/images/DSC_9639do.jpg", alt: "Portrait session Lagos - Professional headshots", className: "" },
    { src: "/assets/images/DSC_5116do.jpg", alt: "Wedding reception - Beautiful venue decoration", className: "" },
    { src: "/assets/images/image-3.jpg", alt: "Outdoor wedding Nigeria - Garden wedding ceremony", className: "wide" },
    { src: "/assets/images/DSC_5084do.jpg", alt: "Lagos wedding photographer - Romantic couple moments", className: "" },
    { src: "/assets/images/DSC_6898.jpg", alt: "Family portrait session - Group session", className: "" },
    { src: "/assets/images/DSC_2500AA.jpg", alt: "Birthday event Lagos - Celebration moments", className: "" },
    { src: "/assets/images/DSC_6955.jpg", alt: "Professional coverage Lagos - Candid event shots", className: "" },
    { src: "/assets/images/DSC_7884-copy2.jpg", alt: "Engagement shoot Nigeria - Pre-wedding photoshoot", className: "tall" },
    { src: "/assets/images/DSC_3996do.jpg", alt: "Commercial shoot Lagos - Product and business", className: "" },
    { src: "/assets/images/DSC_1945.jpg", alt: "Event videography Lagos - Professional video coverage", className: "" }
  ];

  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.aasphotography.com",
    "name": "AAS Photography",
    "image": [
      "https://www.aasphotography.com/assets/images/aas-hero-image.jpg",
      "https://www.aasphotography.com/assets/images/image-1.jpg",
      "https://www.aasphotography.com/assets/images/image-3.jpg"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.aasphotography.com/assets/logo.png",
      "width": "250",
      "height": "60"
    },
    "description": "AAS Photography - Professional wedding, event, portrait and commercial photography services in Lagos, Nigeria. Capturing life's precious moments since 2015 with state-of-the-art equipment and creative vision.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "url": "https://www.aasphotography.com",
    "telephone": "+234-XXX-XXX-XXXX",
    "email": "info@aasphotography.com",
    "priceRange": "₦₦₦",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/aasphotography",
      "https://www.instagram.com/aasphotography",
      "https://twitter.com/aasphotography"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Photography Package",
            "description": "Complete wedding day photography coverage with album and digital copies",
            "serviceType": "Wedding Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Photography Package",
            "description": "Professional coverage for corporate events, birthdays, and special occasions",
            "serviceType": "Event Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portrait Photography Session",
            "description": "Studio and outdoor portrait photography for individuals and families",
            "serviceType": "Portrait Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Photography",
            "description": "Product photography, corporate headshots, and business photography",
            "serviceType": "Commercial Photography"
          }
        }
      ]
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.aasphotography.com"
      }
    ]
  };

  // Image Gallery Structured Data
  const imageGalleryData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AAS Photography Portfolio",
    "description": "Professional portfolio showcasing wedding, event, portrait and commercial work in Lagos, Nigeria",
    "image": galleryImages.map(img => ({
      "@type": "ImageObject",
      "contentUrl": `https://www.aasphotography.com${img.src}`,
      "description": img.alt
    }))
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>AAS Photography | Professional Wedding & Event Photographer in Lagos, Nigeria</title>
        <meta name="title" content="AAS Photography | Professional Wedding & Event Photographer in Lagos, Nigeria" />
        <meta name="description" content="Premier photography studio in Lagos specializing in wedding photography, event coverage, portraits & commercial photography. 10+ years experience. Book your session today! Free album with every booking." />
        <meta name="keywords" content="photography Lagos, wedding photographer Nigeria, event photographer Lagos, portrait photography Nigeria, commercial photographer Lagos, professional photographer Lagos, wedding photography packages Lagos, Nigerian wedding photographer, Lagos event photography, best photographer Nigeria, photography services Lagos, photo album Lagos, wedding videography Lagos" />
        <link rel="canonical" href="https://www.aasphotography.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aasphotography.com" />
        <meta property="og:title" content="AAS Photography | Best Wedding & Event Photographer in Lagos" />
        <meta property="og:description" content="Capture life's precious moments with AAS Photography. Professional wedding, event & portrait photography in Lagos. Special offer: Free album with every booking!" />
        <meta property="og:image" content="https://www.aasphotography.com/assets/images/aas-hero-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AAS Photography - Professional photographer in Lagos, Nigeria" />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:site_name" content="AAS Photography" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aasphotography.com" />
        <meta property="twitter:title" content="AAS Photography | Best Wedding & Event Photographer in Lagos" />
        <meta property="twitter:description" content="Capture life's precious moments with AAS Photography. Professional wedding, event & portrait photography in Lagos. Free album with every booking!" />
        <meta property="twitter:image" content="https://www.aasphotography.com/assets/images/aas-hero-image.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="AAS Photography" />
        <meta name="copyright" content="© 2025 AAS Photography. All rights reserved." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(imageGalleryData)}</script>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-title-small">One stop-shop for the</h2>
        <h1 className="hero-title-large">Best Pictures</h1>
        <p className="hero-subtitle">The best way to preserve your memories.</p>
        <button 
          className="book-btn" 
          onClick={() => {
            setCurrentPage('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="View our services and book a session"
        >
          Book Now
        </button>
      </div>

      {/* Our Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="section-underline" role="presentation"></div>

        <div className="offer-section">
          <div className="offer-content">
            <h3 className="offer-title">Get Album at offer price for each booking</h3>
            <p className="offer-text">
              Because when a visitor first lands on your website, you're a stranger to them. 
              They have to get to know you in order to want to read your blog posts, 
              subscribe to your email newsletter, or buy what you're selling.
            </p>
            <p className="offer-text">
              We are really amazed to provide you this offer and make your events memorable. 
              This will be an amazing addition to all your events. And of course, prints 
              always have a special feel and place in your heart.
            </p>
          </div>
          <div className="offer-image">
            <div className="photo-album">
              <div className="hero-image">
                <div className="image-container">
                  <img 
                    src="/assets/images/aas-hero-image.jpg" 
                    alt="Professional photographer in Lagos showcasing premium album - AAS Photography"
                    loading="eager"
                    width="600"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-grid" role="region" aria-label="Portfolio gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className={`gallery-item ${image.className}`}>
              <img 
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width="400"
                height="400"
                onLoad={() => handleImageLoad(index)}
                className={loadedImages.has(index) ? 'fade-in' : ''}
                style={{ 
                  opacity: loadedImages.has(index) ? 1 : 0 
                }}
              />
              {!loadedImages.has(index) && (
                <div className="image-placeholder" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;