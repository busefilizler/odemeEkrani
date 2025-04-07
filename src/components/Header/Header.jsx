import React from "react";
import payMedLogo from "../../../public/payMed.png";
import payMedBlack from "../../../public/payMedBlack.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@mui/material";
import { US, TR } from "country-flag-icons/react/3x2";
import { deepPurple } from "@mui/material/colors";

export default function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => i18n.changeLanguage(event.target.value);

  return (
    <div className="flex items-center justify-between bg-[#673ab7] lg:bg-white h-20 px-4 lg:px-8 text-white lg:text-[#673ab7] border-b-2 border-gray-300">
      {/* Logo */}
      <img src={payMedBlack} alt="logo" className="w-16 lg:hidden" />
      <img src={payMedLogo} alt="logo" className="hidden lg:block w-30" />

      {/* Güvenli Ödeme */}
      <div className="flex items-center space-x-1">
        <GppGoodOutlinedIcon fontSize="medium" sx={{ color: "deepPurple" }} />
        <span className="text-sm lg:text-xl font-semibold">Güvenli Ödeme</span>
      </div>

      {/* Dil Seçimi */}
      <Select
        value={i18n.language}
        onChange={changeLanguage}
        size="small"
        sx={{
          borderRadius: 2,
          backgroundColor: "transparent",
          minWidth: 100,
          color: "white",
          display: "flex",
          alignItems: "center",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          "& .MuiSelect-icon": { color: "white" },
          "@media (min-width: 1024px)": {
            backgroundColor: "white",
            color: deepPurple[500],
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: deepPurple[500],
            },
            "& .MuiSelect-icon": { color: "gray" },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: deepPurple[500],
            },
          },
        }}
      >
        {[
          {
            value: "tr",
            flag: <TR title="Turkey" className="w-4 h-4 lg:flex hidden" />, //
            label: "TR",
          },
          {
            value: "en",
            flag: (
              <US title="United States" className="w-4 h-4 lg:flex hidden" />
            ),
            label: "EN",
          },
        ].map(({ value, flag, label }) => (
          <MenuItem
            key={value}
            value={value}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {flag}
            {label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
