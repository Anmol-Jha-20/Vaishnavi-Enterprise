import React from "react";
import ConstructionSlider from "../components/Hero.jsx";
import HomeFeatures from "../components/HomeFeature.jsx";
import WhatWeDo from "../components/Whatwedo.jsx";
import ConstructionDesign from "../components/Constructiondesign.jsx";
import Testimonials from "../components/Testimonials.jsx";

function HomePage() {
  return (
    <>
      <ConstructionSlider />
      <HomeFeatures />
      {/* <FeaturedWorks /> */}
      <WhatWeDo />
      <ConstructionDesign />
      <Testimonials />
    </>
  );
}

export default HomePage;
