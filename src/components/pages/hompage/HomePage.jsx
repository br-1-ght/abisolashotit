import React from 'react';
import './HomePage.css';

const HomePage = ({ setShowBookingForm }) => {
  return (
    <>
      <div className="hero">
        <h2 className="hero-title-small">One stop-shop for the</h2>
        <h1 className="hero-title-large">Best Pictures</h1>
        <p className="hero-subtitle">The best way to preserve your memories.</p>
        <button className="book-btn" onClick={() => setShowBookingForm(true)}>
          Book Now
        </button>
      </div>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="section-underline"></div>

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
                  <img src="./assets/images/aas-hero-image.jpg" alt="Igwe Bright" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item tall">
            <img src="../assets/images/image-1.jpg" alt="" />
          </div>
          <div className="gallery-item">
             <img src="../assets/images/DSC_4365.jpg" alt="" />
          </div>
          <div className="gallery-item">
             <img src="../assets/images/DSC_2190do.jpg" alt="" />
          </div>
          <div className="gallery-item">
             <img src="../assets/images/DSC_9639do.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_5116do.jpg" alt="" />
          </div>
          <div className="gallery-item wide">
            <img src="../assets/images/image-3.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_5084do.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_6898.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_2500AA.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_6955.jpg" alt="" />
          </div>
          <div className="gallery-item tall">
            <img src="../assets/images/DSC_7884-copy2.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_3996do.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/DSC_1945.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;