import React from "react";

import cmi from "../../assets/bannercmi.png";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";

import "./_banner.scss";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#DD5A6A",
    "&:hover": {
      backgroundColor: "#ef5350",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  bannermargin: {
    width: 300,
  },
  root: {
    minWidth: 345,
    padding: "0 30",
  },
  media: {
    height: 140,
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "whitesmoke",
      },
      "&:hover fieldset": {
        borderColor: "whitesmoke",
      },
      "&.Mui-focused fieldset": {
        borderColor: "whitesmoke",
      },
    },
  },
})(TextField);

function Banner() {
  const classes = useStyles();
  return (
    <div className="banner">
      <div className="banner_text">
          <img src={cmi} alt="CMI Hospital" />
          <span className="bannertextstyle">
          <h3 className="banner_heading">
            ADULT & PAEDIATRIC BONE MARROW
            <h3 className="banner_heading1">TRANSPLANT PROGRAMME</h3>
          </h3>
          <p className="banner_subheading">Haematology | Oncology | Immunology</p>
        </span>
        <ColorButton
          style={{ textTransform: "capitalize", fontWeight: "600" }}
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Book An Appoinment
        </ColorButton>
      </div>
      <div className="banner_card">
        <Card className={classes.root}>
          <div className="banner_card-align">
            <h3 style={{opacity:"0.8"}}>Enquire now</h3>
            <div>
              <CssTextField
                className={classes.bannermargin}
                label="Name"
                variant="outlined"
                id="custom-css-outlined-input"
              />
            </div>
            <div>
              <CssTextField
                className={classes.bannermargin}
                label="Email ID"
                variant="outlined"
                style={{ margin: "10px 0" }}
                id="custom-css-outlined-input"
              />
            </div>
            <div>
              <CssTextField
                className={classes.bannermargin}
                label="Phone number"
                variant="outlined"
                style={{ margin: "10px 0" }}
                id="custom-css-outlined-input"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Your Message"
                className={classes.bannermargin}
                multiline
                rows={2}
                style={{ margin: "10px 0" }}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <ColorButton
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                margin: "10px 0",
                borderRadius: "0px",
              }}
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Submit
            </ColorButton>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Banner;
