import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading= "POJECTS." text="My first project"/>
      <Work/>
      <PricingCard/>
      
      <Footer/>
    </div>
  )
}

export default Project