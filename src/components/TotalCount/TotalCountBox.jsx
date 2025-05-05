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
import { deepPurple } from "@mui/material/colors";

const orderData = {
  totalPrice: "10.000 TL",
  itemCount: 1,
  shippingFee: "Ücretsiz",
  agreementText:
    "Ön bilgilendirme formunu ve Mesafeli satış sözleşmesini okudum ve onaylıyorum.",
};

export default function TotalCountBox() {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckboxChange = (event) => setIsChecked(event.target.checked);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Onay kutusu bileşeni
  const AgreementCheckbox = () => (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: deepPurple[500],
            "&.Mui-checked": { color: deepPurple[500] },
            opacity: isChecked ? 1 : 0.5,
            transition: "opacity 0.3s",
          }}
          checked={isChecked}
          className="!-mt-2"
          onChange={handleCheckboxChange}
        />
      }
      label={
        <Typography component="span" sx={{ fontSize: 12 }}>
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: deepPurple[500],
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
  );

  // Mobil görünüm
  const MobileView = () => (
    <Card className="w-full" variant="outlined">
      <div className="flex items-center flex-col justify-between px-4 py-1 w-full">
        <div className="pb-2 flex items-start w-full">
          <AgreementCheckbox />
        </div>
        <div className="flex flex-row justify-between w-full pt-2 pb-1 border-t border-gray-300">
          <div className="flex flex-col">
            <Typography className="!font-medium" sx={{ fontSize: 12 }}>
              Toplam Tutar ({orderData.itemCount} Ürün)
            </Typography>
            <Typography
              className="!font-semibold flex justify-between"
              sx={{ fontSize: 16 }}
            >
              {orderData.totalPrice}
              {!isExpanded ? (
                <KeyboardArrowDownIcon
                  onClick={toggleExpand}
                  className="cursor-pointer"
                />
              ) : (
                <KeyboardArrowUpIcon
                  onClick={toggleExpand}
                  className="cursor-pointer"
                />
              )}
            </Typography>
          </div>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              disabled={!isChecked}
              className="!w-full"
              sx={{ backgroundColor: deepPurple[500] }}
            >
              Ödeme Yap
            </Button>
          </Stack>
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-gray-300">
          <div className="px-4 py-1">
            <Typography component="div" className="!font-normal" sx={{ fontSize: 14 }}>
              <div className="flex flex-row items-center justify-between">
                <div>Ara Toplam ({orderData.itemCount} Ürün)</div>
                <div>{orderData.totalPrice}</div>
              </div>
              <div className="flex flex-row items-center justify-between pt-1 text-gray-400">
                <div>Kargo*</div>
                <div>{orderData.shippingFee}</div>
              </div>
            </Typography>
          </div>
        </div>
      )}
    </Card>
  );

  // Masaüstü görünüm
  const DesktopView = () => (
    <Box className="w-80" sx={{ minWidth: 320, minHeight: 503 }}>
      <Card className="p-2.5" variant="" sx={{ boxShadow: 1 }}>
        <CardContent className="!h-full">
          <div className="flex flex-row items-center justify-between">
            <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
              Toplam Tutar
            </Typography>
            <Typography className="!font-semibold" sx={{ fontSize: 16 }}>
              {orderData.totalPrice}
            </Typography>
          </div>
          <AgreementCheckbox />
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="row" className="!w-full">
            <Button
              variant="contained"
              disabled={!isChecked}
              className="!w-full"
              sx={{ width: "100%", backgroundColor: deepPurple[500] }}
            >
              Ödeme Yap
            </Button>
          </Stack>
        </CardActions>
        <CardContent>
          <Typography
            className="!font-semibold"
            sx={{
              fontSize: 16,
              borderBottom: "1px solid #E5E7EB",
              paddingBottom: 1,
            }}
          >
            Sipariş Özeti
          </Typography>
          <Typography component="div" className="!font-normal" sx={{ fontSize: 12 }}>
            <div className="flex flex-row items-center justify-between pt-3">
              <div>Sipariş Tutarı ({orderData.itemCount} Ürün)</div>
              <div>{orderData.totalPrice}</div>
            </div>
            <div className="flex flex-row items-center justify-between pt-3 text-gray-400">
              <div>Kargo*</div>
              <div>{orderData.shippingFee}</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <>
      <div className="hidden lg:block">
        <DesktopView />
      </div>
      <div className="lg:hidden w-full">
        <MobileView />
      </div>
      <PrePaymentModal open={open} onClose={handleClose} />
    </>
  );
}
