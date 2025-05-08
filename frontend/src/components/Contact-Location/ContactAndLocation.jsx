import React from 'react';
import './ContactAndLocation.css';

const ContactAndLocation = () => {
  return (
    <div className="contact-location">
      <h2>Visit & Contact Us</h2>
      
      <div className="contact-location-container">
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            src="https://maps.google.com/maps?q=123%20Luxury%20Avenue%20Food%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactAndLocation;
