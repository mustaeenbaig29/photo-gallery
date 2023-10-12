import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Home/Footer/Footer';
import PhotoDetails from './components/PhotoDetails/PhotoDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
