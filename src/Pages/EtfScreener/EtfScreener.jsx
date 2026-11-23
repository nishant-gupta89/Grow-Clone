
import React, { useState } from "react";
import "./EtfScreener.css";

const etfData = [
  { id: 1, name: "Groww Nifty 50 ETF", logo: "G", color: "#00b386", category: "Nifty 50", price: "₹10.28", change: "-0.15 (1.44%)", isPositive: false, nav: "₹10.44", delta: "+1.56%", volume: "11,81,399", returns1Y: "-0.62%" },
  { id: 2, name: "Nippon India ETF Nifty 50 BeES", logo: "N", color: "#ef4444", category: "Nifty 50", price: "₹289.43", change: "-4.79 (1.63%)", isPositive: false, nav: "₹294.47", delta: "+1.74%", volume: "1,16,23,703", returns1Y: "-0.52%" },
  { id: 3, name: "Zerodha Nifty 50 ETF", logo: "Z", color: "#1e293b", category: "Nifty 50", price: "₹10.20", change: "-0.15 (1.45%)", isPositive: false, nav: "₹10.38", delta: "+1.76%", volume: "21,38,302", returns1Y: "-0.28%" },
  { id: 4, name: "SBI-ETF NIFTY 50", logo: "SBI", color: "#0284c7", category: "Nifty 50", price: "₹273.56", change: "-4.16 (1.50%)", isPositive: false, nav: "₹278.28", delta: "+1.73%", volume: "10,65,563", returns1Y: "-0.54%" },
  { id: 5, name: "JioBlackRock Nifty 50 ETF", logo: "J", color: "#84cc16", category: "Nifty 50", price: "₹13.04", change: "-0.23 (1.73%)", isPositive: false, nav: "₹13.24", delta: "+1.53%", volume: "3,59,314", returns1Y: "-" },
  { id: 6, name: "Nippon India ETF Gold BeES", logo: "N", color: "#ef4444", category: "Gold", price: "₹64.80", change: "+0.45 (0.70%)", isPositive: true, nav: "₹65.10", delta: "+0.46%", volume: "48,12,310", returns1Y: "+24.15%" },
  { id: 7, name: "HDFC Gold ETF", logo: "H", color: "#1d4ed8", category: "Gold", price: "₹66.40", change: "+0.52 (0.79%)", isPositive: true, nav: "₹66.75", delta: "+0.53%", volume: "11,20,890", returns1Y: "+23.90%" },
  { id: 8, name: "Nippon India Silver ETF", logo: "N", color: "#ef4444", category: "Silver", price: "₹88.30", change: "-1.15 (1.29%)", isPositive: false, nav: "₹89.10", delta: "+0.91%", volume: "19,30,500", returns1Y: "+18.40%" },
  { id: 9, name: "Motilal Oswal Nasdaq 100 ETF", logo: "M", color: "#eab308", category: "International", price: "₹168.75", change: "+2.40 (1.44%)", isPositive: true, nav: "₹169.50", delta: "+0.44%", volume: "7,45,210", returns1Y: "+31.20%" },
  { id: 10, name: "Nippon India ETF Liquid BeES", logo: "N", color: "#ef4444", category: "Debt", price: "₹1,000.01", change: "+0.01 (0.00%)", isPositive: true, nav: "₹1,000.00", delta: "0.00%", volume: "25,60,700", returns1Y: "+6.45%" },
  { id: 11, name: "ICICI Prudential Nifty 50 ETF", logo: "I", color: "#f97316", category: "Nifty 50", price: "₹278.90", change: "-0.95 (0.34%)", isPositive: false, nav: "₹280.15", delta: "+0.45%", volume: "9,85,400", returns1Y: "-0.41%" },
  { id: 12, name: "HDFC Nifty 50 ETF", logo: "H", color: "#1d4ed8", category: "Nifty 50", price: "₹271.30", change: "+1.75 (0.65%)", isPositive: true, nav: "₹272.10", delta: "+0.29%", volume: "6,20,100", returns1Y: "+0.12%" },
  { id: 13, name: "Mirae Asset Nifty 50 ETF", logo: "MA", color: "#1e3a8a", category: "Nifty 50", price: "₹259.10", change: "+1.45 (0.56%)", isPositive: true, nav: "₹260.05", delta: "+0.37%", volume: "4,12,800", returns1Y: "+0.08%" },
  { id: 14, name: "Kotak Nifty 50 ETF", logo: "K", color: "#dc2626", category: "Nifty 50", price: "₹264.80", change: "-1.10 (0.41%)", isPositive: false, nav: "₹265.90", delta: "+0.42%", volume: "3,45,200", returns1Y: "-0.35%" },
  { id: 15, name: "UTI Nifty 50 ETF", logo: "U", color: "#2563eb", category: "Nifty 50", price: "₹268.40", change: "-1.25 (0.46%)", isPositive: false, nav: "₹269.60", delta: "+0.45%", volume: "2,90,150", returns1Y: "-0.48%" },
  { id: 16, name: "SBI Gold ETF", logo: "SBI", color: "#0284c7", category: "Gold", price: "₹65.95", change: "+0.48 (0.73%)", isPositive: true, nav: "₹66.20", delta: "+0.38%", volume: "8,75,300", returns1Y: "+23.80%" },
  { id: 17, name: "ICICI Prudential Gold ETF", logo: "I", color: "#f97316", category: "Gold", price: "₹66.10", change: "+0.50 (0.76%)", isPositive: true, nav: "₹66.40", delta: "+0.45%", volume: "9,15,600", returns1Y: "+24.05%" },
  { id: 18, name: "Kotak Gold ETF", logo: "K", color: "#dc2626", category: "Gold", price: "₹65.75", change: "+0.49 (0.75%)", isPositive: true, nav: "₹66.00", delta: "+0.38%", volume: "6,85,200", returns1Y: "+23.60%" },
  { id: 19, name: "Axis Gold ETF", logo: "A", color: "#9f1239", category: "Gold", price: "₹65.30", change: "+0.42 (0.65%)", isPositive: true, nav: "₹65.55", delta: "+0.38%", volume: "3,10,450", returns1Y: "+23.40%" },
  { id: 20, name: "Zerodha Gold ETF", logo: "Z", color: "#1e293b", category: "Gold", price: "₹12.85", change: "+0.09 (0.71%)", isPositive: true, nav: "₹12.92", delta: "+0.54%", volume: "14,20,600", returns1Y: "+24.30%" },
  { id: 21, name: "ICICI Prudential Silver ETF", logo: "I", color: "#f97316", category: "Silver", price: "₹89.15", change: "-1.05 (1.16%)", isPositive: false, nav: "₹89.90", delta: "+0.84%", volume: "14,60,800", returns1Y: "+18.65%" },
  { id: 22, name: "HDFC Silver ETF", logo: "H", color: "#1d4ed8", category: "Silver", price: "₹88.90", change: "-1.10 (1.22%)", isPositive: false, nav: "₹89.65", delta: "+0.84%", volume: "9,50,400", returns1Y: "+18.20%" },
  { id: 23, name: "Aditya Birla Sun Life Silver ETF", logo: "AB", color: "#b91c1c", category: "Silver", price: "₹89.45", change: "-0.98 (1.08%)", isPositive: false, nav: "₹90.10", delta: "+0.73%", volume: "5,12,300", returns1Y: "+18.10%" },
  { id: 24, name: "Kotak Silver ETF", logo: "K", color: "#dc2626", category: "Silver", price: "₹88.70", change: "-1.12 (1.25%)", isPositive: false, nav: "₹89.40", delta: "+0.79%", volume: "4,80,900", returns1Y: "+17.95%" },
  { id: 25, name: "SBI Silver ETF", logo: "SBI", color: "#0284c7", category: "Silver", price: "₹89.05", change: "-1.02 (1.13%)", isPositive: false, nav: "₹89.75", delta: "+0.79%", volume: "6,30,100", returns1Y: "+18.50%" },
  { id: 26, name: "Mirae Asset NYSE FANG+ ETF", logo: "MA", color: "#1e3a8a", category: "International", price: "₹104.25", change: "+1.95 (1.91%)", isPositive: true, nav: "₹103.80", delta: "-0.43%", volume: "8,40,120", returns1Y: "+42.80%" },
  { id: 27, name: "Nippon India ETF Hang Seng BeES", logo: "N", color: "#ef4444", category: "International", price: "₹318.90", change: "+4.60 (1.46%)", isPositive: true, nav: "₹317.50", delta: "-0.44%", volume: "4,90,300", returns1Y: "+14.20%" },
  { id: 28, name: "Motilal Oswal S&P 500 Index ETF", logo: "M", color: "#eab308", category: "International", price: "₹21.90", change: "+0.22 (1.01%)", isPositive: true, nav: "₹21.85", delta: "-0.23%", volume: "7,10,900", returns1Y: "+26.40%" },
  { id: 29, name: "Mirae Asset S&P 500 Top 50 ETF", logo: "MA", color: "#1e3a8a", category: "International", price: "₹46.80", change: "+0.55 (1.19%)", isPositive: true, nav: "₹46.60", delta: "-0.43%", volume: "3,25,400", returns1Y: "+29.10%" },
  { id: 30, name: "Mirae Asset Hang Seng TECH ETF", logo: "MA", color: "#1e3a8a", category: "International", price: "₹19.45", change: "+0.38 (1.99%)", isPositive: true, nav: "₹19.30", delta: "-0.77%", volume: "9,12,700", returns1Y: "+19.85%" },
  { id: 31, name: "Bharat Bond ETF - April 2030", logo: "BB", color: "#0d9488", category: "Debt", price: "₹1,385.60", change: "+0.85 (0.06%)", isPositive: true, nav: "₹1,386.10", delta: "+0.04%", volume: "1,45,200", returns1Y: "+7.85%" },
  { id: 32, name: "Zerodha Nifty 1D Rate Liquid ETF", logo: "Z", color: "#1e293b", category: "Debt", price: "₹105.42", change: "+0.02 (0.02%)", isPositive: true, nav: "₹105.42", delta: "0.00%", volume: "34,10,500", returns1Y: "+6.65%" },
  { id: 33, name: "DSP Liquid ETF", logo: "D", color: "#16a34a", category: "Debt", price: "₹1,000.05", change: "+0.03 (0.00%)", isPositive: true, nav: "₹1,000.04", delta: "0.00%", volume: "5,40,200", returns1Y: "+6.50%" },
  { id: 34, name: "SBI Nifty 10 yr Benchmark G-Sec ETF", logo: "SBI", color: "#0284c7", category: "Debt", price: "₹242.15", change: "+0.35 (0.14%)", isPositive: true, nav: "₹242.40", delta: "+0.10%", volume: "1,12,800", returns1Y: "+8.20%" },
  { id: 35, name: "Nippon India ETF Long Term Gilt", logo: "N", color: "#ef4444", category: "Debt", price: "₹38.90", change: "+0.08 (0.21%)", isPositive: true, nav: "₹38.95", delta: "+0.13%", volume: "4,65,900", returns1Y: "+8.45%" },
  { id: 36, name: "ICICI Prudential Liquid ETF", logo: "I", color: "#f97316", category: "Debt", price: "₹1,000.02", change: "+0.01 (0.00%)", isPositive: true, nav: "₹1,000.01", delta: "0.00%", volume: "8,90,300", returns1Y: "+6.55%" },
  { id: 37, name: "Bharat Bond ETF - April 2031", logo: "BB", color: "#0d9488", category: "Debt", price: "₹1,264.80", change: "+0.72 (0.06%)", isPositive: true, nav: "₹1,265.20", delta: "+0.03%", volume: "98,400", returns1Y: "+7.95%" },
  { id: 38, name: "Groww Nifty EV & New Age Auto ETF", logo: "G", color: "#00b386", category: "Nifty 50", price: "₹32.15", change: "-0.12 (0.37%)", isPositive: false, nav: "₹32.30", delta: "+0.47%", volume: "14,25,600", returns1Y: "+5.40%" },
  { id: 39, name: "Bandhan Nifty 50 ETF", logo: "B", color: "#e11d48", category: "Nifty 50", price: "₹261.75", change: "-1.30 (0.49%)", isPositive: false, nav: "₹262.90", delta: "+0.44%", volume: "1,54,200", returns1Y: "-0.45%" },
  { id: 40, name: "LIC MF Nifty 50 ETF", logo: "L", color: "#0369a1", category: "Nifty 50", price: "₹265.10", change: "-1.18 (0.44%)", isPositive: false, nav: "₹266.25", delta: "+0.43%", volume: "1,10,800", returns1Y: "-0.39%" },
];

function EtfScreener() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["Nifty 50", "Gold", "Silver", "International", "Debt"];

  const filteredData =
    activeFilter === "All"
      ? etfData
      : etfData.filter((item) => item.category === activeFilter);

  return (
    <div className="etf-screener-container">

      <div className="etf-top-bar">
        <h2>
          ETF Stocks Screener <span className="refresh-icon">↻</span>
        </h2>
      </div>

      <div className="etf-filter-row">

        <button
          className="filter-icon-btn"
          onClick={() => setActiveFilter("All")}
        >
          <span>☷</span>
        </button>

        {filters.map((pill) => (
          <button
            key={pill}
            className={`etf-filter-pill ${
              activeFilter === pill ? "selected" : ""
            }`}
            onClick={() =>
              setActiveFilter(activeFilter === pill ? "All" : pill)
            }
          >
            {pill}
          </button>
        ))}

        {activeFilter !== "All" && (
          <button
            className="clear-all-btn"
            onClick={() => setActiveFilter("All")}
          >
            Clear all
          </button>
        )}

      </div>

      <div className="etf-table-wrapper">
        <table className="etf-table">

          <thead>
            <tr>
              <th>Company</th>
              <th></th>
              <th>Market price ↕</th>
              <th>1D price change ↕</th>
              <th>NAV/delta from mkt</th>
              <th>Today's volume ↕</th>
              <th>1Y returns ⌄</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map((etf) => (
              <tr key={etf.id}>

                <td>
                  <div className="etf-company-info">
                    <span
                      className="etf-company-logo"
                      style={{ backgroundColor: etf.color }}
                    >
                      {etf.logo}
                    </span>

                    <strong>{etf.name}</strong>
                  </div>
                </td>

                <td>
                  <svg className="etf-mini-chart" viewBox="0 0 100 35">
                    <polyline
                      points="0,5 8,12 16,9 24,15 32,13 40,18 48,15 56,22 64,19 72,25 80,23 88,28 96,26"
                      fill="none"
                      stroke="#ff5630"
                      strokeWidth="1.8"
                    />
                  </svg>
                </td>

                <td>{etf.price}</td>

                <td className={etf.isPositive ? "positive" : "negative"}>
                  {etf.change}
                </td>

                <td>
                  <div>{etf.nav}</div>
                  <small className="positive">{etf.delta}</small>
                </td>

                <td>{etf.volume}</td>

                <td className={
                  etf.returns1Y.startsWith("+")
                    ? "positive"
                    : "negative"
                }>
                  {etf.returns1Y}
                </td>

              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td colSpan="7" className="no-etf-data">
                  No ETFs found
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default EtfScreener;
