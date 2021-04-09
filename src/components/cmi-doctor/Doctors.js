import React from "react";
 
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import "./_doctors.scss";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundImage: " radial-gradient(-35.15% 100%, #17EAD9 40%, #6078EA 60%)",
  },
}))(Button);

function Doctors(props) {
  return (
    <div className="doctors">
        <div className="doctors__align">
            <h2 className="doctors__align-headline">{props.doctorheadline}</h2>
            <img src={props.doctorphoto} alt="Doctor Profile" className="doctors__align-photo" />
            <h3 className="doctors__align-name">{props.doctorname}</h3>
            <p className="doctors__align-degree">{props.doctordegree}</p>
            <p className="doctors__align-degreestudy">{props.degreestudy}</p>
            <div className="doctors__align-underline"></div>
            <p className="doctors__align-description">{props.doctordescription}</p>
            {/* <button className="doctors__align-btn">{props.doctorbtn}</button> */}
            <ColorButton
          style={{ textTransform: "capitalize", fontWeight: "600" }}
          variant="contained"
          color="primary"
         
        >
          {props.doctorbtn}
        </ColorButton>
        </div>
    </div>
  );
}

export default Doctors;
