import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { deepPurple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import PaymentOptionAccordion from "../../Shared/PaymentOptionAccordion";
import PartialPaymentBox from "./PartialPaymentBox";
import CardSelector from "../../CreditCard/CardSelector"

export default function PartialPaymentOption({
  partialAmount,
  setPartialAmount,
  isChanged,
  onChange,
  selected,
  setSelected,
}) {
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

          <PartialPaymentBox />

          <div className="mt-4">
            <div className="font-semibold text-xs md:text-base mb-1">
              Ödenecek Tutar
            </div>
            <TextField
              type="number"
              value={partialAmount}
              onChange={(e) => setPartialAmount(e.target.value)}
              placeholder="Tutar giriniz"
              inputProps={{ min: 0 }}
              fullWidth
              size="small"
            />
          </div>

          <CardSelector
            isChanged={isChanged}
            onChange={onChange}
            selectedBgColor="bg-white"
          />
        </div>
      }
    />
  );
}
