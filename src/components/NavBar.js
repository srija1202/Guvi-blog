import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="guvi">GUVI</div>
      <div className="container-fluid">
        <Link
          to={"/"}
          className={`navbar-brand ps-4 ${activeTab === "/" ? "active" : ""}`}
          onClick={() => handleTabClick("/")}
        ></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to={"/"}
              className={`nav-link ${activeTab === "/" ? "active" : ""}`}
              onClick={() => handleTabClick("/")}
            >
              All
            </Link>
            <Link
              to={"/full-stack-development"}
              className={`nav-link fullstack ${
                activeTab === "/full-stack-development" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/full-stack-development")}
            >
              Full Stack Development
            </Link>
            <Link
              to={"/data-science"}
              className={`nav-link datascience ${
                activeTab === "/data-science" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/data-science")}
            >
              Data Science
            </Link>
            <Link
              to={"/cyber-security"}
              className={`nav-link cybersecurity ${
                activeTab === "/cyber-security" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/cyber-security")}
            >
              Cyber Security
            </Link>
            <Link
              to={"/career"}
              className={`nav-link career ${
                activeTab === "/career" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/career")}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
