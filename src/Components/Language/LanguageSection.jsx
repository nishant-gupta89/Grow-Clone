import React, { useState } from 'react';
import './LanguageSection.css';

const languageCards = [
  {
    id: 0,
    title: "Mind over Markets",
    subtitle: "",
    type: "podcast",
    bg: "#b9c297",
    textColor: "#1e293b",
    landmark: "🎙️"
  },
  {
    id: 1,
    title: "Market Ki Baat",
    subtitle: "",
    type: "podcast-dark",
    bg: "#1f242d",
    textColor: "#4ade80",
    landmark: "📈"
  },
  {
    id: 2,
    title: "தமிழ்",
    subtitle: "Tamil",
    type: "lang",
    bg: "#f8fafc",
    textColor: "#a855f7",
    landmark: "🛕"
  },
  {
    id: 3,
    title: "मराठी",
    subtitle: "Marathi",
    type: "lang",
    bg: "#f8fafc",
    textColor: "#eab308",
    landmark: "🏛️"
  },
  {
    id: 4,
    title: "हिंदी",
    subtitle: "Hindi",
    type: "lang",
    bg: "#f8fafc",
    textColor: "#475569",
    landmark: "🕌"
  }
];

const LanguageSection = () => {
  const [activeIndex, setActiveIndex] = useState(2); // बीच वाला कार्ड सक्रिय रहेगा

  return (
    <section className="lang-circle-section">
      {/* ऊपर की मुख्य हेडिंग */}
      <div className="lang-header">
        <h2>Finance simplified, in your language</h2>
        <div className="youtube-badge">
          <span className="yt-icon">▶</span>
          <span>Youtube</span>
        </div>
      </div>

      {/* सर्कल / आर्क एनीमेशन कंटेनर */}
      <div className="circle-cards-stage">
        {languageCards.map((card, index) => {
          // बीच वाले कार्ड से दूरी निकालें ताकि गोल (Circle/Arc) आकार बने
          const offset = index - activeIndex;
          const rotateDeg = offset * 8; // कार्ड का झुकाव (Angle)
          const translateY = Math.abs(offset) * 26; // किनारों के कार्ड थोड़ा नीचे झुकेंगे (Circle Arc)
          const scale = index === activeIndex ? 1.06 : 0.96;

          return (
            <div
              key={card.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`lang-arc-card ${index === activeIndex ? 'active-circle-card' : ''}`}
              style={{
                backgroundColor: card.bg,
                transform: `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
                zIndex: 10 - Math.abs(offset)
              }}
            >
              <div className="card-top-text" style={{ color: card.textColor }}>
                <h3>{card.title}</h3>
              </div>

              {/* नीचे का इलस्ट्रेशन / आइकन भाग */}
              <div className="card-visual-area">
                <span className="landmark-graphic">{card.landmark}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LanguageSection;
