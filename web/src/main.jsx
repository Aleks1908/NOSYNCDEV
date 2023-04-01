import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingSection from './Components/LandingPage/LandingSection'
import QForm from './Components/QForm/QForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingSection/>
    <QForm/>
  </React.StrictMode>,
)
