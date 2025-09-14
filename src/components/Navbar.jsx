import React from "react";
import "./Navbar.css";

function Navbar({ onSelectCategory }) {
  return (
    <div>
      {/* Announcement bar */}
      <div className="announcement-bar">
        UP TO 40% OFF
      </div>

      {/* Main navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt="Adidas Logo"
          />
        </div>

        {/* Links */}
        <ul className="navbar__links">
          <li><a href="#" onClick={() => onSelectCategory && onSelectCategory("Men")}>Men</a></li>
          <li><a href="#" onClick={() => onSelectCategory && onSelectCategory("Women")}>Women</a></li>
          <li><a href="#" onClick={() => onSelectCategory && onSelectCategory("Kids")}>Kids</a></li>
          <li><a href="#" onClick={() => onSelectCategory && onSelectCategory("Sports")}>Sports</a></li>
          <li><a href="#" onClick={() => onSelectCategory && onSelectCategory("New")}>New</a></li>
        </ul>

        {/* Search + Cart */}
        <div className="navbar__actions">
          <input
            type="text"
            placeholder="Search..."
            className="navbar__search"
          />
          <div className="navbar__cart" style={{ fontSize: "24px", cursor: "pointer" }}>
            🛒
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

