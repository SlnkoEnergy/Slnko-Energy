import React from "react";
import "../CSS/Page6.css";

const Page6 = () => {
    const handleDistrictClick = (district) => {
      alert(`You clicked on ${district}`);
    };
  
    return (
      <div className="map-container">
        <h2 className="map-title">
          Our presence in <strong>Madhya Pradesh</strong>
        </h2>
        <div className="map-wrapper">
          <svg
            version="1.1"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="mp-map"
          >
            {/* Highlighted Districts */}
            <g className="highlighted-districts">
              <path id="ujjain" d="M200,300 L300,200..." className="highlighted" onClick={() => handleDistrictClick("Ujjain 2.2MWp")} />
              <path id="mandsaur" d="M250,280 L320,220..." className="highlighted" onClick={() => handleDistrictClick("Mandsaur 2.0MWp")} />
              <path id="sagar" d="M500,400 L550,370..." className="highlighted" onClick={() => handleDistrictClick("Sagar 5.0MWp")} />
              <path id="rewa" d="M700,350 L750,320..." className="highlighted" onClick={() => handleDistrictClick("Rewa 2.0MWp")} />
              <path id="jabalpur" d="M650,500 L700,470..." className="highlighted" onClick={() => handleDistrictClick("Jabalpur 4.8MWp")} />
              <path id="shahdol" d="M800,450 L850,420..." className="highlighted" onClick={() => handleDistrictClick("Shahdol 2.0MWp")} />
            </g>
  
            {/* Labels - Adjusted for correct positioning */}
            <g className="district-labels">
              <text x="220" y="320" className="label">UJJAIN 2.2MWp</text>
              <text x="270" y="310" className="label">MANDSAUR 2.0MWp</text>
              <text x="520" y="410" className="label">SAGAR 5.0MWp</text>
              <text x="730" y="360" className="label">REWA 2.0MWp</text>
              <text x="670" y="520" className="label">JABALPUR 4.8MWp</text>
              <text x="820" y="470" className="label">SHAHDOL 2.0MWp</text>
            </g>
          </svg>
        </div>
      </div>
    );
  };

export default Page6;
