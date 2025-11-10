import React from 'react';
import './About-us.css';

const AboutPage = () => {
  return (
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
                  <img src="./assets/images/aas-hero-image.jpg" alt="Igwe Bright" />
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
                <i className="bi bi-camera"></i>
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
                <i className="bi bi-eye"></i>
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
                <i className="bi bi-heart"></i>
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-text">
                We approach every project with genuine enthusiasm and love for our craft.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">
                We strive for perfection in every shot, ensuring the highest quality results.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-text">
                We build trust through honest communication and reliable service delivery.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="bi bi-lightbulb"></i>
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
  );
};

export default AboutPage;