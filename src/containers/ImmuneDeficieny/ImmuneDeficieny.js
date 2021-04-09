import React from "react";

import baby from "../../assets/baby.png";
import bed from "../../assets/bed.png";
import down from "../../assets/down.png";
import ear from "../../assets/ear.png";
import liver from "../../assets/liver.png";
import lungs from "../../assets/lungs.png";
import man from "../../assets/man.png";
import nose from "../../assets/nose.png";
import restroom from "../../assets/restroom.png";
import uphand from "../../assets/uphand.png";

import ImmuneCard from "../../components/cmi-immuneCard/ImmuneCard";

import "./_immuneDeficiency.scss";

function ImmuneDeficieny() {
  return (
    <div className="immunedeficiency">
      <h1 className="immunedeficiency-heading">
        The warning signs of Immune deficiency
      </h1>
      <div className="immunedeficiency-align">
        <ImmuneCard
          immuneprofile={man}
          immunedescription="Failure to thrive – not gaining weight and height as per the age norms"
        />

        <ImmuneCard
          immuneprofile={bed}
          immunedescription="Infections warranting multiple hospitalizations"
        />

        <ImmuneCard
          immuneprofile={down}
          immunedescription="Requirement of intravenous antibiotics to clear infections"
        />

        <ImmuneCard
          immuneprofile={lungs}
          immunedescription="2 or more episodes of pneumonia"
        />

        <ImmuneCard
          immuneprofile={baby}
          immunedescription="Family history of death of children at young age due to immune deficiency "
        />

        <ImmuneCard
          immuneprofile={restroom}
          immunedescription="Repeated episodes of diarrhea"
        />

        <ImmuneCard
          immuneprofile={nose}
          immunedescription="2 or more episodes of sinus infections within a year"
        />

        <ImmuneCard
          immuneprofile={ear}
          immunedescription="2 or more episodes of ear discharge"
        />

        <ImmuneCard
          immuneprofile={uphand}
          immunedescription="Repeated abscess formation (liver abscess, brain abscess)"
        />

        <ImmuneCard
          immuneprofile={liver}
          immunedescription="Failure to thrive – not gaining weight and height as per the age norms"
        />
      </div>
    </div>
  );
}

export default ImmuneDeficieny;
