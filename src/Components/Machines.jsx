import React from "react";
import "./styles.css";
import MachineBg1 from "../Assets/ColorJetMachinePrint_ImgID2.png";
import MachineBg2 from "../Assets/LaserCuttingMachine_ImgID3.png";

const machinesData = [
  {
    id: "01",
    // backgroundText: "JET",
    tag: "Industrial Grade",
    title: "Colour Jet",
    subtitle: "Machine Print",
    image: MachineBg1,
    animation: "flip-left",
    description:
      "High-speed, wide-format colour jet printing system capable of producing vibrant, large-scale prints for outdoor hoardings, flex boards, and display graphics.",
  },
  {
    id: "02",
    // backgroundText: "LASER",
    tag: "Precision Tech",
    title: "Acrylic Laser",
    subtitle: "Cutting Machine",
    image: MachineBg2,
    animation: "flip-right",
    description:
      "Fiber laser cutting system for ultra-precise acrylic, metal, and composite material cutting — enabling complex 2D & 3D signage fabrication with fine detail.",
  },
];

const Machines = () => {
  return (
    <section id="machines" className="machinesSection">
      <div className="fade-up" data-aos="zoom-in-right">
        <span className="sectionTag">Technology</span>

        <h2 className="sectionHeading">
          Our <em className="sectionHeadingHighlight">Machinery</em>
        </h2>
      </div>

      <div className="machinesGrid">
        {machinesData.map((machine) => (
          <div
            key={machine.id}
            className="machinePanel"
            data-aos={machine.animation}
            data-aos-duration="2000"
          >
            {/* <div className="machinePanelBackground">
              {machine.backgroundText}
            </div> */}
            <div
              className="machinePanelBackground"
              style={{
                backgroundImage: `linear-gradient(
      rgba(15, 15, 26, 0.65),
      rgba(26, 26, 46, 0.75)
    ), url(${machine.image})`,
              }}
            >
              {machine.backgroundText}
            </div>
            <div className="machineTag">{machine.tag}</div>

            <div className="machinePanelContent">
              <div className="machineLabel">Machine {machine.id}</div>

              <div className="machineName">
                {machine.title}
                <p>{machine.subtitle}</p>
              </div>

              <p className="machineDescription">{machine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Machines;
