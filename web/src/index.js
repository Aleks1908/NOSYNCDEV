import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingSection from './Components/LandingPage/LandingSection';
import reportWebVitals from './reportWebVitals';
import QForm from './Components/QForm/QForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingSection/>
    <QForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
