import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ProgressBar({ steps }) {
  return (
    <div className="flex flex-row justify-between items-center bg-white h-20 border-b-2 border-gray-300 px-[30%] md:px-[30%]">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`flex flex-row gap-1 items-center w-fit ${step?.disabled ? 'text-gray-400' : 'text-black'}`}>
            <CheckCircleOutlineOutlinedIcon sx={{ color: step?.disabled ? "gray" : "red" }} />
            <div className="text-xs sm:text-sm md:text-base">{step?.label}</div>
          </div>
          {index !== steps.length - 1 && (
            <div className="hidden md:block flex-grow m-5 border border-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}