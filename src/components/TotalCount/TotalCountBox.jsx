import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import PrePaymentModal from "../Modals/PrePaymentModal";

export default function TotalCountBox() {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className="w-96" sx={{ minWidth: 375, minHeight: 560 }}>
        <Card className="p-5" variant="outlined" sx={{ boxShadow: 1 }}>
          <CardContent className="!h-full">
            <div className="flex flex-row items-center justify-between">
              <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
                Toplam Tutar
              </Typography>
              <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
                1.000 TL
              </Typography>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "red",
                    "&.Mui-checked": {
                      color: "red",
                    },
                    opacity: isChecked ? 1 : 0.5,
                    transition: "opacity 0.3s",
                  }}
                  checked={isChecked}
                  className="!-mt-2"
                  onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography sx={{ fontSize: 12 }}>
                  <span 
                    style={{ 
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      color: 'red',
                    }}
                    onClick={handleOpen}
                  >
                    Ön bilgilendirme formunu
                  </span>
                  {" "}ve Merafeli satış sözleşmesini okudum ve onaylıyorum.
                </Typography>
              }
              sx={{
                display: "flex",
                paddingTop: 2,
                flexDirection: "row",
                alignItems: "flex-start",
                opacity: isChecked ? 1 : 0.5,
                transition: "opacity 0.3s",
              }}
            />
          </CardContent>
          <CardActions>
            <Stack spacing={2} direction="row" className="!w-full">
              <Button
                variant="contained"
                disabled={!isChecked}
                className="!w-full"
                sx={{ width: "100%", backgroundColor: "red" }}
              >
                Ödeme Yap
              </Button>
            </Stack>
          </CardActions>
          <CardContent>
            <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
              Sipariş Özeti
            </Typography>
            <Typography className="!font-normal" sx={{ fontSize: 12 }}>
              <div className="flex flex-row items-center justify-between pt-3">
                <div>Sipariş Tutarı (1 Ürün)</div>
                <div>1.000 TL</div>
              </div>
              <div className="flex flex-row items-center justify-between pt-3 text-gray-400">
                <div>Kargo*</div>
                <div>Ücretsiz</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <PrePaymentModal open={open} onClose={handleClose} />
    </>
  );
}
