import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Mtf.css';
import hero from "../../assets/hero-3.webp";
import mtf from "../../assets/mtf3.webp";
import image from "../../assets/image.webp";
import place from "../../assets/image 2.webp";
import positions from "../../assets/switch.webp";
import Stock from '../../assets/Stock.webp'

function Mtf() {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSteps = [
    {
      title: "Switch to the MTF option",
      desc: "While buying a stock, switch to the 'MTF' tab instead of the 'Delivery' tab. This tab will only be visible for stocks available under MTF.",
      img: image,
    },
    {
      title: "Place your order",
      desc: "If you have the required funds available, your MTF order will be placed. Congratulations on completing your first order!",
      img: place,
    },
    {
      title: "Monitor your MTF positions",
      desc: "View Your MTF position under the 'position' tab next 'explore' You can easily exit your positions at any point",
      img: positions,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderSteps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [sliderSteps.length]);

  const chartData = [
    { label: "-15%", withoutMtf: -15, withMtf: -60, type: "loss" },
    { label: "-10%", withoutMtf: -10, withMtf: -40, type: "loss" },
    { label: "-5%", withoutMtf: -5, withMtf: -20, type: "loss" },
    { label: "+5%", withoutMtf: 5, withMtf: 20, type: "profit" },
    { label: "+10%", withoutMtf: 10, withMtf: 40, type: "profit" },
    { label: "+20%", withoutMtf: 20, withMtf: 80, type: "profit" },
  ];

  return (
    <div className="mtf-container">
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

      <div className="mtf-features-header">
        <div className="magic-wand-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.5 5.5L18.5 9.5L7.5 20.5L3.5 16.5L14.5 5.5Z"
              fill="#363846"
            />
            <path d="M13 7L17 11" stroke="#ffffff" strokeWidth="1.5" />
            <path
              d="M19 2V5M17.5 3.5H20.5"
              stroke="#363846"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M12 1V3.5M10.75 2.25H13.25"
              stroke="#363846"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M21.5 8.5V11M20.25 9.75H22.75"
              stroke="#363846"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2>Features of Groww MTF</h2>
      </div>

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

      <div className="mtf-two-cards-grid">
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
          <p>Pay 14.95% p.a. Interest only on the funded amount</p>

          <button className="feature-outline-btn">
            MTF charges on Groww <span>→</span>
          </button>
        </div>
      </div>

      <div className="mtf-how-section">
        <h2>How does MTF work?</h2>

        <p className="mtf-how-desc">
          MTF allows you to buy stocks by paying only a portion of the total cost (25%) upfront,
          while Groww funds the remaining amount as a loan.
        </p>

        <div className="mtf-calc-row">
          <div className="mtf-calc-box">
            <span className="mtf-calc-label">Order value</span>
            <span className="mtf-calc-value">₹1000</span>
          </div>

          <span className="mtf-calc-operator">=</span>

          <div className="mtf-calc-box">
            <span className="mtf-calc-label">You pay (25%)</span>
            <span className="mtf-calc-value">₹250</span>
          </div>

          <span className="mtf-calc-operator">+</span>

          <div className="mtf-calc-box">
            <span className="mtf-calc-label">Funded by Groww</span>
            <span className="mtf-calc-value">₹750</span>
          </div>
        </div>
      </div>

      <div className="mtf-comparison-section">
        <h2>Comparison of returns on your investment</h2>

        <div className="mtf-chart-legend">
          <div className="legend-group">
            <div className="legend-item">
              <span className="legend-box loss-mtf-bg"></span>
              <span>Loss with MTF</span>
            </div>

            <div className="legend-item">
              <span className="legend-box without-mtf-bg"></span>
              <span>Loss without MTF</span>
            </div>
          </div>

          <div className="legend-group">
            <div className="legend-item">
              <span>Profit with MTF</span>
              <span className="legend-box profit-mtf-bg"></span>
            </div>

            <div className="legend-item">
              <span>Profit without MTF</span>
              <span className="legend-box without-mtf-bg"></span>
            </div>
          </div>
        </div>

        <div className="mtf-chart-wrapper">
          <div className="chart-y-axis">
            <span>+100%</span>
            <span>0%</span>
            <span>-100%</span>
          </div>

          <div className="chart-grid-area">
            <div className="grid-line top-line"></div>
            <div className="grid-line zero-line"></div>
            <div className="grid-line bottom-line"></div>

            <div className="chart-bars-container">
              {chartData.map((item, index) => (
                <div key={index} className="chart-column">
                  <div className="bar-half upper-half">
                    {item.type === "profit" && (
                      <div className="bar-pair">
                        <div
                          className="bar without-mtf-bar"
                          style={{ height: `${item.withoutMtf}%` }}
                          title={`Without MTF: +${item.withoutMtf}%`}
                        ></div>

                        <div
                          className="bar profit-mtf-bar"
                          style={{ height: `${item.withMtf}%` }}
                          title={`With MTF: +${item.withMtf}%`}
                        ></div>
                      </div>
                    )}
                    {item.type === "loss" && (
                      <span className="bar-percent-label top-label">{item.label}</span>
                    )}
                  </div>

                  <div className="bar-half lower-half">
                    {item.type === "profit" && (
                      <span className="bar-percent-label bottom-label">{item.label}</span>
                    )}

                    {item.type === "loss" && (
                      <div className="bar-pair">
                        <div
                          className="bar without-mtf-bar"
                          style={{ height: `${Math.abs(item.withoutMtf)}%` }}
                          title={`Without MTF: ${item.withoutMtf}%`}
                        ></div>

                        <div
                          className="bar loss-mtf-bar"
                          style={{ height: `${Math.abs(item.withMtf)}%` }}
                          title={`With MTF: ${item.withMtf}%`}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
           {/* 7. How to place an MTF order? (Auto Slider Section) */}
      <div className="mtf-slider-wrapper">
        <h2 className="mtf-slider-main-heading">How to place an MTF order?</h2>

        <div className="mtf-slider-section">
          <div className="mtf-slider-content fade-slide" key={`text-${activeSlide}`}>
            <h2>{sliderSteps[activeSlide].title}</h2>
            <p>{sliderSteps[activeSlide].desc}</p>
          </div> {/* 👈 यह क्लोजिंग div टैग ज़रूरी है ताकि टेक्स्ट और फोन अलग-अलग रहें */}

          <div className="mtf-slider-image fade-slide" key={`img-${activeSlide}`}>
            <img
              src={sliderSteps[activeSlide].img}
              alt={sliderSteps[activeSlide].title}
            />
          </div>

          <div className="mtf-slider-indicators">
            {sliderSteps.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-bar ${activeSlide === idx ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      
      {/* 8. Stocks available with MTF */}
      <div
        style={{
          maxWidth: "1040px",
          margin: "85px auto 50px",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          textAlign: "left",
        }}
      >
        {/* बाईं तरफ टेक्स्ट */}
        <div style={{ flex: "1", maxWidth: "440px", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#363846",
              lineHeight: "1.2",
              margin: "0 0 18px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Stocks available
            <br />
            with MTF
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#7c7e8c",
              lineHeight: "1.6",
              margin: "0 0 32px 0",
            }}
          >
            Margin Trading Facility is available for limited
            <br />
            stocks only, governed by exchanges.
          </p>
          <button
            className="feature-outline-btn"
            onClick={() => navigate("/intraday")}
          >
            See available stocks <span>→</span>
          </button>
        </div>

        {/* दाईं तरफ आपकी Stock इमेज */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src={Stock}
            alt="Stocks available with MTF"
            style={{
              width: "100%",
              maxWidth: "430px",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
            {/* 9. MTF charges on Groww (पहली वाली फोटो - Stocks available के ठीक नीचे) */}
      <div className="mtf-charges-section">
        <h2>MTF charges on Groww</h2>
        <p className="mtf-charges-subtitle">
          Know what you'll pay, no hidden charges
        </p>

        <div className="mtf-charges-card">
          {/* पहली लाइन */}
          <div className="mtf-charge-row">
            <div className="charge-left">
              <h3>Interest rate</h3>
              <p>Applicable on the amount funded by Groww</p>
            </div>
            <div className="charge-right">
              <span className="charge-main-val">0.041%</span>
              <span className="charge-sub-val">per day (14.95% p.a.)</span>
            </div>
          </div>

          <hr className="mtf-charge-divider" />

          {/* दूसरी लाइन */}
          <div className="mtf-charge-row">
            <div className="charge-left">
              <h3>Brokerage</h3>
              <p>Charged on both buy and sell orders</p>
            </div>
            <div className="charge-right">
              <span className="charge-main-val">0.1%</span>
              <span className="charge-sub-val">per order</span>
            </div>
          </div>

          <hr className="mtf-charge-divider" />

          {/* तीसरी लाइन */}
          <div className="mtf-charge-row">
            <div className="charge-left">
              <h3>Pledge/Unpledge</h3>
              <p>Charged per ISIN per request</p>
            </div>
            <div className="charge-right">
              <span className="charge-main-val">₹20</span>
              <span className="charge-sub-val">+ GST</span>
            </div>
          </div>
        </div>
      </div>
      
          {/* 10. Swing trade like a pro बैनर (दूसरी वाली फोटो के ठीक नीचे) */}
      <div className="mtf-swing-banner">
        {/* बैकग्राउंड का बड़ा आउटलाइन तीर (Arrow SVG) */}
        <svg
          className="swing-bg-arrow"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://w3.org"
        >
          <path
            d="M300 20L560 280H415V480H185V280H40L300 20Z"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2.5"
          />
        </svg>

        <div className="swing-banner-content">
          <p className="swing-subtitle">Buy more with limited funds</p>
          <h2>Swing trade like a pro</h2>
          <button
            className="swing-cta-btn"
            onClick={() => navigate("/intraday")}
          >
            Get started
          </button>
        </div>
      </div>


    </div>
  );
}

export default Mtf;