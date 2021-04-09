import React from "react";

import cross from "../../assets/hospital.png";
import bonemarrow from "../../json/bonemarrow.json";

import "./_boneMarrow.scss";

function BoneMarrow() {
  return (
    <div className="bonemarrow">
      <h2 className="bonemarrow-heading">{bonemarrow.bonemarrow_heading}</h2>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_dose}
        </p>
      </span>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_donor}
        </p>
      </span>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_marrowcells}
        </p>
      </span>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_location}
        </p>
      </span>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_parent}
        </p>
      </span>
      <span className="bonemarrow-align">
        <img src={cross} alt="cross" className="bonemarrow-align_cross" />
        <p className="bonemarrow-align_description">
          {bonemarrow.bonemarrow_umbilical}
        </p>
      </span>
    </div>
  );
}

export default BoneMarrow;
