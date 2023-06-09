import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingSection from './Components/LandingPage/LandingSection';
import QForm from './Components/QForm/QForm';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactUs from './Components/ContactUs/ContactUs';
import FactsSection from './Components/FactsSection/FactsSection';
import Footer from './Components/Footer/Footer';
import "./main.css";

document.body.className = 'main-container';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LandingSection/>
  <AboutSection/>
  <QForm/>
  <FactsSection/>
  <ContactUs/>
  <Footer/>
  </React.StrictMode>,
)
