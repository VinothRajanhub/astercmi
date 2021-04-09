import React from "react";
 
import "./_immuneCard.scss";

function ImmuneCard(props) {
  return (
    <div className="immunecard">
        <img src={props.immuneprofile} alt="Immune" className="immunecard_profile" />
        <p className="immunecard_description">{props.immunedescription}</p>
    </div>
  );
}

export default ImmuneCard;
