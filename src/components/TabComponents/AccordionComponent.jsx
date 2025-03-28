import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionComponent({ title, children, defaultExpanded = false }) {
  const panelId = `panel-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon fontSize="medium" sx={{ color: "gray" }} />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
      >
        <Typography component="span" className="h-14 flex items-center px-3 !font-semibold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
