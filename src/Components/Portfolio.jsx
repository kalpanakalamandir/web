import React, { useState } from "react";
import "./styles.css";

import CompanyBrandingImg1 from "../Assets/ProjectImages/CompanyBrandingSignage_Images/Signage_ImgID1.png";
import CompanyBrandingImg2 from "../Assets/ProjectImages/CompanyBrandingSignage_Images/Signage_ImgID2.png";
import CompanyBrandingImg3 from "../Assets/ProjectImages/CompanyBrandingSignage_Images/Signage_ImgID3.png";
import CompanyBrandingImg4 from "../Assets/ProjectImages/CompanyBrandingSignage_Images/Signage_ImgID4.png";

import ImgID1 from "../Assets/ProjectImages/CompanyBrandingSignage2_Images/ImgID1.png";
import ImgID2 from "../Assets/ProjectImages/CompanyBrandingSignage2_Images/ImgID2.png";
import ImgID3 from "../Assets/ProjectImages/CompanyBrandingSignage2_Images/ImgID3.png";
import ImgID4 from "../Assets/ProjectImages/CompanyBrandingSignage2_Images/ImgID4.png";
import ImgID5 from "../Assets/ProjectImages/CompanyBrandingSignage3_Images/ImgID1.png";
import ImgID6 from "../Assets/ProjectImages/CompanyBrandingSignage3_Images/ImgID2.png";
import ImgID7 from "../Assets/ProjectImages/CompanyBrandingSignage3_Images/ImgID3.png";
import ImgID8 from "../Assets/ProjectImages/CompanyBrandingSignage3_Images/ImgID4.png";

import NeonImgID1 from "../Assets/ProjectImages/NeonAcrylicBoards_Images/ImgID1.png";
import NeonImgID2 from "../Assets/ProjectImages/NeonAcrylicBoards_Images/ImgID2.png";
import NeonImgID5 from "../Assets/ProjectImages/NeonAcrylicBoards_Images/ImgID5.png";
import NeonImgID6 from "../Assets/ProjectImages/NeonAcrylicBoards_Images/ImgID6.png";

import Board2D3D_ImgID1 from "../Assets/ProjectImages/2D3DBoardsImages/Boards_ImgID1.png";
import Board2D3D_ImgID2 from "../Assets/ProjectImages/2D3DBoardsImages/Boards_ImgID2.png";
import Board2D3D_ImgID3 from "../Assets/ProjectImages/2D3DBoardsImages/Boards_ImgID3.png";
import Board2D3D_ImgID4 from "../Assets/ProjectImages/2D3DBoardsImages/Boards_ImgID4.png";

import OnRoad_ImgID1 from "../Assets/ProjectImages/OnRoadBrandingSignage_Images/Signage_ImgID1.png";
import OnRoad_ImgID2 from "../Assets/ProjectImages/OnRoadBrandingSignage_Images/Signage_ImgID2.png";
import OnRoad_ImgID3 from "../Assets/ProjectImages/OnRoadBrandingSignage_Images/Signage_ImgID3.png";
import OnRoad_ImgID4 from "../Assets/ProjectImages/OnRoadBrandingSignage_Images/Signage_ImgID4.png";

const portfolioData = {
  "Companny Branding Signage": [
    // { id: 1, name: "CompanyBrandingImg_ID1", image: CompanyBrandingImg1 },
    { id: 2, name: "CompanyBrandingImg_ID2", image: CompanyBrandingImg2 },
    // { id: 3, name: "CompanyBrandingImg_ID3", image: CompanyBrandingImg3 },
    { id: 4, name: "CompanyBrandingImg_ID4", image: CompanyBrandingImg4 },

    { id: 11, name: "Clients_ImgID1", image: ImgID1 },
    { id: 12, name: "Clients_ImgID2", image: ImgID2 },
    { id: 13, name: "Clients_ImgID3", image: ImgID3 },
    { id: 14, name: "Clients_ImgID4", image: ImgID4 },
    { id: 15, name: "Clients_ImgID4", image: ImgID5 },
    { id: 16, name: "Clients_ImgID4", image: ImgID6 },
    // { id: 7, name: "Clients_ImgID4", image: ImgID7 },
    { id: 18, name: "Clients_ImgID4", image: ImgID8 },
  ],

  "On-Road Branding Signage": [
    { id: 200, name: "Clients_ImgID10", image: OnRoad_ImgID1 },
    { id: 201, name: "Clients_ImgID11", image: OnRoad_ImgID2 },
    { id: 202, name: "Clients_ImgID12", image: OnRoad_ImgID3 },
    { id: 203, name: "Clients_ImgID12", image: OnRoad_ImgID4 },
  ],

  "2D-3D": [
    { id: 300, name: "Clients_ImgID13", image: Board2D3D_ImgID1 },
    { id: 301, name: "Clients_ImgID14", image: Board2D3D_ImgID2 },
    { id: 302, name: "Clients_ImgID13", image: Board2D3D_ImgID3 },
    { id: 304, name: "Clients_ImgID14", image: Board2D3D_ImgID4 },
  ],

  Neon: [
    { id: 11, name: "Clients_ImgID15", image: NeonImgID1 },
    { id: 12, name: "Clients_ImgID16", image: NeonImgID2 },
    { id: 15, name: "Clients_ImgID15", image: NeonImgID5 },
    { id: 16, name: "Clients_ImgID16", image: NeonImgID6 },
  ],
};

const portfolioTabs = Object.keys(portfolioData);

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState(portfolioTabs[0]);

  const [currentPortfolio, setCurrentPortfolio] = useState(
    portfolioData[portfolioTabs[0]],
  );

  const onPressTab = (tab) => {
    setSelectedTab(tab);
    setCurrentPortfolio(portfolioData[tab]);
  };

  return (
    <section id="portfolio" className="portfolioSection">
      <div className="portfolioHeader" data-aos="zoom-in-right">
        <span className="sectionTag">Our Work</span>

        <h2 className="sectionHeading">
          Selected <em className="sectionHeadingHighlight">Projects</em>
        </h2>
      </div>

      <div className="portfolioTabs">
        {portfolioTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onPressTab(tab)}
            className={`portfolioTab ${
              selectedTab === tab ? "activePortfolioTab" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="portfolioGrid">
        {currentPortfolio.map((project) => (
          <div key={project.id} className="portfolioItem fade-up">
            <div className="portfolioItemInner">
              <img
                src={project.image}
                alt={project.name}
                className="portfolioImage"
              />
            </div>

            <div className="portfolioOverlay">
              <div className="portfolioLabel">{project.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
