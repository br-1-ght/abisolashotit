import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomePage from './components/pages/hompage/HomePage';
import AboutPage from './components/pages/about-us/AboutPage';
import ServicesPage from './components/pages/services/Services';
import Chatbot from './components/utils/ChatBot';
import './App.css';

// Simple Router Component
const Router = ({ children, currentPage }) => {
  return children.find(child => child.props.path === currentPage);
};

const Route = ({ path, children }) => {
  return children;
};

// Header Component
const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyPress = (e, page) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(page);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <img src="../assets/logos/aas-logo.png" alt="AAS Photography Logo" />
        </div>
      </div>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`} role="navigation">
        <button 
          className="nav-link" 
          onClick={() => handleNavClick('home')}
          onKeyPress={(e) => handleKeyPress(e, 'home')}
        >
          Home
        </button>
        <button 
          className="nav-link" 
          onClick={() => handleNavClick('about')}
          onKeyPress={(e) => handleKeyPress(e, 'about')}
        >
          About
        </button>
        <button 
          className="nav-link" 
          onClick={() => handleNavClick('services')}
          onKeyPress={(e) => handleKeyPress(e, 'services')}
        >
          Services
        </button>
        <button className="contact-btn">
          <a href="tel:+2348101379235" className="contact-btn-link">+234 810 137 9235</a>
        </button>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = ({ setCurrentPage, setServiceCategory }) => {
  const handleServiceClick = (category) => {
    setServiceCategory(category);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon">
              <img src="../assets/logos/aas-logo.png" alt="AAS Photography Logo" />
            </div>
            <span className="logo-text">AAS Photography</span>
          </div>
          <p className="footer-tagline">Capturing your precious moments with passion and creativity</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/abisola_shotit?igsh=MXd5YXl6b3B6MWw=" 
              className="social-icon" 
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a 
              href="https://www.facebook.com/share/19spJ3diNR/" 
              className="social-icon" 
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a 
              href="https://www.tiktok.com/@abisola_shotit?_r=1&_t=ZS-91J5e9MEJYm" 
              className="social-icon" 
              aria-label="Follow us on TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <nav className="footer-links" aria-label="Quick navigation links">
            <button 
              className="footer-link" 
              onClick={() => setCurrentPage('home')}
              onKeyPress={(e) => handleKeyPress(e, () => setCurrentPage('home'))}
            >
              Home
            </button>
            <button 
              className="footer-link" 
              onClick={() => setCurrentPage('about')}
              onKeyPress={(e) => handleKeyPress(e, () => setCurrentPage('about'))}
            >
              About Us
            </button>
            <button 
              className="footer-link" 
              onClick={() => setCurrentPage('services')}
              onKeyPress={(e) => handleKeyPress(e, () => setCurrentPage('services'))}
            >
              Services
            </button>
          </nav>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <nav className="footer-links" aria-label="Photography services">
            <button 
              className="footer-link" 
              onClick={() => handleServiceClick('Portrait Photography')}
              onKeyPress={(e) => handleKeyPress(e, () => handleServiceClick('Portrait Photography'))}
            >
              Portrait Photography
            </button>
            <button 
              className="footer-link" 
              onClick={() => handleServiceClick('Event Photography')}
              onKeyPress={(e) => handleKeyPress(e, () => handleServiceClick('Event Photography'))}
            >
              Event Photography
            </button>
            <button 
              className="footer-link" 
              onClick={() => handleServiceClick('Wedding Photography')}
              onKeyPress={(e) => handleKeyPress(e, () => handleServiceClick('Wedding Photography'))}
            >
              Wedding Photography
            </button>
            <button 
              className="footer-link" 
              onClick={() => handleServiceClick('Videography')}
              onKeyPress={(e) => handleKeyPress(e, () => handleServiceClick('Videography'))}
            >
              Videography
            </button>
          </nav>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="footer-contact">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true"> <i className="bi bi-telephone"></i> </span>
              <a href="tel:+2348101379235" className="contact-link">+234 810 137 9235</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true"><i className="bi bi-envelope"></i> </span>
              <a href="mailto:avisualsaav@gmail.com" className="contact-link">avisualsaav@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true"> <i className="bi bi-geo"></i> </span>
              <span className="contact-text">Lagos, Nigeria</span>
            </div>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 AAS Photography. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy" className="legal-link">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#terms" className="legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// Booking Form Modal
const BookingFormModal = ({ 
  setShowBookingForm, 
  formData, 
  handleInputChange, 
  handleSubmit, 
  emailError 
}) => (
  <div className="modal-overlay" onClick={() => setShowBookingForm(false)}>
    <div 
      className="modal-content" 
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-form-title"
    >
      <button 
        className="close-btn" 
        onClick={() => setShowBookingForm(false)}
        aria-label="Close booking form"
      >
        ×
      </button>
      <h2 id="booking-form-title" className="form-title">Book Now</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Alex Davis"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contact">Contact No</label>
            <input
              id="contact"
              type="tel"
              name="contact"
              className="form-input"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="17015550152"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={`form-input ${formData.email && !emailError ? 'valid' : ''} ${emailError ? 'error' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
              placeholder="alexdaviswl@gmail.com"
              required
              aria-invalid={emailError ? 'true' : 'false'}
              aria-describedby={emailError ? 'email-error' : undefined}
            />
            {emailError && <span id="email-error" className="error-message" role="alert">{emailError}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="eventName">Event Name</label>
            <input
              id="eventName"
              type="text"
              name="eventName"
              className="form-input"
              value={formData.eventName}
              onChange={handleInputChange}
              placeholder="Wedding"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="venue">Event venue</label>
          <input
            id="venue"
            type="text"
            name="venue"
            className="form-input"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Wedding Garden, Heritage Road, Lagos"
          />
        </div>

        <div className="form-group full-width">
          <fieldset>
            <legend className="form-label">Choose your service</legend>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="service"
                  value="portrait"
                  className="radio-input"
                  checked={formData.service === 'portrait'}
                  onChange={handleInputChange}
                />
                Portrait Photography
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="service"
                  value="event"
                  className="radio-input"
                  checked={formData.service === 'event'}
                  onChange={handleInputChange}
                />
                Event Photography
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="service"
                  value="videograph"
                  className="radio-input"
                  checked={formData.service === 'videograph'}
                  onChange={handleInputChange}
                />
                Videograph
              </label>
            </div>
          </fieldset>
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="specialRequest">Any Special Request</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            className="form-textarea"
            value={formData.specialRequest}
            onChange={handleInputChange}
            placeholder="We would like to additionally avail video shoot for the event."
          />
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  </div>
);

// Success Page Modal
const SuccessModal = ({ resetBooking }) => (
  <div className="modal-overlay" onClick={resetBooking}>
    <div 
      className="modal-content" 
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <div className="success-container">
        <div className="success-icon" aria-hidden="true">
          <div className="checkmark"></div>
        </div>
        <h2 id="success-title" className="success-title">Booked</h2>
        <p className="success-message">Thank you for registering for our event.</p>
        <button className="home-btn" onClick={resetBooking}>Back to Home</button>
      </div>
    </div>
  </div>
);

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [serviceCategory, setServiceCategory] = useState('All Services');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    eventName: '',
    venue: '',
    service: 'event',
    specialRequest: ''
  });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && formData.email && formData.name && formData.contact) {
      setBookingSuccess(true);
      setShowBookingForm(false);
    }
  };

  const resetBooking = () => {
    setBookingSuccess(false);
    setShowBookingForm(false);
    setFormData({
      name: '',
      contact: '',
      email: '',
      eventName: '',
      venue: '',
      service: 'event',
      specialRequest: ''
    });
    setEmailError('');
  };

  // Get page title for Helmet
  const getPageTitle = () => {
    switch(currentPage) {
      case 'home':
        return 'AAS Photography | Professional Wedding & Event Photographer in Lagos, Nigeria';
      case 'about':
        return 'About AAS Photography | Professional Photography Studio in Lagos, Nigeria';
      case 'services':
        return 'Photography Services in Lagos | Wedding, Event & Portrait Photography';
      default:
        return 'AAS Photography | Professional Photography Services in Lagos';
    }
  };

  return (
    <div className="app">
      {/* Global SEO Meta Tags */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header setCurrentPage={setCurrentPage} />
      
      <main role="main">
        <Router currentPage={currentPage}>
          <Route path="home">
            <HomePage 
              setShowBookingForm={setShowBookingForm}
              setCurrentPage={setCurrentPage}
            />
          </Route>
          <Route path="about">
            <AboutPage />
          </Route>
          <Route path="services">
            <ServicesPage 
              setShowBookingForm={setShowBookingForm}
              initialCategory={serviceCategory}
              setServiceCategory={setServiceCategory}
            />
          </Route>
        </Router>
      </main>

      <Footer 
        setCurrentPage={setCurrentPage}
        setServiceCategory={setServiceCategory}
      />

      {showBookingForm && (
        <BookingFormModal 
          setShowBookingForm={setShowBookingForm}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          emailError={emailError}
        />
      )}
      
      {bookingSuccess && <SuccessModal resetBooking={resetBooking} />}
      <Chatbot 
        setCurrentPage={setCurrentPage}
        setServiceCategory={setServiceCategory}
      />
    </div>
  );
}

export default App;