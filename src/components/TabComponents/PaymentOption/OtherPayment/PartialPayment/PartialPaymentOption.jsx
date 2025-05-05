import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { deepPurple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import PaymentOptionAccordion from "../../Shared/PaymentOptionAccordion";
import PartialPaymentBox from "./PartialPaymentBox";
import CardSelector from "../../CreditCard/CardSelector";
import { Button } from "@mui/material";

export default function PartialPaymentOption({
  partialAmount,
  setPartialAmount,
  isChanged,
  onChange,
  selected,
  setSelected,
}) {
  const handlePartialAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setPartialAmount(value);
    }
  };

  return (
    <PaymentOptionAccordion
      name="partial"
      selected={selected}
      onChange={setSelected}
      icon={<PaymentIcon sx={{ color: deepPurple[500] }} />}
      title="Parçalı Ödeme"
      backgroundColor="#F3F4F6"
      fontSize="0.9rem"
      content={
        <div>
          <div className="pb-3">
            Ödemenizi istediğin tutarda iki kredi kartına paylaştırarak
            tamamlayabilirsiniz.
          </div>

          <PartialPaymentBox totalAmount={partialAmount} />

          <div className="mt-4 w-1/2">
            <div className="font-semibold text-xs md:text-base mb-3 pl-1">
              Ödenecek Tutar
            </div>
            <TextField
              type="number"
              value={partialAmount}
              onChange={handlePartialAmountChange}
              placeholder="Ör: 2.000 TL"
              inputProps={{ min: 0 }}
              fullWidth
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px", // köşeleri yuvarlat
                "& .MuiOutlinedInput-root": {
                  minHeight: "48px", // yüksekliği biraz artır
                  borderRadius: "8px", // köşeleri yuvarlat
                  "& fieldset": {
                    borderColor: "#d1d5db", // gri kenarlık
                  },
                  "&:hover fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d1d5db",
                  },
                },
                "& input": {
                  paddingY: "14px", // içeriği ortala
                },
              }}
            />
          </div>

          <CardSelector
            isChanged={isChanged}
            onChange={onChange}
            selectedBgColor="bg-white"
          />
          <Button
            variant="outlined"
            size="small"
            fullWidth
            className="rounded-lg mt-4"
            sx={{
              color: "white",
              borderColor: "#d1d5dc",
              backgroundColor: "#673ab7",
              "&:hover": {
                backgroundColor: "#ede7f6",
                borderColor: "#d1d5dc",
                color: "#673ab7",
              },
              paddingY: 1.5,
              paddingX: { xs: 2, md: 4 },
              minHeight: "56px",
            }}
            onClick={() => {}}
          >
            <div>Kayıtlı kartım ile belirtilen tutar kadar ödeme yap</div>
          </Button>
        </div>
      }
    />
  );
}
