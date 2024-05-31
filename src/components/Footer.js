import "./FooterStyles.css";

import React from 'react'
import { FaHome ,FaPhone , FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                </div>
                <div>
                    <p>123 Nandankanon 1 no lane,Chattogram.</p>
                    <p>Bangladesh.</p>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                        123-456-789
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                        something@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>
                    About the Company
                </h4>
                <p>This is something which i dont want to tell.PLease Leave it now</p>
                <div className="social">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                        <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer