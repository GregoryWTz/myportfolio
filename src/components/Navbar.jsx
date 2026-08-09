import { useState } from "react";
import { nav } from "../data/siteData";
import "../styles/Navbar.css";

function Navbar() {
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
          className="navbar__contact-btn"
          aria-label="Open chat"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.08 6.02-.1.98-.42 2.2-1.24 3.34a.5.5 0 00.54.78c1.9-.5 3.36-1.42 4.24-2.09.75.16 1.54.25 2.38.25 4.97 0 9-3.58 9-8s-4.03-8-9-8z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
