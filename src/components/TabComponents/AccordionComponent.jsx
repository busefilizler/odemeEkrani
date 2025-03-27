import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionComponent({ title, children, defaultExpanded = false }) {
  return (
    <div>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon fontSize="large" sx={{ color: "red" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="div" className='h-14 flex items-center px-3 !font-semibold !text-lg'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}