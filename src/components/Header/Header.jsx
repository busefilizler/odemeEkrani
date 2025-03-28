import React from "react";
import payMedLogo from "../../../public/payMed.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, FormControl, Box } from "@mui/material";

export default function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="flex flex-row items-center justify-between bg-white h-20 px-10 text-black border-b-2 border-gray-300">
      <div>
        <img src={payMedLogo} alt="logo" className="w-30" />
      </div>
      <div className="flex flex-row items-center space-x-1">
        <GppGoodOutlinedIcon fontSize="large" sx={{ color: "green" }} />
        <span className=" text-xl">Güvenli Ödeme</span>
      </div>
      <div>
        <Box sx={{ top: 20, right: 20, zIndex: 1000 }}>
          <FormControl size="small">
            <Select
              value={i18n.language}
              onChange={changeLanguage}
              sx={{
                backgroundColor: "white",
                minWidth: 100,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                "& .MuiSelect-icon": {
                  color: "gray",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "red",
                },
              }}
            >
              <MenuItem value="tr">TR</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
