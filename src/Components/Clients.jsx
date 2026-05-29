import React from "react";
import "./styles.css";

import ClientLogo from "./ClientLogo";

import Clients_ImgID1 from "../Assets/ClientImages/Clients_ImgID1.png";
import Clients_ImgID2 from "../Assets/ClientImages/Clients_ImgID2.png";
import Clients_ImgID3 from "../Assets/ClientImages/Clients_ImgID3.png";
import Clients_ImgID4 from "../Assets/ClientImages/Clients_ImgID4.png";
import Clients_ImgID5 from "../Assets/ClientImages/Clients_ImgID5.png";
import Clients_ImgID6 from "../Assets/ClientImages/Clients_ImgID6.png";
import Clients_ImgID7 from "../Assets/ClientImages/Clients_ImgID7.png";
import Clients_ImgID8 from "../Assets/ClientImages/Clients_ImgID8.png";
import Clients_ImgID9 from "../Assets/ClientImages/Clients_ImgID9.png";
import Clients_ImgID10 from "../Assets/ClientImages/Clients_ImgID10.png";
import Clients_ImgID11 from "../Assets/ClientImages/Clients_ImgID11.png";
import Clients_ImgID12 from "../Assets/ClientImages/Clients_ImgID12.png";
import Clients_ImgID13 from "../Assets/ClientImages/Clients_ImgID13.png";
import Clients_ImgID14 from "../Assets/ClientImages/Clients_ImgID14.png";
import Clients_ImgID15 from "../Assets/ClientImages/Clients_ImgID15.png";
import Clients_ImgID16 from "../Assets/ClientImages/Clients_ImgID16.png";
import Clients_ImgID17 from "../Assets/ClientImages/Clients_ImgID17.png";
import Clients_ImgID18 from "../Assets/ClientImages/Clients_ImgID18.png";
import Clients_ImgID19 from "../Assets/ClientImages/Clients_ImgID19.png";
import Clients_ImgID20 from "../Assets/ClientImages/Clients_ImgID20.png";
import Clients_ImgID21 from "../Assets/ClientImages/Clients_ImgID21.png";
import Clients_ImgID22 from "../Assets/ClientImages/Clients_ImgID22.png";
import Clients_ImgID23 from "../Assets/ClientImages/Clients_ImgID23.png";
import Clients_ImgID24 from "../Assets/ClientImages/Clients_ImgID24.png";
import Clients_ImgID25 from "../Assets/ClientImages/Clients_ImgID25.png";
import Clients_ImgID29 from "../Assets/ClientImages/Clients_ImgID29.png";

const clientsList1 = [
  { name: "Clients_ImgID1", image: Clients_ImgID1 },
  { name: "Clients_ImgID2", image: Clients_ImgID2 },
  { name: "Clients_ImgID3", image: Clients_ImgID3 },
  { name: "Clients_ImgID4", image: Clients_ImgID4 },
  { name: "Clients_ImgID5", image: Clients_ImgID5 },
  { name: "Clients_ImgID6", image: Clients_ImgID6 },
  { name: "Clients_ImgID7", image: Clients_ImgID7 },
  { name: "Clients_ImgID8", image: Clients_ImgID8 },
  { name: "Clients_ImgID9", image: Clients_ImgID9 },
  { name: "Clients_ImgID10", image: Clients_ImgID10 },
];

const clientsList2 = [
  { name: "Clients_ImgID11", image: Clients_ImgID11 },
  { name: "Clients_ImgID12", image: Clients_ImgID12 },
  { name: "Clients_ImgID13", image: Clients_ImgID13 },
  { name: "Clients_ImgID14", image: Clients_ImgID14 },
  { name: "Clients_ImgID15", image: Clients_ImgID15 },
  { name: "Clients_ImgID16", image: Clients_ImgID16 },
  { name: "Clients_ImgID17", image: Clients_ImgID17 },
  { name: "Clients_ImgID18", image: Clients_ImgID18 },
  { name: "Clients_ImgID19", image: Clients_ImgID19 },
  { name: "Clients_ImgID20", image: Clients_ImgID20 },
  { name: "Clients_ImgID21", image: Clients_ImgID21 },
  { name: "Clients_ImgID22", image: Clients_ImgID22 },
  { name: "Clients_ImgID23", image: Clients_ImgID23 },
  { name: "Clients_ImgID24", image: Clients_ImgID24 },
  { name: "Clients_ImgID25", image: Clients_ImgID25 },
  { name: "Clients_ImgID29", image: Clients_ImgID29 },
];

// const clientsList = [
//   "Tata Steel",
//   "Tata Tiscon",
//   "Tata Agrico",
//   "Tata Wiron",
//   "Tata Pravesh",
//   "Jockey",
//   "ACC Cement",
//   "Birla White",
//   "Birla HiL",
//   "Powergrid",
//   "Union Bank",
//   "Andhra Bank",
//   "NFL",
//   "Nuvoco",
//   "Varmora",
//   "Killer Jeans",
//   "Classic Polo",
//   "Integriti",
//   "Oxemberg",
//   "C.R.I. Pumps",
// ];

const Clients = () => {
  return (
    <section id="clients" className="clientsSection">
      <div className="clientsHeader" data-aos="zoom-in">
        <span className="sectionTag">Our Valuable Clients</span>

        <h2 className="sectionHeading">
          Brands That <em className="sectionHeadingHighlight">Trust</em> Us
        </h2>
      </div>

      <div className="clientsMarqueeWrapper">
        <div className="clientsTrack">
          {[...clientsList1, ...clientsList1].map((client, index) => (
            <ClientLogo key={index} src={client.image} alt={client.name} />
          ))}
        </div>
        <div className="clientsTrack marginTop10">
          {[...clientsList2, ...clientsList2].map((client, index) => (
            <ClientLogo key={index} src={client.image} alt={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
