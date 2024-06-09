import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./transaction.css";
import Receipt from "./Receipt";
import cartIcon from "../icons/cart.png";
import userIcon from "../icons/profile.png";
import promo from "../icons/promo.png";
import homeIcon from "../icons/home.png";
import transact from "../icons/transact.png";

export const Transaction = () => {
  const [activeTab, setActiveTab] = useState("waiting");

  return (
    <div className="App flex flex-col h-screen justify-between bg-yellow-100 text-gray-800">
      <header className="App-header flex flex-col items-center py-4">
        <div className="Home">
          <div className="header">
            <img src={userIcon} alt="User Icon" className="icon" />
            <h1>ORDER 2 GO</h1>

            <Link to="/cart" style={{ textDecoration: "none" }}>
              <img src={cartIcon} alt="Cart Icon" className="icon" />
            </Link>
          </div>
          <div className="status-bar flex justify-between mb-4">
            {/* Make the "Waiting" tab clickable */}
            <div
              onClick={() => setActiveTab("waiting")}
              className={`status flex-1 text-center border-b-2 ${
                activeTab === "waiting" ? "border-yellow-400" : ""
              }`}
            >
              Waiting
            </div>
            {/* Make the "Preparing" tab clickable */}
            <div
              onClick={() => setActiveTab("preparing")}
              className={`status flex-1 text-center border-b-2 ${
                activeTab === "preparing" ? "border-yellow-400" : ""
              }`}
            >
              Preparing
            </div>
            <div
              className={`status flex-1 text-center border-b-2 ${
                activeTab === "pickup" ? "border-yellow-400" : ""
              }`}
            >
              Pick Up
            </div>
            <div
              className={`status flex-1 text-center border-b-2 ${
                activeTab === "completed" ? "border-yellow-400" : ""
              }`}
            >
              Completed
            </div>
          </div>
          {/* Render the Receipt component only under the "Waiting" tab */}
          {activeTab === "waiting" && <Receipt />}
        </div>
      </header>
      <footer className="footer">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="footer-button">
            <img src={promo} alt="Promo" />
          </button>
        </Link>

        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="footer-button">
            <img src={homeIcon} alt="Home" />
          </button>
        </Link>

        <Link to="/transaction" style={{ textDecoration: "none" }}>
          <button className="footer-button">
            <img src={transact} alt="Transact" />
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Transaction;
