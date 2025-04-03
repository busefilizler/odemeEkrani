import React from "react";
import carts from "../../../public/carts.png";
import payMedBlack from "../../../public/payMedBlack.png";
import TotalCountBox from '../TotalCount/TotalCountBox'

const TotalCount = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <TotalCountBox />
      </div>
    </div>
  );
}

const Footers = ()  => {
  return (
    <div className="bg-black text-white h-20 items-center flex justify-between 
    px-10 lg:px-20 
     w-full">
      <div className="lg:flex hidden">Tüm haklar Saklıdır Copyright © 2025</div>
      <div>
        <img
          src={payMedBlack}
          alt="pam"
          className="w-22"/>
      </div>
      <div>
        <img src={carts} alt="carts" className="w-56" />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="lg:hidden">
        <TotalCount />
      </div>
      <Footers />
    </div>
  );
}
