import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ResortConstructionService from "./components/Services/ConstructionServices.jsx";
import IndustrialRoofingServices from "./components/Services/IndustrialRoofing.jsx";
import FactoryConstructionPage from "./components/Services/FactoryConstruction.jsx";
import TBServicePage from "./components/Services/TBService.jsx";
import WaterproofingServicePage from "./components/Services/WaterproofingService.jsx";
import ResidentialConstructionPage from "./components/Services/ResidentalService.jsx";
import ResortConstructionPage from "./components/Services/ResortService.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/construction-service",
        element: <ResortConstructionService />,
      },
      {
        path: "/industrial-roofing",
        element: <IndustrialRoofingServices />,
      },
      {
        path: "/factory-construction",
        element: <FactoryConstructionPage />,
      },
      {
        path: "/tb-service",
        element: <TBServicePage />,
      },
      {
        path: "/waterproffing-service",
        element: <WaterproofingServicePage />,
      },
      {
        path: "/residental-building",
        element: <ResidentialConstructionPage />,
      },
      {
        path: "/resort-construction",
        element: <ResortConstructionPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
