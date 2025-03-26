import React from "react";
import payMedLogo from "../../../public/payMed.jpg";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
export default function Header() {
  
  return (
    <div className="flex flex-row items-center justify-between bg-black h-20 px-10 text-[#e5e8ca] border-b-2 border-[#e5e8ca]">
      <div>
        <img src={payMedLogo} alt="logo" className="w-34" />
      </div>
      <div className="flex flex-row items-center space-x-1">
        <GppGoodOutlinedIcon fontSize="large" />
      <span className=" text-2xl">Güvenli Ödeme</span>
      </div>
      <div>TR</div>
    </div>
  );
}
