import React from "react";
import { Typography, Button, Box } from "@mui/material";
import Modal from "./Modal";

const PrePaymentModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
        Ön Bilgilendirme Formu
      </Typography>

      <Typography id="modal-description" sx={{ mb: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Okudum
        </Button>
      </Box>
    </Modal>
  );
};

export default PrePaymentModal;
