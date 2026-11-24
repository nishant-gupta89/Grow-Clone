import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import groww from "../../assets/groww_logo (1).webp";

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
      ["Intraday", "Monitor top intraday performers in real time", "/intraday"],
      ["ETF Screener", "Find and explore ETFs", "/etf-screener"],
      ["IPO", "Track upcoming and ongoing IPOs", "/ipo"],
      ["MTFs", "Buy now, pay later", "/"],
      ["Stock Screener", "Filter stocks based on RSI, PE ratio and more", "/"],
      ["Stock Events", "Dividends, bonus, buybacks and more", "/"],
      ["Demat Account", "Begin your stock market journey", "/"],
      ["Share Market Today", "Live news updates from stock market", "/"],
    ],
    "F&O": [
      ["Indices", "Track markets across the globe", "/"],
      ["Terminal", "Track charts, orders, positions, watchlists in one place", "/"],
      ["Option Chain", "Analyse chains, view payoffs, create baskets", "/"],
      ["Pledge", "Get extra balance for trading", "/"],
      ["Commodities", "Trade in Crude Oil, Gold, Silver and more", "/"],
      ["API Trading", "Set up and execute trades through our API", "/"],
    ],
    "Mutual Funds": [
      ["Explore Mutual Funds", "Explore funds for your goals", "/"],
      ["SIP", "Invest regularly", "/"],
      ["Top Funds", "Explore popular mutual funds", "/"],
      ["Fund Screener", "Compare mutual funds", "/"],
    ],
    More: [
      ["About Groww", "Learn more about Groww", "/"],
      ["Calculators", "Explore financial calculators", "/"],
      ["Help & Support", "Get help", "/"],
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
          <Link to="/" className="groww-logo" onClick={() => setActiveMenu("")}>
            <img src={groww} alt="groww-logo" />
          </Link>

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
                <Link
                  to={item[2] || "/"}
                  className="dropdown-link"
                  key={index}
                  onClick={() => setActiveMenu("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </Link>
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
                    <div className="login-step-box">
                      <h2>Welcome to Groww</h2>
                      <div className="input-group">
                        <label>Your Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleEmailContinue()}
                        />
                      </div>
                      {error && <p className="error-msg">{error}</p>}
                      <button className="continue-btn" onClick={handleEmailContinue}>
                        Continue
                      </button>
                    </div>
                  ) : (
                    <div className="login-step-box">
                      <h2>Enter Password</h2>
                      <p className="user-email-display">{email}</p>
                      <div className="input-group">
                        <label>Password</label>
                        <div className="password-wrapper">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                          />
                          <span
                            className="toggle-pass"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? "Hide" : "Show"}
                          </span>
                        </div>
                      </div>

                      <div className="password-rules">
                        <p className={password.length >= 8 ? "valid" : ""}>• At least 8 characters</p>
                        <p className={/[A-Z]/.test(password) ? "valid" : ""}>• One uppercase letter</p>
                        <p className={/[a-z]/.test(password) ? "valid" : ""}>• One lowercase letter</p>
                        <p className={/[0-9]/.test(password) ? "valid" : ""}>• One number</p>
                        <p className={/[@$!%*?&]/.test(password) ? "valid" : ""}>• One special character (@$!%*?&)</p>
                      </div>

                      <button
                        className="continue-btn"
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
