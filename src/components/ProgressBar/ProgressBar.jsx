import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ProgressBar() {
  const steps = ["Sipariş Detayları", "Ödeme", "Teşekkürler"];

  return (
    <div className="flex flex-row justify-between items-center bg-white h-20 border-b-2 border-gray-600 px-40 md:px-40">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-row gap-1 items-center text-black w-fit">
            <CheckCircleOutlineOutlinedIcon sx={{ color: "black" }} />
            <div className="text-xs sm:text-sm md:text-base">{step}</div>
          </div>
          {index !== steps.length - 1 && (
            <div className="hidden md:block flex-grow m-5 border border-gray-600"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
