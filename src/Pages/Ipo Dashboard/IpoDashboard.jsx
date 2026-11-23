import React, { useState } from "react";
import "./IpoDashboard.css";

const openIposData = [
  { id: 1, name: "Foodlink F&B Holdings", logo: "FL", color: "#4b5563", type: "Mainboard", openDate: "26 Nov 2026", closeDate: "30 Nov 2026", priceRange: "₹181 - ₹191", subscription: "1.45x", lotSize: "78 Shares" },
  { id: 2, name: "Shree Siddhivinayak Greentech", logo: "SS", color: "#ea580c", type: "SME", openDate: "25 Nov 2026", closeDate: "27 Nov 2026", priceRange: "₹130 - ₹142", subscription: "4.12x", lotSize: "1000 Shares" },
];

const upcomingIposData = [
  { id: 1, name: "Zepto", logo: "zepto", color: "#7e22ce", type: "Mainboard", openingDate: "To be announced", hasDoc: true },
  { id: 2, name: "Razorpay", logo: "R", color: "#2563eb", type: "Mainboard", openingDate: "To be announced", hasDoc: false },
  { id: 3, name: "Truhome Finance", logo: "TF", color: "#0284c7", type: "Mainboard", openingDate: "To be announced", hasDoc: true },
  { id: 4, name: "Marri Retail", logo: "MR", color: "#dc2626", type: "Mainboard", openingDate: "To be announced", hasDoc: true },
  { id: 5, name: "InCred Holdings", logo: "IC", color: "#d97706", type: "Mainboard", openingDate: "To be announced", hasDoc: false },
];

const closedIposData = [
  { id: 1, name: "Watrana Rentals", logo: "W", color: "#b91c1c", type: "SME", openDate: "19 Nov 2026", closeDate: "23 Nov 2026", listingDate: "27 Nov 2026", allotmentDate: "25 Nov 2026" },
  { id: 2, name: "Mahanadi Coalfields", logo: "MC", color: "#1d4ed8", type: "Mainboard", openDate: "19 Nov 2026", closeDate: "23 Nov 2026", listingDate: "27 Nov 2026", allotmentDate: "25 Nov 2026" },
];

function IpoDashboard() {
  const [filter, setFilter] = useState("All");
  const [activeNav, setActiveNav] = useState("All IPOs");

  const filterList = (list) => {
    if (filter === "All") return list;
    return list.filter((item) => item.type === filter);
  };

  const scrollToSection = (id, label) => {
    setActiveNav(label);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="ipo-page-wrapper">
      <div className="ipo-top-header">
        <h2>IPO Dashboard</h2>
        <div className="ipo-filter-tabs">
          {["All", "Mainboard", "SME"].map((tab) => (
            <button
              key={tab}
              className={`ipo-tab-btn ${filter === tab ? "active" : ""}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="ipo-stats-grid" id="all-ipos">
          <div className="stat-box">
            <span>Open IPOs</span>
            <h3>2</h3>
          </div>
          <div className="stat-box">
            <span>Upcoming IPOs</span>
            <h3>25</h3>
          </div>
          <div className="stat-box">
            <span>Closed IPOs</span>
            <h3>140</h3>
          </div>
          <div className="stat-box">
            <span>IPOs listed in gains</span>
            <h3 className="text-green">82</h3>
          </div>
          <div className="stat-box">
            <span>IPOs listed in loss</span>
            <h3 className="text-red">29</h3>
          </div>
        </div>
      </div>

      <div className="ipo-main-content">
        <div className="ipo-left-sections">
          {/* Open IPOs */}
          <div className="ipo-section" id="open-ipos">
            <div className="section-title-row">
              <h3>Open IPOs</h3>
              <span className="view-all-link">View All</span>
            </div>
            <div className="ipo-table-card horizontal-scroll">
              <table className="ipo-table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Type</th>
                    <th>Open Date</th>
                    <th>Close Date</th>
                    <th>Issue Price</th>
                    <th>Overall Subscription</th>
                    <th>Lot Size</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList(openIposData).map((ipo) => (
                    <tr key={ipo.id}>
                      <td className="ipo-company-cell">
                        <span className="ipo-logo" style={{ backgroundColor: ipo.color }}>{ipo.logo}</span>
                        <span>{ipo.name}</span>
                      </td>
                      <td>{ipo.type}</td>
                      <td>{ipo.openDate}</td>
                      <td>{ipo.closeDate}</td>
                      <td>{ipo.priceRange}</td>
                      <td>{ipo.subscription}</td>
                      <td>{ipo.lotSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming IPOs */}
          <div className="ipo-section" id="upcoming-ipos">
            <div className="section-title-row">
              <h3>Upcoming IPOs</h3>
              <span className="view-all-link">View All</span>
            </div>
            <div className="ipo-table-card horizontal-scroll">
              <table className="ipo-table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Type</th>
                    <th>Opening Date</th>
                    <th>Document</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList(upcomingIposData).map((ipo) => (
                    <tr key={ipo.id}>
                      <td className="ipo-company-cell">
                        <span className="ipo-logo" style={{ backgroundColor: ipo.color }}>{ipo.logo}</span>
                        <span>{ipo.name}</span>
                      </td>
                      <td>{ipo.type}</td>
                      <td>{ipo.openingDate}</td>
                      <td>
                        {ipo.hasDoc ? (
                          <span className="ipo-doc-link">📄 IPO Doc</span>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Closed IPOs */}
          <div className="ipo-section" id="closed-ipos">
            <div className="section-title-row">
              <h3>Closed IPOs</h3>
              <span className="view-all-link">View All</span>
            </div>
            <div className="ipo-table-card horizontal-scroll">
              <table className="ipo-table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Type</th>
                    <th>Open Date</th>
                    <th>Close Date</th>
                    <th>Listing Date</th>
                    <th>Allotment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList(closedIposData).map((ipo) => (
                    <tr key={ipo.id}>
                      <td className="ipo-company-cell">
                        <span className="ipo-logo" style={{ backgroundColor: ipo.color }}>{ipo.logo}</span>
                        <span>{ipo.name}</span>
                      </td>
                      <td>{ipo.type}</td>
                      <td>{ipo.openDate}</td>
                      <td>{ipo.closeDate}</td>
                      <td>{ipo.listingDate}</td>
                      <td>{ipo.allotmentDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side Sticky Quick Navigation */}
        <div className="ipo-right-nav">
          <div className="quick-nav-card">
            <h4>Quick Navigation</h4>
            <ul>
              {[
                { label: "All IPOs", target: "all-ipos" },
                { label: "Open IPOs", target: "open-ipos" },
                { label: "Upcoming IPOs", target: "upcoming-ipos" },
                { label: "Closed IPOs", target: "closed-ipos" },
                { label: "IPO Subscription", target: "open-ipos" },
                { label: "IPO Allotment Status", target: "closed-ipos" },
              ].map((navItem) => (
                <li
                  key={navItem.label}
                  className={activeNav === navItem.label ? "active" : ""}
                  onClick={() => scrollToSection(navItem.target, navItem.label)}
                >
                  {navItem.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpoDashboard;
