import React, { useState, useEffect, useRef } from 'react';
import './TrustedSection.css';

const topReviews = [
  {
    id: 1,
    text: "Actually the UI is extremely simple and easy for users to adapt, that's what makes it unique.",
    name: "Rohit Roy",
    role: "Product Manager",
    position: "card-top-1"
  },
  {
    id: 2,
    text: "Groww.in was the platform where I first got onboard to MF and I would have to say, even for a beginner like me it made things quite easier.",
    name: "Ankit Puri",
    role: "Product Specialist, Google",
    position: "card-top-2"
  },
  {
    id: 3,
    text: "It's been a wonderful journey with Groww. The interface is clean and investing feels effortless.",
    name: "Amit Verma",
    role: "Software Engineer",
    position: "card-top-3"
  },
  {
    id: 4,
    text: "Best app for mutual funds and stocks. Customer support is quick and very helpful.",
    name: "Neha Sharma",
    role: "Marketing Lead",
    position: "card-top-4"
  }
];

const bottomReviews = [
  {
    id: 5,
    text: "Smooth onboarding process and zero hidden charges. Highly recommended for new investors.",
    name: "Vikram Singh",
    role: "Business Analyst",
    position: "card-bottom-1"
  },
  {
    id: 6,
    text: "I track all my SIPs and stocks in one place. The charts and insights are super clear.",
    name: "Priya Nair",
    role: "Data Scientist",
    position: "card-bottom-2"
  },
  {
    id: 7,
    text: "If you are one of those who would like to take control of how you save, use Groww. It's ridiculously easy portal.",
    name: "Shrijit Das",
    role: "Product Designer",
    position: "card-bottom-3"
  },
  {
    id: 8,
    text: "Fast order execution and great educational content for beginners in the stock market.",
    name: "Karan Mehta",
    role: "Financial Advisor",
    position: "card-bottom-4"
  }
];

const TrustedSection = () => {
  const [enteredBanner, setEnteredBanner] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!isInView) return;

      if (e.key === 'ArrowDown' && !enteredBanner) {
        e.preventDefault();
        setEnteredBanner(true);
      } else if (e.key === 'ArrowUp' && enteredBanner) {
        e.preventDefault();
        setEnteredBanner(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enteredBanner]);

  return (
    <div ref={sectionRef} className="trusted-zoom-container">
      {/* पीछे की लेयर: काला बैनर (जो अंदर जाने पर सामने प्रकट होगा) */}
      <section className={`dark-banner-layer ${enteredBanner ? 'dark-revealed' : 'dark-waiting'}`}>
        <div className="dark-banner-content">
          <div className="groww-glow-circle">
            <svg viewBox="0 0 100 100" className="groww-logo-svg">
              <defs>
                <linearGradient id="topGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffedd5" />
                  <stop offset="50%" stopColor="#fdba74" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient id="bottomGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="46" fill="url(#topGrad)" />
              <path d="M 4 58 L 32 45 L 54 55 L 94 26 A 46 46 0 0 1 4 58 Z" fill="url(#bottomGrad)" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="#ffffff" strokeWidth="4" />
            </svg>
          </div>

          <h2 className="dark-banner-heading">
            No account opening charges, no barriers.
            <br />
            Just Groww.
          </h2>

          <button className="dark-banner-btn">Start now</button>
        </div>
      </section>

      {/* आगे की लेयर: Trusted Section (कीबोर्ड से Down दबाने पर ज़ूम होकर इसके अंदर जाएंगे) */}
      <section className={`trusted-foreground-layer ${enteredBanner ? 'zoom-through-exit' : 'zoom-normal'}`}>
        <div className="reviews-grid-top">
          {topReviews.map((item) => (
            <div key={item.id} className={`review-card ${item.position}`}>
              <p className="review-text">{item.text}</p>
              <div className="reviewer-info">
                <div className="avatar-circle">{item.name.charAt(0)}</div>
                <div>
                  <h4 className="reviewer-name">{item.name}</h4>
                  <span className="reviewer-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="center-heading-box">
          <h2>Trusted by 130,834,586+ Indians</h2>
        </div>

        <div className="reviews-grid-bottom">
          {bottomReviews.map((item) => (
            <div key={item.id} className={`review-card ${item.position}`}>
              <p className="review-text">{item.text}</p>
              <div className="reviewer-info">
                <div className="avatar-circle">{item.name.charAt(0)}</div>
                <div>
                  <h4 className="reviewer-name">{item.name}</h4>
                  <span className="reviewer-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedSection;
