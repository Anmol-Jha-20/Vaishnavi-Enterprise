import "./App.css";
import ConstructionDesign from "./components/Constructiondesign.jsx";
import FeaturedWorks from "./components/FeaturedWorks.jsx";
import Footer from "./components/Footer.jsx";
import ConstructionSlider from "./components/Hero.jsx";
import HomeFeatures from "./components/HomeFeature.jsx";
import Testimonials from "./components/testimonials.jsx";
import WhatWeDo from "./components/Whatwedo.jsx";

function App() {
  return (
    <>
      <ConstructionSlider />
      <HomeFeatures />
      {/* <FeaturedWorks /> */}
      <WhatWeDo />
      <ConstructionDesign />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
