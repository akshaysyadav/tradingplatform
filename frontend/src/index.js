import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/homepage.js';
import Signup from './landing_page/signup/signup.js';
import Aboutpage from './landing_page/about/aboutpage.js';
import Productspage from './landing_page/products/productspage.js';
import Pricingpage from './landing_page/pricing/pricingpage.js';
import Supportpage from './landing_page/support/supportpage.js';
import Navbar from './landing_page/navbar.js';
import Footer from './landing_page/footer.js';
import Notfound from './landing_page/notfound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/product" element={<Productspage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);