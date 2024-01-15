import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.jpeg';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsap_icon from '../Assets/whatsapp_icon.jpeg';




const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
                <li></li>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsap_icon} alt="" />
                </div>
                
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024-All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;