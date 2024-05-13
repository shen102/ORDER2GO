import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/header/Services';
import Products from './components/Products/Products'; 
import "./App.css";
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import AppointmentTab from './components/header/Appointment';

import Virtual from './components/Virtual/Virtual';
import Last from './components/Last/Last';
import MaybeSlider from './components/MaybeShow/MaybeShow';
import Slip from './components/header/slip'



function App() {
  const isServicesRoute = window.location.pathname === '/services';

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/about" element={<Hero/>} />
          <Route path="/services" element={<Services />} />
          {!isServicesRoute && <Route path="/products" element={<Products />} />}
          <Route path="/appointment" element={<AppointmentTab />} />
          <Route path='/slip' element={<Slip/>}/>
        </Routes>
        <MaybeSlider>
        <Slider />
        <Virtual />
        </MaybeSlider>
        <Last />
      </Router>
    </div>
  );
}

export default App;