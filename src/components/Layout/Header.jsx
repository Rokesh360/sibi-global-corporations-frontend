import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/assets/logo/sibi-global-corporations.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Projects", path: "/projects" },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Why Sibi Global", path: "/why-sibi-global" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="main-header" ref={menuRef}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="SIBI Global" />
        </Link>

        {/* Hidden checkbox for CSS toggle */}
        <input
          type="checkbox"
          id="menu-toggle"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />

        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={pathname === item.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="quote-btn" onClick={() => setMenuOpen(false)}>
            Get Project Quote
            <span>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}