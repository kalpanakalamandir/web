import React from "react";
import "./styles.css";
import downloadPDF from "../Assets/KKM.pdf";

function CTA() {
  return (
    <section id="cta" className="ctaSection">
      <div className="ctaBackgroundText">KKM</div>

      <div className="ctaContent" data-aos="zoom-in">
        <h2 className="ctaHeading">
          Let's Build
          <br />
          Something Visible.
        </h2>

        <p className="ctaDescription">
          Tell us your branding challenge. Our team will design, fabricate, and
          install a solution that makes your brand impossible to ignore.
        </p>

        <div className="ctaButtonsContainer">
          <a href="mailto:contact@kalpanakalamandir.in" className="ctaButton">
            Start Your Project
          </a>
          <a href={downloadPDF} className="ctaButton" download>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
