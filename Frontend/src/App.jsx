import './index.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CoverAnimation from './components/loadingpage/CoverAnimation.jsx';

import Navbar from "./components/header/Header.jsx"
import HeroSection from './components/herosection/Herosection.jsx'
import Products from './components/productcollections/ProductCollection.jsx'
import Box from './components/parallexbox/Box.jsx';
import Testimonial from './components/testimonials/Testimonials.jsx';
import Faq from './components/faq/Faq.jsx'
// import Trusties from './components/trustsection/Trust.jsx';
import OurTeam from './components/team/OurTeam.jsx';
import Footer from './components/footer/Footer.jsx'

import ProductPage from './components/productpage/ProductPage.jsx'
import Contact from './components/contact/Contact.jsx'; // adjust path if needed



function LandingPage() {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on reload
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <Box />
      <Testimonial />
      <Faq />
      {/* <OurTeam /> */}
      <Footer />
      {/* <Trusties /> */}
    </>
  );
}

function App() {
  const [showCover, setShowCover] = useState(true);

  return (
    <>
      {showCover ? (
        <CoverAnimation onFinish={() => setShowCover(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* Route for the LandingPage */}
            <Route path="/" element={<LandingPage />} />

             {/* Route for the Contact page */}
            <Route path="/contact" element={<Contact />} />

            {/* Route for ProductPage by category */}
            <Route path="/category/:categoryName" element={<ProductPage />} />

          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
