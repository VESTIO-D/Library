import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Bookdetails from './components/Bookdetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
