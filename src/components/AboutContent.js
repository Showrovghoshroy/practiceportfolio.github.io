import "./AboutContentStyles.css";
import { Link } from "react-router-dom"

import React1 from "../assets/2.jpg"
import React2 from "../assets/2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> 
                A react Developer.
                Here is my contact below please check my contact.
            </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="image"/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AboutContent