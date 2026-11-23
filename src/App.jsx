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
import { Routes, Route } from 'react-router-dom'
import IntradayScreener from './Pages/IntradayScreener/IntradayScreener'
import ETFScreener from './Pages/EtfScreener/ETFScreener'
import IpoDashboard from './Pages/Ipo Dashboard/IpoDashboard'




export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
           
              <HeroTicker />
              <HeroSlider />
              <Investment />
              <SipSection />
              <Explore />
              <TradingSection />
              <TrustedSection />
              <FamilySection />
              <LanguageSection />
              <Footer />
            </>
          }
        />
        <Route path="/intraday" element={<IntradayScreener />} />
        <Route path="/etf-screener" element={<ETFScreener/>} /> 
        <Route path="/ipo" element={<IpoDashboard/>}/>
      </Routes>
    </div>
  )
}
