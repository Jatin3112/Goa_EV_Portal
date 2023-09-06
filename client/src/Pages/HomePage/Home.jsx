import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./Hero/Hero";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import AboutUs from "./Sections/AboutUs";
import Footer from "./Sections/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
