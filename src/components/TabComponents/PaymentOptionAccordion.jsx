import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaymentOptionAccordion = ({ icon, title, content }) => {
  return (
    <div>
      <Accordion sx={{ borderRadius: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${title}-content`}
          id={`${title}-header`}
        >
          {icon && <div style={{ marginRight: 8 }}>{icon}</div>}
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div>{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOptionAccordion;
