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
          expandIcon={
            <ExpandMoreIcon
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          }
          aria-controls={`${title}-content`}
          id={`${title}-header`}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#E0E0E0",
            },
            fontWeight: "bold",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {icon && <div>{icon}</div>}
            <div>{title}</div>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div>{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOptionAccordion;
