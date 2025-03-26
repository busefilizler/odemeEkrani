import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ProgressBar() {
  const steps = ["Sipariş Detayları", "Ödeme", "Teşekkürler"];

  return (
    <div className="flex flex-row justify-between items-center bg-black h-20 border-b-2 border-[#e5e8ca] px-40 md:px-40">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-row gap-1 items-center text-[#e5e8ca]">
            <CheckCircleOutlineOutlinedIcon sx={{ color: "#e5e8ca" }} />
            <span className="text-xs sm:text-sm md:text-base">{step}</span>
          </div>
          {index !== steps.length - 1 && (
            <div className="hidden md:block w-8 border border-[#e5e8ca]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
