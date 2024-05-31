import "./HeroImageStyles.css"
import React from 'react'
import IntroImg from "../assets/5.jpg";
import { Link } from "react-router-dom";
const HeroImg= () => {
  return <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>

     </div>

     <div className="content">
      <p>
        HI, I am Showrov Ghosh Roy.
      </p>
      <h1>React Developer</h1>
      <div>
        <Link to="/project" className="btn">Project</Link>
        <Link to="/contact" className="btn brn-light">Contact</Link>
        
      </div>
     </div>
  </div>;
  
}

export default HeroImg