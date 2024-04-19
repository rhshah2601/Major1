import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import PreBook from './components/pages/PreBook';
import Product1 from './components/pages/Product1';
import Product2 from './components/pages/Product2';
import Product3 from './components/pages/Product3';
import CompareAll from './components/pages/CompareAll';
import Rentals from './components/pages/Rentals';
import Products from './components/pages/Products';
import Career from './components/pages/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about-us" element={<AboutUs/>} exact />
        <Route path="/contact-us" element={<ContactUs/>} exact />
        <Route path="/pre-book" element={<PreBook/>} exact />
        
        <Route path="/products" element={<Products/>} />
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/product2" element={<Product2 />} />
        <Route path="/products/product3" element={<Product3 />} />

        <Route path="/compare-all" element={<CompareAll/>}  />
        <Route path="/rentals" element={<Rentals/>} exact />
        <Route path="/career" element={<Career />} /> {/* Corrected path */}
      </Routes>
    </Router>
  );
}

export default App;
