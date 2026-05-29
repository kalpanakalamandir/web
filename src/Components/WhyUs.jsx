import React from "react";
import "./styles.css";

const whyUsData = [
  {
    id: 1,
    icon: "🏅",
    title: "35+ Years Experience",
    description:
      "Pioneer advertising agency in Jharkhand with over three decades of trusted service to businesses across East India.",
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Advanced Machinery",
    description:
      "Industrial Colour Jet printers and precision Acrylic Laser cutting machines for superior quality output at scale.",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Creative Design Team",
    description:
      "In-house designers who translate your vision into compelling, market-ready graphic concepts and layouts.",
  },
  {
    id: 4,
    icon: "🔄",
    title: "End-to-End Execution",
    description:
      "From concept and design to fabrication and installation — complete project ownership under one roof.",
  },
  {
    id: 5,
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Reliable delivery timelines backed by in-house production capability and a skilled on-ground team.",
  },
  {
    id: 6,
    icon: "🤝",
    title: "Trusted By Top Brands",
    description:
      "Partnered with Tata, Jockey, ACC, Birla, Union Bank, Powergrid, and many more leading organisations.",
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="whySection">
      <div className="whyHeader" data-aos="zoom-in-right">
        <span className="sectionTag">Why KKM</span>

        <h2 className="sectionHeading">
          Built On <em className="sectionHeadingHighlight">Trust.</em>
          <br />
          Driven By Quality.
        </h2>
      </div>

      <div className="whyGrid">
        {whyUsData.map((item) => (
          <div key={item.id} className="whyCard fade-up">
            <div className="whyCardIcon">{item.icon}</div>

            <h3 className="whyCardTitle">{item.title}</h3>

            <p className="whyCardDescription">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
