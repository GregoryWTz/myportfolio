import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Navbar.css";

function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const nav = t.nav;
  const [activeHref, setActiveHref] = useState(nav.links[0].href);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          {nav.brand}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${
                activeHref === link.href ? "navbar__link--active" : ""
              }`}
              onClick={() => setActiveHref(link.href)}
            >
              {link.label}
            </a>
          ))}
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
