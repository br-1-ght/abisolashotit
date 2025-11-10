import React, { useState } from 'react';
import HomePage from './components/pages/hompage/HomePage';
import AboutPage from './components/pages/about-us/AboutPage';
import ServicesPage from './components/pages/services/Services';
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
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <img src="../assets/logos/aas-logo.png" alt="" />
        </div>
      </div>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a className="nav-link" onClick={() => handleNavClick('home')}>Home</a>
        <a className="nav-link" onClick={() => handleNavClick('about')}>About</a>
        <a className="nav-link" onClick={() => handleNavClick('services')}>Services</a>
        <button className="contact-btn">742-873-0894</button>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = ({ setCurrentPage, setServiceCategory }) => {
  const handleServiceClick = (category) => {
    setServiceCategory(category);
    setCurrentPage('services');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon">
              <img src="../assets/logos/aas-logo.png" alt="" />
            </div>
            <span className="logo-text">AAS Photography</span>
          </div>
          <p className="footer-tagline">Capturing your precious moments with passion and creativity</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social-icon" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <a className="footer-link" onClick={() => setCurrentPage('home')}>Home</a>
            <a className="footer-link" onClick={() => setCurrentPage('about')}>About Us</a>
            <a className="footer-link" onClick={() => setCurrentPage('services')}>Services</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <div className="footer-links">
            <a className="footer-link" onClick={() => handleServiceClick('Portrait Photography')}>Portrait Photography</a>
            <a className="footer-link" onClick={() => handleServiceClick('Event Photography')}>Event Photography</a>
            <a className="footer-link" onClick={() => handleServiceClick('Wedding Photography')}>Wedding Photography</a>
            <a className="footer-link" onClick={() => handleServiceClick('Videography')}>Videography</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-icon"> <i className="bi bi-telephone"></i> </span>
              <a href="tel:7428730894" className="contact-link">742-873-0894</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><i className="bi bi-envelope"></i> </span>
              <a href="mailto:info@aasphotography.com" className="contact-link">info@aasphotography.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"> <i className="bi bi-geo"></i> </span>
              <span className="contact-text">Lagos, Nigeria</span>
            </div>
          </div>
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
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setShowBookingForm(false)}>×</button>
      <h2 className="form-title">Book Now</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
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
            <label className="form-label">Contact No</label>
            <input
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
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-input ${formData.email && !emailError ? 'valid' : ''} ${emailError ? 'error' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
              placeholder="alexdaviswl@gmail.com"
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Event Name</label>
            <input
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
          <label className="form-label">Event venue</label>
          <input
            type="text"
            name="venue"
            className="form-input"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Wedding Garden, Heritage Road, Mumbai-400052"
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label">Choose your service</label>
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
        </div>

        <div className="form-group full-width">
          <label className="form-label">Any Special Request</label>
          <textarea
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
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="success-container">
        <div className="success-icon">
          <div className="checkmark"></div>
        </div>
        <h2 className="success-title">Booked</h2>
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

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      
      <Router currentPage={currentPage}>
        <Route path="home">
          <HomePage setShowBookingForm={setShowBookingForm} />
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
    </div>
  );
}

export default App;