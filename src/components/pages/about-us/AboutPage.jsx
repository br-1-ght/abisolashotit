import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About-us.css';

const AboutPage = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AAS Photography",
    "image": "https://www.aasphotography.com/assets/images/aas-hero-image.jpg",
    "description": "Professional photography studio in Lagos, Nigeria. Specializing in wedding photography, event coverage, portrait photography, and commercial photography since 2015.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "url": "https://www.aasphotography.com/about",
    "telephone": "+234-XXX-XXX-XXXX",
    "priceRange": "₦₦₦",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "foundingDate": "2015",
    "slogan": "Capturing Life's Most Precious Moments Since 2015",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "geoRadius": "50000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Photography",
            "description": "Professional wedding photography and videography services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Photography",
            "description": "Corporate and social event photography coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portrait Photography",
            "description": "Professional portrait and headshot photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Photography",
            "description": "Product and commercial photography for businesses"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About AAS Photography | Professional Photography Studio in Lagos, Nigeria</title>
        <meta 
          name="title" 
          content="About AAS Photography | Professional Photography Studio in Lagos, Nigeria" 
        />
        <meta 
          name="description" 
          content="Learn about AAS Photography, Lagos's premier photography studio since 2015. Specializing in wedding photography, event coverage, portraits, and commercial photography. 10+ years of experience capturing life's precious moments." 
        />
        <meta 
          name="keywords" 
          content="photography studio Lagos, wedding photographer Nigeria, event photography Lagos, portrait photographer, commercial photography Nigeria, professional photographer Lagos, AAS Photography, photography services Nigeria, best photographer Lagos, wedding videography Lagos" 
        />
        <meta name="author" content="AAS Photography" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aasphotography.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aasphotography.com/about" />
        <meta 
          property="og:title" 
          content="About AAS Photography | Professional Photography Studio in Lagos" 
        />
        <meta 
          property="og:description" 
          content="Discover AAS Photography - Lagos's trusted photography studio since 2015. Expert wedding, event, portrait, and commercial photography services with 10+ years experience." 
        />
        <meta 
          property="og:image" 
          content="https://www.aasphotography.com/assets/images/aas-hero-image.jpg" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:site_name" content="AAS Photography" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aasphotography.com/about" />
        <meta 
          property="twitter:title" 
          content="About AAS Photography | Professional Photography Studio in Lagos" 
        />
        <meta 
          property="twitter:description" 
          content="Discover AAS Photography - Lagos's trusted photography studio since 2015. Expert wedding, event, portrait, and commercial photography services." 
        />
        <meta 
          property="twitter:image" 
          content="https://www.aasphotography.com/assets/images/aas-hero-image.jpg" 
        />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About AAS Photography</h1>
            <p className="about-hero-subtitle">
              Capturing Life's Most Precious Moments Since 2015
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="our-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <p className="story-paragraph">
                  AAS Photography was founded in 2015 with a simple mission: to capture the 
                  authentic emotions and unforgettable moments that make life beautiful. What 
                  started as a passion project has grown into a full-service photography studio 
                  serving clients across Lagos and beyond.
                </p>
                <p className="story-paragraph">
                  Our journey began when our founder discovered the power of photography to 
                  preserve memories and tell stories. Over the years, we've had the privilege 
                  of documenting countless weddings, events, and personal milestones, always 
                  striving to capture the genuine essence of each moment.
                </p>
                <p className="story-paragraph">
                  Today, we're proud to be one of Lagos's most trusted photography studios, 
                  known for our creative vision, professional service, and dedication to 
                  exceeding client expectations.
                </p>
              </div>
              <div className="story-image">
                <div className="hero-image">
                  <div className="image-container">
                    <img 
                      src="./assets/images/aas-hero-image.jpg" 
                      alt="AAS Photography Studio - Professional Wedding and Event Photographer in Lagos" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-box">
                <div className="mv-icon">
                  <i className="bi bi-camera" aria-hidden="true"></i>
                </div>
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">
                  To create timeless photographs that capture authentic emotions and tell 
                  compelling stories, providing our clients with cherished memories they'll 
                  treasure for generations.
                </p>
              </div>
              <div className="vision-box">
                <div className="mv-icon">
                  <i className="bi bi-eye" aria-hidden="true"></i>
                </div>
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">
                  To be the leading photography studio in Nigeria, recognized for our 
                  artistic excellence, innovative approach, and unwavering commitment to 
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <div className="container">
            <h2 className="section-title center">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-heart" aria-hidden="true"></i>
                </div>
                <h3 className="value-title">Passion</h3>
                <p className="value-text">
                  We approach every project with genuine enthusiasm and love for our craft.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-star" aria-hidden="true"></i>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">
                  We strive for perfection in every shot, ensuring the highest quality results.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-people" aria-hidden="true"></i>
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">
                  We build trust through honest communication and reliable service delivery.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="bi bi-lightbulb" aria-hidden="true"></i>
                </div>
                <h3 className="value-title">Creativity</h3>
                <p className="value-text">
                  We bring fresh perspectives and innovative ideas to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="container">
            <h2 className="section-title center">Why Choose AAS Photography</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <h3 className="feature-title">Professional Experience</h3>
                <p className="feature-text">
                  Over 10 years of experience covering hundreds of events and creating 
                  thousands of memorable photographs.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">02</div>
                <h3 className="feature-title">State-of-the-Art Equipment</h3>
                <p className="feature-text">
                  We use the latest professional photography and videography equipment 
                  to ensure exceptional quality.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">03</div>
                <h3 className="feature-title">Personalized Service</h3>
                <p className="feature-text">
                  We take time to understand your vision and preferences, tailoring our 
                  approach to your unique needs.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-number">04</div>
                <h3 className="feature-title">Quick Turnaround</h3>
                <p className="feature-text">
                  Receive your professionally edited photos and videos within 2-3 weeks 
                  of your event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Create Beautiful Memories?</h2>
              <p className="cta-text">
                Let's work together to capture your special moments with creativity and passion.
              </p>
              <button className="cta-button" onClick={() => window.scrollTo(0, 0)}>
                Book a Session
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;