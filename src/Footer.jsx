import React from "react";
import "./Footer.css";

const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    title: "Facebook",
    className: "socialButtonFacebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    title: "Instagram",
    className: "socialButtonInstagram",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    title: "YouTube",
    className: "socialButtonYoutube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#050505"
        />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#cta" },
];

const servicesLinks = [
  "Corporate Branding",
  "Printing Solutions",
  "Acrylic Laser Cutting",
  "2D & 3D Boards",
  "Neon Boards",
  "Outdoor Advertising",
];

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerTop">
        <div>
          <span className="footerBrandLogo">
            Kalpana Kala{" "}
            <span className="footerBrandLogoHighlight">Mandir</span>
          </span>

          <p className="footerBrandDescription">
            Total Ad. Solution. Jharkhand&apos;s pioneer advertising agency
            delivering printing, branding, signage & outdoor solutions since
            1989.
          </p>

          <div className="footerSocials">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className={`socialButton ${social.className}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footerColumnTitle">Quick Links</h4>

          <ul className="footerLinksList">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a className="footerLink" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footerColumnTitle">Services</h4>

          <ul className="footerLinksList">
            {servicesLinks.map((service) => (
              <li key={service}>
                <a className="footerLink" href="#services">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footerColumnTitle">Contact</h4>

          <div className="footerContactItem">
            <div className="footerContactIcon">📍</div>

            <p className="footerContactText">
              7 Laxmi Place, Kutchery Chowk, Ranchi – 834001, Jharkhand
            </p>
          </div>

          <div className="footerContactItem">
            <div className="footerContactIcon">📞</div>

            <div>
              <a className="footerContactLink" href="tel:+917004783261">
                +91 70047 83261
              </a>

              <a className="footerContactLink" href="tel:+919334251881">
                +91 93342 51881
              </a>
            </div>
          </div>

          <div className="footerContactItem">
            <div className="footerContactIcon">✉️</div>

            <div>
              <a
                className="footerContactLink"
                href="mailto:contact@kalpanakalamandir.in"
              >
                contact@kalpanakalamandir.in
              </a>

              <a
                className="footerContactLink"
                href="mailto:kalpanakalamandir@gmail.com"
              >
                kalpanakalamandir@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerBottomText">
          © 2026 Kalpana Kala Mandir. All rights reserved.
        </p>

        <div className="footerBottomTagline">TOTAL AD. SOLUTION</div>

        <p className="footerBottomText">Designed with ❤️ in Jharkhand</p>
      </div>
    </footer>
  );
};

export default Footer;
