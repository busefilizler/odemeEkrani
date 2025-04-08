import React, { useState } from "react";
import { TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import masterCard from "../../../public/masterCard.png";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: deepPurple[500],
    },
  },
};

const StyledTextField = ({ label, ...props }) => (
  <div className="flex-1">
    {label && <label className="font-semibold">{label}</label>}
    <TextField
      fullWidth
      variant="outlined"
      sx={{ marginTop: label ? "15px" : 0, ...inputStyles }}
      {...props}
    />
  </div>
);

const formatCardNumber = (value) =>
  (value.replace(/\D/g, "").slice(0, 16).match(/.{1,4}/g) || []).join(" ");

const maskCardNumber = (value) => {
  const n = value.replace(/\D/g, "").padEnd(16, "X");
  return `${n.slice(0, 4)} ${n.slice(4, 6)}** **** ${n.slice(12)}`;
};

const formatExpiry = (value) => {
  const n = value.replace(/\D/g, "").slice(0, 4);
  return n.length < 3 ? n : `${n.slice(0, 2)}/${n.slice(2)}`;
};

export default function NewCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-6 py-1">
      <div className="flex flex-col gap-4 flex-1">
        <div className="relative">
          <div className="absolute h-full w-2 bg-[#673ab7] rounded-l-md top-0 left-0"></div>
          <StyledTextField
            placeholder="XXXX  XXXX  XXXX  XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            inputProps={{ maxLength: 19 }}
            InputProps={{ sx: { pl: "16px" } }}
          />
        </div>

        <StyledTextField
          label="Kart Sahibi"
          placeholder="Kart Sahibinin Adı ve Soyadı"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />

        <div className="flex gap-4">
          <StyledTextField
            label="Son Kullanma Tarihi"
            placeholder="Ay/Yıl"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            inputProps={{ maxLength: 5 }}
          />
          <StyledTextField
            label="Güvenlik Kodu"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            inputProps={{ maxLength: 3 }}
          />
        </div>
      </div>

      <div className="flex-1 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg p-3 h-48 relative overflow-hidden">
        <img
          src={masterCard}
          alt="MasterCard"
          className="absolute top-4 right-4 w-12"
        />
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-lg tracking-widest opacity-90">
          {cardNumber ? maskCardNumber(cardNumber) : "XXXX XX** **** XXXX"}
        </div>
        <div className="absolute bottom-6 left-6 text-sm font-medium capitalize">
          {cardHolder || "Kart Sahibinin Adı ve Soyadı"}
        </div>
        <div className="absolute bottom-6 right-6 text-xs text-gray-200 text-right">
          {expiry || "Ay/Yıl"}
          <br />
          {cvc || "CVC"}
        </div>
      </div>
    </div>
  );
}
