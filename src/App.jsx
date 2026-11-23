import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroTicker from './Components/HeroTicker/HeroTicker'
import HeroSlider from './Components/HeroSlider/HeroSlider'
import Investment from './Components/Investment/Investment'


export const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroTicker/>
     <HeroSlider/>
    <Investment/>
    </div>
  )
}
