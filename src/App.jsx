import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroTicker from './Components/HeroTicker/HeroTicker'
import HeroSlider from './Components/HeroSlider/HeroSlider'
import Investment from './Components/Investment/Investment'
import SipSection from './Components/SipSection/SipSection'
import TradingSection from './Components/Trading/TradingSection'
import Explore from './Components/Explore/Explore'
import TrustedSection from './Components/TrustedSection/TrustedSection'
import FamilySection from './Components/Family/FamilySection'
import LanguageSection from './Components/Language/LanguageSection'
import Footer from './Components/Footer/Footer'



export const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroTicker/>
     <HeroSlider/>
    <Investment/>
    <SipSection/>
    <Explore/>
   <TradingSection/>
   <TrustedSection/>
   <FamilySection/>
   <LanguageSection/>
   <Footer/>
    </div>
  )
}
