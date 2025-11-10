// ServicesPage.jsx
import React, { useState, useEffect } from 'react';
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

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Professional photography and videography services tailored to your needs</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="services-controls">
        <div className="search-container">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-overlay">
                    <button
                      className="view-details-btn"
                      onClick={() => openProductDetails(product)}
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
                      <span className="product-price">{product.price}</span>
                      <span className="product-duration">
                        <i className="bi bi-clock"></i> {product.duration}
                      </span>
                    </div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <button
                    className="book-now-btn"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <i className="bi bi-search"></i>
            <p>No services found matching your search criteria</p>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={closeProductDetails}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProductDetails}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <div className="modal-content-wrapper">
              <div className="modal-image-section">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
              </div>
              
              <div className="modal-details-section">
                <span className="modal-category">{selectedProduct.category}</span>
                <h2 className="modal-title">{selectedProduct.title}</h2>
                
                <div className="modal-rating">
                  <i className="bi bi-star-fill"></i>
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
                      <i className="bi bi-clock"></i> {selectedProduct.duration}
                    </span>
                  </div>
                </div>
                
                <div className="features-section">
                  <h3 className="features-heading">What's Included:</h3>
                  <ul className="features-list">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
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
                        <i className="bi bi-gift"></i> {item}
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
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;