import React from "react";
import "./styles.css";

const servicesData = [
  {
    id: "01",
    icon: "🏢",
    title: "Corporate Branding",
    description:
      "Complete brand identity solutions — from logo design to signage systems for corporations and enterprises.",
  },
  {
    id: "02",
    icon: "🖨️",
    title: "Printing Solutions",
    description:
      "Large format, Colour Jet, and commercial printing for banners, posters, hoardings, and marketing materials.",
  },
  {
    id: "03",
    icon: "✂️",
    title: "Acrylic Laser Cutting",
    description:
      "Precision laser-cut acrylic letters, logos, and decorative elements for premium signage applications.",
  },
  {
    id: "04",
    icon: "📐",
    title: "2D & 3D Boards",
    description:
      "Custom fabricated dimensional signage boards — illuminated, backlit, and channel letter systems.",
  },
  {
    id: "05",
    icon: "💡",
    title: "Neon Boards",
    description:
      "Vibrant LED neon and traditional neon signs for retail, hospitality, and events.",
  },
  {
    id: "06",
    icon: "🛣️",
    title: "Outdoor Advertising",
    description:
      "Highway hoardings, road signage, traffic boards, and billboard advertising across Jharkhand.",
  },
  {
    id: "07",
    icon: "🏪",
    title: "Indoor Branding",
    description:
      "Retail interior graphics, promotional displays, wall murals and POS branding for showrooms and offices.",
  },
  {
    id: "08",
    icon: "🎁",
    title: "Promotional Products",
    description:
      "Branded mugs, T-shirts, badges, ID cards, trophies, medals and corporate gifting solutions.",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="servicesSection">
      <div className="servicesHeader" data-aos="zoom-in-right">
        <span className="sectionTag">What We Do</span>

        <h2 className="sectionHeading">
          Our <em className="sectionHeadingHighlight">Services</em>
        </h2>
      </div>

      <div className="servicesGrid">
        {servicesData.map((service) => (
          <div key={service.id} className="serviceCard">
            <div className="serviceNumber">{service.id}</div>
            <div className="serviceIcon">{service.icon}</div>
            <h3 className="serviceTitle">{service.title}</h3>
            <p className="serviceDescription">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
