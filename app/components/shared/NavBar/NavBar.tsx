"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { href: "#", label: "Home" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <div>
      <header>
        <h1>Sindyvaness</h1>
        <div
          className="hamburger"
          role="button"
          aria-label="Toggle mobile navigation"
          aria-expanded={isMobileNavOpen}
          tabIndex={0}
          onClick={toggleMobileNav}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              toggleMobileNav();
            }
          }}
        >
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </div>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav> 
      </header>

      {isMobileNavOpen && (
        <div className="mobileNav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
