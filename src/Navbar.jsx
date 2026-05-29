import { useState, useEffect } from "react";
import { NAV_LINKS } from "./siteData";
import styles from "./Navbar.module.css";
import Logo from "./Assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a
        href="#hero"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          handleNav("#hero");
        }}
      >
        <div className={styles.logoIconContainer}>
          <img src={Logo} alt={"KKM Logo"} className={styles.logoIcon} />
        </div>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#cta"
            className={styles.cta}
            onClick={(e) => {
              e.preventDefault();
              handleNav("#cta");
            }}
          >
            Get Quote
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.bar1open : styles.bar1} />
        <span className={menuOpen ? styles.bar2open : styles.bar2} />
        <span className={menuOpen ? styles.bar3open : styles.bar3} />
      </button>
    </nav>
  );
}
