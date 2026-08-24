import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const nav = t.nav;
  const [activeHref, setActiveHref] = useState(nav.links[0].href);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setActiveHref(href);

    if (location.pathname !== "/") {
      // Not on the homepage — go there first, then scroll once loaded
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          {nav.brand}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.links.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${
                  activeHref === link.href ? "navbar__link--active" : ""
                }`}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`navbar__link ${
                  activeHref === link.href ? "navbar__link--active" : ""
                }`}
                onClick={() => setActiveHref(link.href)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className="navbar__lang-toggle"
          onClick={toggleLanguage}
          aria-label={
            language === "en" ? "Switch to Indonesian" : "Switch to English"
          }
        >
          <span
            className={`navbar__lang-option ${
              language === "id" ? "navbar__lang-option--active" : ""
            }`}
          >
            ID
          </span>
          <span className="navbar__lang-divider">|</span>
          <span
            className={`navbar__lang-option ${
              language === "en" ? "navbar__lang-option--active" : ""
            }`}
          >
            EN
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
