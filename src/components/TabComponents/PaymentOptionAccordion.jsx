import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleChange = (_, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{ borderRadius: 1 }}
      >
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
            backgroundColor: expanded ? backgroundColor : "#fff",
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

        <AccordionDetails sx={{ backgroundColor: backgroundColor }}>
          <div>{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOptionAccordion;
