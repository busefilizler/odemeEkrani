import React from "react";
import carts from "../../../public/carts.png";
import pam from "../../../public/a.jpg";

export default function Footer() {
  return (
    <div className="bg-black text-white h-20 items-center flex justify-between px-20">
      <div>Tüm haklar Saklıdır Copyright © 2025</div>
      <div>
        <img
          src={pam}
          alt="pam"
          className="w-22"/>
      </div>
      <div>
        <img src={carts} alt="carts" className="w-56" />
      </div>
    </div>
  );
}
