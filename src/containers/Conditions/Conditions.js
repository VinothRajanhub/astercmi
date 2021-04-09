import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./_conditions.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#1D5AA6",
    fontWeight:"600"
  },
}));



function Conditions() {
    const classes = useStyles();
  return (
    <div className="conditions">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What are the conditions that requireBone Marrow Transplant?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{margin:"20px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Which are the hematological diseases that may benefit from bone marrow transplants?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{margin:"20px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Which are the hematological diseases that may benefit from bone marrow transplants?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{margin:"20px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Which are the Cancers that may benefit from bone marrow transplants?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{margin:"20px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Do bone marrow failure syndromes require BMT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{margin:"20px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What makes transplants at Aster CMI unique? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and      certain  genetic metabolic disorders. 
          It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Conditions;
