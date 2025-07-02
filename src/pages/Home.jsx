import React from 'react';
import { SlideTabsExample } from '../components/SlideTabs';
import HeroSection from '../components/Herosection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <SlideTabsExample />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;