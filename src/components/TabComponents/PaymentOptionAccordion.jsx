import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaymentOptionAccordion = ({
  icon,
  title,
  content,
  defaultExpanded = false,
  backgroundColor = "#fff",
  fontSize = "1rem",
}) => {
  return (
    <div>
      <Accordion defaultExpanded={defaultExpanded} sx={{ borderRadius: 1, backgroundColor: backgroundColor }}>
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
            borderRadius: 1,
            "&:hover": {
              backgroundColor: backgroundColor,
            },
            fontWeight: "bold",
            fontSize: fontSize,
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
