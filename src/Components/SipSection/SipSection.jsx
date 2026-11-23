import { useState } from 'react';
import './SipSection.css';

const SipSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('sip');
  const [activeRange, setActiveRange] = useState('3Y');

  return (
    <div className="sip-grid-container">
      {/* ऊपर की हेडिंग और बटन */}
      <div className="sip-header">
        <h1 className="sip-heading">Build wealth, SIP by SIP</h1>
        <p className="sip-subtext">Invest in direct mutual funds</p>
        <button className="start-sip-btn">Invest Now</button>
      </div>

      {/* कनेक्टर लाइन्स */}
      <div className="connector-lines">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>

      {/* तीन कार्ड्स का ग्रिड */}
      <div className="cards-grid">
        {/* बायाँ साइड कार्ड */}
        <div className="fund-card side-card">
          <div className="side-placeholder-bar"></div>
          <div className="side-placeholder-bar short"></div>
        </div>

        {/* बीच वाला मुख्य मोबाइल/फंड कार्ड (पहली फोटो जैसा) */}
        <div className="fund-card center-card">
          <div className="phone-top-notch"></div>

          <div className="card-icon icici-icon">
            <div className="blue-diamond"></div>
          </div>

          <h4>India Hybrid Fund</h4>
          <p className="fund-category">Hybrid • Equity • Very High Risk</p>

          <div className="fund-return">
            16.32% <span>3Y annualised</span>
          </div>
          <p className="day-gain">+0.81% <span>1D</span></p>

          {/* कार्ड के अंदर हरा लाइन चार्ट (SVG) */}
          <div className="chart-line-box">
            <svg viewBox="0 0 280 120" className="sip-svg-chart">
              <defs>
                <linearGradient id="sipChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00b386" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#00b386" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L20,92 L35,104 L55,96 L75,106 L95,88 L112,95 L132,76 L150,82 L172,62 L190,68 L210,48 L225,66 L242,26 L260,34 L280,14 L280,120 L0,120 Z"
                fill="url(#sipChartGrad)"
              />
              <path
                d="M0,100 L20,92 L35,104 L55,96 L75,106 L95,88 L112,95 L132,76 L150,82 L172,62 L190,68 L210,48 L225,66 L242,26 L260,34 L280,14"
                fill="none"
                stroke="#00b386"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 1M, 6M, 1Y, 3Y, 5Y, ALL बटन */}
          <div className="time-range-row">
            {['1M', '6M', '1Y', '3Y', '5Y', 'ALL'].map((range) => (
              <button
                key={range}
                type="button"
                className={`range-btn ${activeRange === range ? 'active' : ''}`}
                onClick={() => setActiveRange(range)}
              >
                {range}
              </button>
            ))}
          </div>

          {/* कार्ड के अंदर नीचे वाले दोनों बटन */}
          <div className="bottom-controls">
            <button
              type="button"
              className={`control-pill ${selectedPeriod === 'lumpsum' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('lumpsum')}
            >
              One-time
            </button>
            <button
              type="button"
              className={`control-pill ${selectedPeriod === 'sip' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('sip')}
            >
              Start SIP
            </button>
          </div>
        </div>

        {/* दायाँ साइड कार्ड */}
        <div className="fund-card side-card">
          <div className="side-placeholder-bar"></div>
          <div className="side-placeholder-bar short"></div>
        </div>
      </div>
    </div>
  );
};

export default SipSection;
