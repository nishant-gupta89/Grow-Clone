import React, { useState } from "react";
import "./IntradayScreener.css";

const stocksData = [
  {
    id: 1,
    name: "NHPC",
    logo: "NH",
    color: "#3b82f6",
    price: "₹74.66",
    change: "-3.64 (4.65%)",
    isPositive: false,
    volume: "12,35,61,996",
    buyPercent: "26.64%",
  },
  {
    id: 2,
    name: "Hindustan Zinc",
    logo: "HZ",
    color: "#10b981",
    price: "₹454.90",
    change: "+18.10 (4.14%)",
    isPositive: true,
    volume: "3,45,12,800",
    buyPercent: "68.20%",
  },
  {
    id: 3,
    name: "BEL",
    logo: "BEL",
    color: "#0284c7",
    price: "₹289.45",
    change: "+7.30 (2.59%)",
    isPositive: true,
    volume: "2,18,90,410",
    buyPercent: "61.45%",
  },
  {
    id: 4,
    name: "Tata Motors",
    logo: "TM",
    color: "#6366f1",
    price: "₹792.15",
    change: "-12.40 (1.54%)",
    isPositive: false,
    volume: "1,85,44,320",
    buyPercent: "42.10%",
  },
  {
    id: 5,
    name: "Zomato",
    logo: "Z",
    color: "#ef4444",
    price: "₹264.80",
    change: "+9.15 (3.58%)",
    isPositive: true,
    volume: "5,62,19,005",
    buyPercent: "74.90%",
  },
];

function IntradayScreener() {
  const [activeFilter, setActiveFilter] = useState("Most Traded");

  const filteredStocks = stocksData.filter((stock) => {
    if (activeFilter === "Top Gainers") return stock.isPositive;
    if (activeFilter === "Top Losers") return !stock.isPositive;
    return true;
  });

  return (
    <div className="screener-page">
      <div className="screener-header">
        <h2>Intraday Stocks Screener</h2>
        <div className="filter-pills">
          {["Nifty 500", "Most Traded", "Top Gainers", "Top Losers"].map((pill) => (
            <button
              key={pill}
              className={`pill-btn ${activeFilter === pill ? "active" : ""}`}
              onClick={() => setActiveFilter(pill)}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      <div className="screener-table-card">
        <table className="screener-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Trend</th>
              <th>Market Price</th>
              <th>1D Change</th>
              <th>Volume</th>
              <th>Buyers %</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStocks.map((stock) => (
              <tr key={stock.id}>
                <td className="company-cell">
                  <span className="stock-badge" style={{ backgroundColor: stock.color }}>
                    {stock.logo}
                  </span>
                  <span className="stock-name">{stock.name}</span>
                </td>
                <td className="sparkline-cell">
                  <svg width="70" height="24" viewBox="0 0 70 24">
                    <polyline
                      fill="none"
                      stroke={stock.isPositive ? "#00b386" : "#eb5b3c"}
                      strokeWidth="2"
                      points={
                        stock.isPositive
                          ? "0,20 15,16 30,18 45,8 60,10 70,3"
                          : "0,4 15,8 30,6 45,15 60,13 70,21"
                      }
                    />
                  </svg>
                </td>
                <td className="price-cell">{stock.price}</td>
                <td className={stock.isPositive ? "text-green" : "text-red"}>
                  {stock.change}
                </td>
                <td>{stock.volume}</td>
                <td>{stock.buyPercent}</td>
                <td className="action-cell">
                  <button className="btn-buy">B</button>
                  <button className="btn-sell">S</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IntradayScreener;
