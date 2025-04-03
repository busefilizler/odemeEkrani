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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TotalCountBox() {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Mobil görünüm için özet içerik
  const MobileSummary = () => (
    <div className="flex items-center flex-col justify-between px-4 py-1 w-full">
      <div className="pb-2">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
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
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "black",
                }}
                onClick={handleOpen}
              >
                Ön bilgilendirme formunu
              </span>{" "}
              ve Mesafeli satış sözleşmesini okudum ve onaylıyorum.
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
      </div>
      <div className="flex flex-row justify-between w-full pt-2 pb-1 border-t border-gray-200">
        <div className="flex flex-col">
          <Typography className="!font-medium" sx={{ fontSize: 12 }}>
            Toplam Tutar (1 Ürün)
          </Typography>
          <Typography className="!font-semibold flex justify-between" sx={{ fontSize: 16 }}>
            10.000 TL{" "}
            {!isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Typography>
        </div>
        <div>
          <Stack spacing={2} direction="row" className="!w-full">
            <Button
              variant="contained"
              disabled={!isChecked}
              className="!w-full"
              sx={{ width: "100%", backgroundColor: "black" }}
            >
              Ödeme Yap
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );

  // Masaüstü görünümü
  const DesktopView = () => (
    <Box className="w-96" sx={{ minWidth: 375, minHeight: 560 }}>
      <Card className="p-5" variant="outlined" sx={{ boxShadow: 1 }}>
        <CardContent className="!h-full">
          <div className="flex flex-row items-center justify-between">
            <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
              Toplam Tutar
            </Typography>
            <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
              10.000 TL
            </Typography>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
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
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "black",
                  }}
                  onClick={handleOpen}
                >
                  Ön bilgilendirme formunu
                </span>{" "}
                ve Mesafeli satış sözleşmesini okudum ve onaylıyorum.
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
              sx={{ width: "100%", backgroundColor: "black" }}
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
              <div>10.000 TL</div>
            </div>
            <div className="flex flex-row items-center justify-between pt-3 text-gray-400">
              <div>Kargo*</div>
              <div>Ücretsiz</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  // Mobil görünüm
  const MobileView = () => (
    <Card className="w-full" variant="outlined">
      <div onClick={toggleExpand} className="cursor-pointer">
        <MobileSummary />
      </div>
      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="px-4 py-1">
            <Typography className="!font-normal" sx={{ fontSize: 14 }}>
              <div className="flex flex-row items-center justify-between">
                <div>Ara Toplam (1 Ürün)</div>
                <div>10.000 TL</div>
              </div>
              <div className="flex flex-row items-center justify-between pt-1 text-gray-400">
                <div>Kargo*</div>
                <div>Ücretsiz</div>
              </div>
            </Typography>
          </div>
        </div>
      )}
    </Card>
  );

  return (
    <>
      <div className="hidden lg:block">
        <DesktopView />
      </div>
      <div className="lg:hidden">
        <MobileView />
      </div>
      <PrePaymentModal open={open} onClose={handleClose} />
    </>
  );
}
