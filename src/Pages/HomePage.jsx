import React from "react";
import ConstructionSlider from "../components/Hero.jsx";
import HomeFeatures from "../components/HomeFeature.jsx";
import WhatWeDo from "../components/Whatwedo.jsx";
import ConstructionDesign from "../components/Constructiondesign.jsx";
import Testimonials from "../components/Testimonials.jsx";
import OurClients from "../components/OurClients.jsx";

function HomePage() {
  return (
    <>
      <ConstructionSlider />
      <HomeFeatures />
      {/* <FeaturedWorks /> */}
      <WhatWeDo />
      <ConstructionDesign />
      <Testimonials />
      <OurClients />
    </>
  );
}

export default HomePage;
