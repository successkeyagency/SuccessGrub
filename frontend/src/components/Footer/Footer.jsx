import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-grid">

        <div className="footer-built animate-slide-up">
          <h4>Made by</h4>
          <img src={assets.successkeyAgency_logo} alt="" className='footer-logo' />
          <p>
            <strong>SuccessKeyAgency LLC</strong><br />
            Custom Web Solutions for Restaurants & Brands<br />
            <a href="https://successkeyagency.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              www.successkeyagency.com
            </a>
          </p>
        </div>

        <div className="footer-links animate-slide-up">
          <h4>Menu</h4>
          <ul>
            <li>Top Dishes</li>
            <li>Specials</li>
            <li>Beverages</li>
            <li>Desserts</li>
          </ul>
        </div>

        <div className="footer-contact animate-fade">
          <h4>Connect with Us</h4>
          <p>333-221-2134</p>
          <p>support@successgrub.com</p>
        </div>

        

      </div>

      <div className="footer-bottom animate-fade-slow">
        <p>&copy; 2025 SuccessGrub. Built by <strong>William Ngumo</strong> from <strong>SuccessKeyAgency LLC</strong>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
