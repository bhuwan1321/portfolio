import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Test from './components/test.jsx'
import NavBar from './components/NavBar.jsx'
import './gobal.css'
import img from './components/BhanuBG.jpg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar /> 
    <Hero/>
    <Hero />
    <Hero />
    <Hero />
    <Footer />
  </StrictMode>,
)
