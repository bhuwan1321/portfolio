import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Test from './components/test.jsx'
import './gobal.css'
import img from './components/IMG_1646[1].jpg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <Hero/>
    <Footer /> 
  </StrictMode>,
)
