import { useState, useEffect } from "react";
import "./Navbar.css";
import groww from '../../assets/groww_logo (1).webp';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  // एनीमेशन के लिए कैटेगरी लिस्ट और इंडेक्स स्टेट
  const categories = ["MTF", "Mutual Funds", "Stocks", "F&O"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  // पॉप-अप खुलने पर हर 2.5 सेकंड में शब्द बदलने का लॉजिक
  useEffect(() => {
    if (!showLogin) {
      setCategoryIndex(0); // बंद होने पर वापस MTF पर रीसेट हो जाएगा
      return;
    }

    const interval = setInterval(() => {
      setCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [showLogin, categories.length]);

  const menuData = {
    Stocks: [
      ["Intraday", "Monitor top intraday performers in real time"],
      ["ETF Screener", "Find and explore ETFs"],
      ["IPO", "Track upcoming and ongoing IPOs"],
      ["MTFs", "Buy now, pay later"],
      ["Stock Screener", "Filter stocks based on RSI, PE ratio and more"],
      ["Stock Events", "Dividends, bonus, buybacks and more"],
      ["Demat Account", "Begin your stock market journey"],
      ["Share Market Today", "Live news updates from stock market"],
    ],
    "F&O": [
      ["Indices", "Track markets across the globe"],
      ["Terminal", "Track charts, orders, positions, watchlists in one place"],
      ["Option Chain", "Analyse chains, view payoffs, create baskets"],
      ["Pledge", "Get extra balance for trading"],
      ["Commodities", "Trade in Crude Oil, Gold, Silver and more"],
      ["API Trading", "Set up and execute trades through our API"],
    ],
    "Mutual Funds": [
      ["Explore Mutual Funds", "Explore funds for your goals"],
      ["SIP", "Invest regularly"],
      ["Top Funds", "Explore popular mutual funds"],
      ["Fund Screener", "Compare mutual funds"],
    ],
    More: [
      ["About Groww", "Learn more about Groww"],
      ["Calculators", "Explore financial calculators"],
      ["Help & Support", "Get help"],
    ],
  };

  const handleMenu = (name) => {
    setActiveMenu((prev) => (prev === name ? "" : name));
  };

  return (
    <>
      <nav className="groww-navbar">
        <div className="navbar-top">
          <div className="groww-logo">
            <img src={groww} alt="groww-logo" />
          </div>

          <div className="navbar-links">
            {["Stocks", "F&O", "Mutual Funds", "More"].map((item) => (
              <div
                className={`nav-item ${activeMenu === item ? "active" : ""}`}
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                onClick={() => handleMenu(item)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="navbar-search">
            <span>⌕</span>
            <input type="text" placeholder="Search Groww..." />
            <small>Ctrl K</small>
          </div>

          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Login / Sign up
          </button>
        </div>

        {activeMenu && (
          <div
            className="mega-dropdown"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu("")}
          >
            <div className="dropdown-left">
              <div className="dropdown-illustration">
                <div className="illustration-circle"></div>
                <div className="illustration-box"></div>
                <div className="illustration-building"></div>
              </div>
              <h3>
                {activeMenu === "F&O"
                  ? "Trade in Futures & Options"
                  : activeMenu === "Stocks"
                  ? "Invest in Stocks"
                  : activeMenu === "Mutual Funds"
                  ? "Invest in Mutual Funds"
                  : "Explore Groww"}
              </h3>
              <p>
                Explore investment opportunities, track the market
                and manage your investments in one place.
              </p>
            </div>

            <div className="dropdown-items">
              {menuData[activeMenu]?.map((item, index) => (
                <div className="dropdown-link" key={index}>
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* पहली फोटो जैसा Login Modal (एनीमेशन के साथ) */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            {/* बायां हरा हिस्सा */}
            <div className="modal-left">
              <h2>Simple, Free<br />Investing.</h2>
              <div className="modal-left-bottom">
                <div key={`dash-${categoryIndex}`} className="white-dash animate-dash"></div>
                <h3 key={categoryIndex} className="animate-text">
                  {categories[categoryIndex]}
                </h3>
              </div>
            </div>

            {/* दायां सफ़ेद हिस्सा */}
            <div className="modal-right">
              <button className="close-btn" onClick={() => setShowLogin(false)}>
                ✕
              </button>
              <h2>Welcome to Groww</h2>

              <button className="google-btn">
                <span className="g-icon">G</span> Continue with Google
              </button>

              <div className="divider">
                <span>Or</span>
              </div>

              <input
                type="email"
                placeholder="Your Email Address"
                className="email-input"
              />

              <button className="continue-btn">Continue</button>

              <p className="terms-text">
                By proceeding, I agree to <u>T&C</u>, <u>Privacy Policy</u> & <u>Tariff Rates</u>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
