import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mtf.css";
import hero from '../../assets/hero-3.webp'
import mtf from '../../assets/mtf3.webp'

function Mtf() {
  const navigate = useNavigate();

  return (
    <div className="mtf-container">
      {/* 1. ऊपर वाला Hero Section */}
      <div className="mtf-hero">
        <h1>Pay Later with MTF</h1>
        <p>
          Margin Trading Facility (MTF) lets you buy stocks by paying only a
          fraction of the order amount and Groww funds the rest.
        </p>
        <button
          className="mtf-cta-btn"
          onClick={() => navigate("/intraday")}
        >
          See available stocks
        </button>

        <div className="mtf-image-box">
          <img src={hero} alt="Pay Later with MTF" className="mtf-banner-img" />
        </div>
      </div>

      {/* 2. Features of Groww MTF हेडिंग */}
      <div className="mtf-features-header">
        <div className="magic-wand-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.5 5.5L18.5 9.5L7.5 20.5L3.5 16.5L14.5 5.5Z"
              fill="#363846"
            />
            <path d="M13 7L17 11" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M19 2V5M17.5 3.5H20.5" stroke="#363846" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 1V3.5M10.75 2.25H13.25" stroke="#363846" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21.5 8.5V11M20.25 9.75H22.75" stroke="#363846" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <h2>Features of Groww MTF</h2>
      </div>

      {/* 3. Buy with upto 4X leverage कार्ड */}
      <div className="mtf-feature-card">
        <div className="feature-card-left">
          <div className="feature-trend-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Buy with upto 4X leverage</h3>
          <p>
            Increase your purchasing power by paying as low as 25% amount upfront.
          </p>
          <button
            className="feature-outline-btn"
            onClick={() => navigate("/intraday")}
          >
            See available stocks <span>→</span>
          </button>
        </div>

        <div className="feature-card-right">
          <img
            src={mtf}
            alt="Buy with upto 4X leverage"
            className="feature-imported-img"
          />
        </div>
      </div>

      {/* 4. नीचे वाले दो साइड-बाय-साइड कार्ड्स */}
      <div className="mtf-two-cards-grid">
        {/* बायां कार्ड */}
        <div className="mtf-sub-card">
          <div className="sub-card-icon-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17V13M12 17V9M17 17V11"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3>Capitalize on short-term market fluctuations</h3>
          <p>
            MTF offers leverage to make higher returns with smaller investments
          </p>
          <button className="feature-outline-btn">
            Risk Disclosure <span>→</span>
          </button>
        </div>

        {/* दायां कार्ड */}
        <div className="mtf-sub-card">
          <div className="sub-card-tag-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8.5V4.5C3 3.67 3.67 3 4.5 3H8.5C9.16 3 9.79 3.26 10.26 3.73L19.29 12.76C20.07 13.54 20.07 14.81 19.29 15.59L15.59 19.29C14.81 20.07 13.54 20.07 12.76 19.29L3.73 10.26C3.26 9.79 3 9.16 3 8.5Z"
                fill="#363846"
              />
              <circle cx="7" cy="7" r="1.4" fill="#ffffff" />
            </svg>
          </div>
          <h3>Interest rate at 0.041% per day</h3>
          <p>
            Pay 14.95% p.a. Interest only on the funded amount
          </p>
          <button className="feature-outline-btn">
            MTF charges on Groww <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mtf;
