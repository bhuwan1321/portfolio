import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Footer />
  </StrictMode>,
)
