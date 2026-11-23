import { useState, useEffect } from "react";
import "./Navbar.css";
import groww from '../../assets/groww_logo (1).webp';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const [loginStep, setLoginStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const categories = ["MTF", "Mutual Funds", "Stocks", "F&O", "Bonds"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (!showLogin) {
      setCategoryIndex(0);
      setLoginStep(1);
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setMobile("");
      setError("");
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

  const handleEmailContinue = () => {
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setLoginStep(2);
  };

  const isPasswordValid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[@$!%*?&]/.test(password);

  const handlePasswordSubmit = () => {
    if (!isPasswordValid) return;
    setError("");
    setLoginStep(3);
  };

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    alert(`OTP sent to +91 ${mobile}`);
    setShowLogin(false);
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

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div
            className={`login-modal ${loginStep === 3 ? "mobile-verify-modal" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {loginStep === 3 ? (
              <div className="verify-mobile-wrapper">
                <button className="close-btn" onClick={() => setShowLogin(false)}>
                  ✕
                </button>

                <h2>Verify Mobile Number</h2>

                <div className="mobile-input-container">
                  <label className="mobile-top-label">Enter Mobile Number</label>
                  <div className="mobile-field-row">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                      onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                      className="mobile-number-input"
                      autoFocus
                    />
                  </div>
                </div>

                {error && <p className="mobile-error-msg">{error}</p>}

                <button className="send-otp-btn" onClick={handleSendOtp}>
                  Send OTP
                </button>

                <div className="mobile-footer-info">
                  <span>{email}</span>
                  <button
                    type="button"
                    className="modal-logout-link"
                    onClick={() => {
                      setLoginStep(1);
                      setPassword("");
                      setMobile("");
                      setError("");
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="modal-left">
                  <h2>
                    Simple, Free
                    <br />
                    Investing.
                  </h2>
                  <div className="modal-left-bottom">
                    <div key={`dash-${categoryIndex}`} className="white-dash animate-dash"></div>
                    <h3 key={categoryIndex} className="animate-text">
                      {categories[categoryIndex]}
                    </h3>
                  </div>
                </div>

                <div className="modal-right">
                  <button className="close-btn" onClick={() => setShowLogin(false)}>
                    ✕
                  </button>

                  {loginStep === 1 ? (
                    <>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleEmailContinue()}
                      />

                      {error && <p className="modal-error-text">{error}</p>}

                      <button className="continue-btn" onClick={handleEmailContinue}>
                        Continue
                      </button>

                      <p className="terms-text">
                        By proceeding, I agree to <u>T&C</u>, <u>Privacy Policy</u> & <u>Tariff Rates</u>
                      </p>
                    </>
                  ) : (
                    <div className="join-groww-wrapper">
                      <h2>Join Groww</h2>

                      <div className="join-field-group">
                        <label className="green-field-label">Your Email Address</label>
                        <div className="join-field-row">
                          <span className="join-email-display">{email}</span>
                        </div>
                      </div>
                  {/* Set Password */}
                  <div className="join-field-group active-green-border">
                    <label className="green-field-label">Set Password</label>
                    <div className="join-field-row">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                        className="join-pass-input"
                        autoFocus
                      />
                      <button
                        type="button"
                        className="pass-eye-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        title={showPassword ? "Hide Password" : "Show Password"}
                      >
                        {showPassword ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password Rule Box */}
                  <div className={`password-rule-box ${isPasswordValid ? "valid-rule" : ""}`}>
                    <span className="shield-check-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </span>
                    <p>
                      Password must be min. 8 characters, with uppercase, lowercase, number &amp; special characters (@$!%*?&amp;)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    className={`join-submit-btn ${isPasswordValid ? "btn-enabled" : ""}`}
                    disabled={!isPasswordValid}
                    onClick={handlePasswordSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )}
</>
);
}

export default Navbar;
