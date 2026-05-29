import React from "react";
import Hero from "./Hero";
import About from "./Components/About";
import OurServices from "./Components/OurServices";
import Machines from "./Components/Machines";
import Portfolio from "./Components/Portfolio";
import WhyUs from "./Components/WhyUs";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import WhatsAppFloat from "./Components/WhatsAppFloat";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <Machines />
      <Portfolio />
      <WhyUs />
      <Clients />
      <CTA />
      <WhatsAppFloat />
    </>
  );
};

export default Home;
