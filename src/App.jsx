import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Bookcards from './components/Bookcards';
import About from './components/About';
import Bookdetails from './components/Bookdetails';

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
            </>
          }
        />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
    </Router>
  );
};

export default App;
