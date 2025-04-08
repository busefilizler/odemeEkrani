import React, { useState } from "react";
import { TextField } from "@mui/material";
import masterCard from "../../../public/masterCard.png";
import { deepPurple } from "@mui/material/colors";
function formatCardNumber(value) {
  const numbersOnly = value.replace(/\D/g, "").slice(0, 16);
  const parts = numbersOnly.match(/.{1,4}/g) || [];
  return parts.join(" ");
}

function maskCardNumber(value) {
  const numbersOnly = value.replace(/\D/g, "").padEnd(16, "X");
  return `${numbersOnly.slice(0, 4)} ${numbersOnly.slice(
    4,
    6
  )}** **** ${numbersOnly.slice(12, 16)}`;
}

function formatExpiry(value) {
  const numbersOnly = value.replace(/\D/g, "").slice(0, 4);
  if (numbersOnly.length < 3) {
    return numbersOnly;
  }
  return `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}`;
}

export default function NewCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setExpiry(formatted);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6  py-1">
      <div className="flex flex-col gap-4 flex-1">
        <div className="relative">
          <div className="absolute h-full w-2 bg-[#673ab7] rounded-l-md top-0 left-0"></div>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="XXXX  XXXX  XXXX  XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: deepPurple[500],
                },
              },
            }}
            inputProps={{
              maxLength: 19,
            }}
            InputProps={{
              sx: { pl: "16px" },
            }}
          />
        </div>

        <label className="font-semibold">Kart Sahibi</label>
        <TextField
          fullWidth
          placeholder="Kart Sahibinin Adı ve Soyadı"
          value={cardHolder}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: deepPurple[500],
              },
            },
          }}
          onChange={(e) => setCardHolder(e.target.value)}
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-semibold">Son Kullanma Tarihi</label>
            <TextField
              fullWidth
              placeholder="Ay/Yıl"
              value={expiry}
              onChange={handleExpiryChange}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: deepPurple[500],
                  },
                },
              }}
              inputProps={{
                maxLength: 5,
              }}
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold">Güvenlik Kodu</label>
            <TextField
              fullWidth
              placeholder="CVC"
              value={cvc}
              maxLength={3}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: deepPurple[500],
                  },
                },
              }}
              inputProps={{
                maxLength: 3,
              }}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
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
