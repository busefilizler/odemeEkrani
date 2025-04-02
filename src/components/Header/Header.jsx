import React from "react";
import payMedLogo from "../../../public/payMed.png";
import payMedBlack from "../../../public/payMedBlack.png";
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
    <div className="flex flex-row items-center justify-between bg-black lg:bg-white h-20
      px-4 sm:px-8 md:px-8 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl text-white lg:text-black border-b-2 border-gray-300">
      <div>
        <img src={payMedBlack} alt="logo" className="w-16 lg:hidden" />
        <img src={payMedLogo} alt="logo" className="hidden lg:block w-30" />
      </div>
      <div className="flex flex-row items-center space-x-1">
        <GppGoodOutlinedIcon fontSize="medium" sx={{ color: "green" }} />
        <span 
        className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
        Güvenli Ödeme</span>
      </div>
      <div>
        <Box sx={{ top: 20, right: 20, zIndex: 1000 }}>
          <FormControl size="small">
            <Select
              value={i18n.language}
              onChange={changeLanguage}
              sx={{
                backgroundColor: "transparent",
                minWidth: 100,
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSelect-icon": {
                  color: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSelect-select": {
                  color: "white",
                },
                "@media (min-width: 1024px)": {
                  backgroundColor: "white",
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray",
                  },
                  "& .MuiSelect-icon": {
                    color: "gray",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                  "& .MuiSelect-select": {
                    color: "black",
                  },
                }
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
