import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/assets/logo/sibi-global-corporations.png";
import FloatingActions from "../FloatingActions";
import AIChatbot from "../AIChatbot";
import QuoteModal from "../Modal/QuoteModal";

const navItems = [
  {
    label: "Home",
    path: "/",
  },

  // =========================================
  // ABOUT US
  // =========================================
  {
    label: "About Us",
    path: "/about-us",
    dropdown: [
      {
        label: "Why Sibi Global",
        path: "/why-sibi-global",
      },
      {
        label: "Our Process",
        path: "/our-process",
      },
      {
        label: "Quality & Safety",
        path: "/quality-and-safety",
      },
    ],
  },

  // =========================================
  // SOLUTIONS
  // =========================================
  {
    label: "Solutions",
    path: "/our-solutions",
    dropdown: [
      {
        label: "Pre-Engineered Buildings",
        path: "/pre-engineered-buildings",
      },
      {
        label: "Structural Steel Fabrication",
        path: "/structural-steel-fabrication",
      },
      {
        label: "Industrial Shed Construction",
        path: "/industrial-shed-construction",
      },
      {
        label: "Mezzanine Floors",
        path: "/mezzanine-floors",
      },
      {
        label: "Steel Erection",
        path: "/steel-erection",
      },
      {
        label: "Turnkey Industrial Solutions",
        path: "/turnkey-industrial-solutions",
      },
    ],
  },

  {
    label: "Industries",
    path: "/industries",
  },

  {
    label: "Projects",
    path: "/projects",
  },

  {
    label: "Manufacturing",
    path: "/manufacturing",
  },

  {
    label: "Engineering",
    path: "/engineering",
  },

  {
    label: "Technology",
    path: "/technology",
  },

  {
    label: "Contact Us",
    path: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stores which dropdown is currently open
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Controls the "Get Project Quote" popup form
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const { pathname } = useLocation();

  const menuRef = useRef(null);

  // =========================================
  // CLOSE WHEN CLICKING OUTSIDE
  // =========================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================================
  // CLOSE WHEN ROUTE CHANGES
  // =========================================

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // =========================================
  // TOGGLE DROPDOWN
  // =========================================

  const toggleDropdown = (label) => {
    setActiveDropdown((current) =>
      current === label ? null : label
    );
  };

  // =========================================
  // CLOSE MENU
  // =========================================

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // =========================================
  // QUOTE MODAL OPEN / CLOSE
  // =========================================

  const openQuoteModal = () => {
    closeMenu();
    setQuoteModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // =========================================
  // CHECK ACTIVE DROPDOWN
  // =========================================

  const isDropdownActive = (item) => {
    if (pathname === item.path) {
      return true;
    }

    if (item.dropdown) {
      return item.dropdown.some(
        (dropdownItem) => pathname === dropdownItem.path
      );
    }

    return false;
  };

  return (
    <>

      <header
        className="main-header"
        ref={menuRef}
      >
        <div className="header-container">

          {/* =====================================
            LOGO
        ===================================== */}

          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="SIBI Global Corporation"
            />
          </Link>

          {/* =====================================
            MOBILE MENU CHECKBOX
        ===================================== */}

          <input
            type="checkbox"
            id="menu-toggle"
            checked={menuOpen}
            onChange={(e) => {
              setMenuOpen(e.target.checked);

              if (!e.target.checked) {
                setActiveDropdown(null);
              }
            }}
          />

          {/* =====================================
            MOBILE HAMBURGER
        ===================================== */}

          <label
            htmlFor="menu-toggle"
            className="menu-icon"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </label>

          {/* =====================================
            NAVIGATION
        ===================================== */}

          <nav
            className={`main-nav ${menuOpen ? "nav-open" : ""
              }`}
          >

            {navItems.map((item) => {

              {/* =================================
                ITEMS WITH DROPDOWN
            ================================= */}

              if (item.dropdown) {
                const dropdownOpen =
                  activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className={`nav-dropdown ${dropdownOpen ? "dropdown-active" : ""
                      }`}
                    onMouseEnter={() => {
                      if (window.innerWidth > 991) {
                        setActiveDropdown(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth > 991) {
                        setActiveDropdown(null);
                      }
                    }}
                  >

                    {/* =========================
                      MENU TITLE
                  ========================= */}

                    <div className="dropdown-title-wrapper">

                      <Link
                        to={item.path}
                        className={
                          isDropdownActive(item)
                            ? "active"
                            : ""
                        }
                        onClick={(e) => {

                          // On mobile, clicking parent opens dropdown
                          // instead of immediately navigating
                          if (window.innerWidth <= 991) {
                            e.preventDefault();
                            toggleDropdown(item.label);
                          }
                        }}
                      >
                        {item.label}
                      </Link>

                      {/* DROPDOWN ARROW */}

                      <button
                        type="button"
                        className="dropdown-arrow"
                        onClick={() =>
                          toggleDropdown(item.label)
                        }
                        aria-label={`Open ${item.label} menu`}
                        aria-expanded={dropdownOpen}
                      >
                        <span
                          className={
                            dropdownOpen
                              ? "arrow-up"
                              : ""
                          }
                        >
                          ⌄
                        </span>
                      </button>

                    </div>

                    {/* =========================
                      DROPDOWN MENU
                  ========================= */}

                    <div
                      className={`header-dropdown-menu ${dropdownOpen
                          ? "dropdown-open"
                          : ""
                        } ${item.label === "Solutions"
                          ? "solutions-dropdown"
                          : "about-dropdown"
                        }`}
                    >

                      {item.dropdown.map(
                        (dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.path}
                            className={
                              pathname ===
                                dropdownItem.path
                                ? "active"
                                : ""
                            }
                            onClick={closeMenu}
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      )}

                    </div>
                  </div>
                );
              }

              {/* =================================
                NORMAL MENU ITEM
            ================================= */}

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={
                    pathname === item.path
                      ? "active"
                      : ""
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* =====================================
              GET PROJECT QUOTE
              Now opens the QuoteModal popup instead
              of navigating to /contact
          ===================================== */}

            <Link
              className="quote-btn"
              onClick={openQuoteModal}
            >
              <span>Get Project Quote</span>
              <span className="quote-arrow">→</span>
            </Link>

          </nav>
        </div>
      </header>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
      />

      <FloatingActions />
      <AIChatbot />
    </>
  );
}