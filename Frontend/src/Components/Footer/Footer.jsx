import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='Footer' id='footer'>
            <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>The rise of on-demand food delivery services has revolutionized the way we access and enjoy our favorite meals. With just a few taps on a smartphone app, customers can now order from an extensive selection of local restaurants and have their food delivered right to their doorstep. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>delevery</li>
                    <li>privacy police</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0967155787</li>
                    <li>contactus @yoper.com</li>
                </ul>
            </div>
            
            <p className="fotter-copyright"> copyright 2024 © @yoper.com -ALL RIGHT Recived.</p>
        </div>
      </div>

    
    )
}

export default Footer
