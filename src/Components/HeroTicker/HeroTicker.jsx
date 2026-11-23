import React from 'react';
import './HeroTicker.css';

const HeroTicker = () => {
  const tickerItems = [
    { name: 'NIFTY 50', price: '24,350.20', change: '+0.45%', isPositive: true },
    { name: 'SENSEX', price: '80,120.45', change: '+0.38%', isPositive: true },
    { name: 'BANK NIFTY', price: '52,180.10', change: '-0.15%', isPositive: false },
    { name: 'RELIANCE', price: '1,290.10', change: '+0.82%', isPositive: true },
    { name: 'TCS', price: '4,115.00', change: '+1.12%', isPositive: true },
    { name: 'HDFC BANK', price: '1,740.80', change: '+0.60%', isPositive: true },
    { name: 'TATA MOTORS', price: '815.30', change: '+1.45%', isPositive: true },
  ];

  return (
    <div className="hero-section">
      {/* पहली तस्वीर जैसा चौड़ा और बिना बॉर्डर वाला टिकर */}
      <div className="wide-ticker-wrapper">
        <div className="wide-ticker-track">
          {/* बिना रुके लूप चलाने के लिए लिस्ट को 2 बार रखा गया है */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="wide-ticker-item">
              <span className="t-name">{item.name}</span>
              <span className="t-price">{item.price}</span>
              <span className={`t-change ${item.isPositive ? 'green' : 'red'}`}>
                {item.change}
              </span>
              <span className="t-separator">|</span>
            </div>
          ))}
        </div>
      </div>

   
    
    </div>
  );
};

export default HeroTicker;
