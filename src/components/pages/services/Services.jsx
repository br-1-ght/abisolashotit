// ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {servicesData, categories} from './serviceData';
import './Services.css';

const ServicesPage = ({ setShowBookingForm, initialCategory, setServiceCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Update selected category when initialCategory changes (from footer clicks)
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Reset to "All Services" when search is active
  useEffect(() => {
    if (searchQuery && selectedCategory !== 'All Services') {
      setSelectedCategory('All Services');
    }
  }, [searchQuery]);

  // Filter products based on category and search
  const filteredProducts = servicesData.filter(product => {
    const matchesCategory = selectedCategory === 'All Services' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing category
    if (setServiceCategory) {
      setServiceCategory(category);
    }
  };

  // Dynamic page title based on selected category
  const getPageTitle = () => {
    if (selectedCategory === 'All Services') {
      return 'Photography Services in Lagos | Wedding, Event & Portrait Photography';
    }
    return `${selectedCategory} Services Lagos | Professional Photography Packages`;
  };

  const getPageDescription = () => {
    if (selectedCategory === 'All Services') {
      return 'Explore our comprehensive photography services in Lagos: Wedding photography, event coverage, portrait sessions, commercial photography & more. Professional packages with competitive pricing.';
    }
    return `Professional ${selectedCategory.toLowerCase()} services in Lagos, Nigeria. Premium photography packages with expert photographers, state-of-the-art equipment, and quick turnaround.`;
  };

  // Structured Data for Services
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AAS Photography Services",
    "description": "Professional photography and videography services in Lagos, Nigeria",
    "numberOfItems": servicesData.length,
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "AAS Photography",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lagos",
            "addressCountry": "NG"
          }
        },
        "category": service.category,
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/[₦,]/g, ''),
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": service.rating,
          "bestRating": "5.0",
          "ratingCount": "50"
        },
        "image": `https://www.aasphotography.com${service.image}`,
        "additionalProperty": service.features.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      }
    }))
  };

  // Service Catalog Schema
  const serviceCatalogData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "AAS Photography Service Packages",
    "itemListElement": servicesData.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "serviceType": service.category
      },
      "price": service.price.replace(/[₦,]/g, ''),
      "priceCurrency": "NGN"
    }))
  };

  // Breadcrumb Schema
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.aasphotography.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.aasphotography.com/services"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{getPageTitle()}</title>
        <meta name="title" content={getPageTitle()} />
        <meta name="description" content={getPageDescription()} />
        <meta 
          name="keywords" 
          content="photography services Lagos, wedding photography packages Nigeria, event photography prices Lagos, portrait photography services, commercial photography Lagos, photography pricing Nigeria, professional photographer packages, videography services Lagos, photography and videography Lagos, affordable photography Nigeria, premium photography services, Lagos photography studio, Nigerian photographer services, photography booking Lagos" 
        />
        <link rel="canonical" href="https://www.aasphotography.com/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aasphotography.com/services" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta 
          property="og:image" 
          content="https://www.aasphotography.com/assets/images/services-preview.jpg" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AAS Photography Services - Professional photography packages in Lagos" />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:site_name" content="AAS Photography" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aasphotography.com/services" />
        <meta property="twitter:title" content={getPageTitle()} />
        <meta property="twitter:description" content={getPageDescription()} />
        <meta 
          property="twitter:image" 
          content="https://www.aasphotography.com/assets/images/services-preview.jpg" 
        />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(servicesStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceCatalogData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <div className="services-page">
        {/* Hero Section */}
        <div className="services-hero">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Professional photography and videography services tailored to your needs</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="services-controls">
          <div className="search-container">
            <i className="bi bi-search search-icon" aria-hidden="true"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search photography services"
            />
          </div>

          <div className="filter-container" role="tablist" aria-label="Filter services by category">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid" role="list" aria-label="Photography services">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card" role="listitem">
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={`${product.title} - ${product.category} photography service in Lagos`}
                      className="product-image"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    <div className="product-overlay">
                      <button
                        className="view-details-btn"
                        onClick={() => openProductDetails(product)}
                        aria-label={`View details for ${product.title}`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="product-content">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <div className="product-info">
                        <span className="product-price" aria-label={`Price: ${product.price}`}>
                          {product.price}
                        </span>
                        <span className="product-duration">
                          <i className="bi bi-clock" aria-hidden="true"></i> {product.duration}
                        </span>
                      </div>
                      <div className="product-rating" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                        <i className="bi bi-star-fill" aria-hidden="true"></i>
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <button
                      className="book-now-btn"
                      onClick={() => setShowBookingForm(true)}
                      aria-label={`Book ${product.title} service`}
                    >
                      Book Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results" role="status">
              <i className="bi bi-search" aria-hidden="true"></i>
              <p>No services found matching your search criteria</p>
            </div>
          )}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div 
            className="product-modal-overlay" 
            onClick={closeProductDetails}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn" 
                onClick={closeProductDetails}
                aria-label="Close service details"
              >
                <i className="bi bi-x-lg" aria-hidden="true"></i>
              </button>
              
              <div className="modal-content-wrapper">
                <div className="modal-image-section">
                  <img 
                    src={selectedProduct.image} 
                    alt={`${selectedProduct.title} - Detailed view of ${selectedProduct.category} photography package`}
                    className="modal-image"
                    width="600"
                    height="450"
                  />
                </div>
                
                <div className="modal-details-section">
                  <span className="modal-category">{selectedProduct.category}</span>
                  <h2 id="modal-title" className="modal-title">{selectedProduct.title}</h2>
                  
                  <div className="modal-rating" aria-label={`Rated ${selectedProduct.rating} out of 5 stars`}>
                    <i className="bi bi-star-fill" aria-hidden="true"></i>
                    <span>{selectedProduct.rating} Rating</span>
                  </div>
                  
                  <p className="modal-description">{selectedProduct.description}</p>
                  
                  <div className="modal-price-duration">
                    <div className="price-tag">
                      <span className="price-label">Price</span>
                      <span className="price-value">{selectedProduct.price}</span>
                    </div>
                    <div className="duration-tag">
                      <span className="duration-label">Duration</span>
                      <span className="duration-value">
                        <i className="bi bi-clock" aria-hidden="true"></i> {selectedProduct.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="features-section">
                    <h3 className="features-heading">What's Included:</h3>
                    <ul className="features-list">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="includes-section">
                    <h3 className="includes-heading">Additional Benefits:</h3>
                    <div className="includes-tags">
                      {selectedProduct.includes.map((item, index) => (
                        <span key={index} className="include-tag">
                          <i className="bi bi-gift" aria-hidden="true"></i> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    className="modal-book-btn"
                    onClick={() => {
                      closeProductDetails();
                      setShowBookingForm(true);
                    }}
                    aria-label={`Book ${selectedProduct.title} service now`}
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesPage;