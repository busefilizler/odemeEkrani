import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaymentOptionAccordion = ({
  icon,
  title,
  content,
  name,
  selected,
  onChange,
  backgroundColor = "#fff",
  fontSize = "1rem",
}) => {
  const isExpanded = selected === name;

  const handleChange = (_, newExpanded) => {
    onChange(newExpanded ? name : null);
  };

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange}
      sx={{ borderRadius: 1 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        sx={{
          borderRadius: 1,
          backgroundColor: isExpanded ? backgroundColor : "#fff",
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
  );
};

export default PaymentOptionAccordion;
