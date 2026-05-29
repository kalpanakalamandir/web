import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutVisual">
        <div className="aboutVisualInner">
          <div className="aboutVisualBackground">KKM</div>

          <div className="aboutAccentStripes"></div>

          <div className="aboutVisualContent">
            <div className="aboutBigYear">
              35<span className="aboutBigYearHighlight">+</span>
            </div>

            <p className="aboutYearCaption">Years of Excellence</p>
          </div>
        </div>
      </div>

      <div className="aboutContent fade-up">
        <span className="sectionTag">Our Story</span>

        <h2 className="sectionHeading">
          Pioneer <em className="sectionHeadingHighlight">Advertising</em>{" "}
          Agency in Jharkhand
        </h2>

        <p className="aboutDescription">
          Kalpana Kala Mandir (KKM) has been the East Zone&apos;s trusted total
          advertising solution since 1989. From humble beginnings to becoming a
          full-spectrum branding powerhouse, we deliver ideas, design, and
          flawless execution — under one roof.
        </p>

        <div className="aboutPillarsGrid">
          <div className="aboutPillarCard" data-aos="fade-down-right">
            <h4 className="aboutPillarTitle">Printing</h4>

            <p className="aboutPillarText">
              Colour Jet & large format printing for any scale
            </p>
          </div>

          <div className="aboutPillarCard" data-aos="zoom-in">
            <h4 className="aboutPillarTitle">Corporate Branding</h4>

            <p className="aboutPillarText">
              End-to-end brand identity & collateral
            </p>
          </div>

          <div className="aboutPillarCard" data-aos="fade-down-right">
            <h4 className="aboutPillarTitle">Outdoor Advertising</h4>

            <p className="aboutPillarText">
              Hoardings, road signs & billboards
            </p>
          </div>

          <div className="aboutPillarCard" data-aos="zoom-in">
            <h4 className="aboutPillarTitle">Indoor Branding</h4>

            <p className="aboutPillarText">
              Retail signage, neon boards & displays
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
