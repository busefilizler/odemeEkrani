import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionComponent({
  title,
  children,
  defaultExpanded = false,
}) {
  const panelId = `panel-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Accordion defaultExpanded={defaultExpanded} sx={{ boxShadow: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" sx={{ color: "gray" }} />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
        sx={{ "& .MuiAccordionSummary-content": { margin: 0 }, minHeight: "50px", }}
      >
        <Typography
          component="span"
          className="h-14 flex items-center px-1 lg:px-4 !font-semibold"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
