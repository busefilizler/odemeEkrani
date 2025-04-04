import React, { useState } from "react";
import { Radio, FormControl, RadioGroup } from "@mui/material";

export default function InstallmentOptions({ installments }) {
  const [selectedInstallment, setSelectedInstallment] = useState("");

  const handleChange = (event) => {
    setSelectedInstallment(event.target.value);
  };

  return (
    <div className=" rounded-lg w-full border border-[#E0E0E0]">
      <h3 className="text-lg font-semibold p-3 bg-[#E0E0E0]">
        Taksit Seçenekleri
      </h3>
      <FormControl component="fieldset" style={{ width: "100%" }}>
        <RadioGroup
          value={selectedInstallment}
          onChange={handleChange}
          style={{ width: "100%" }}
          sx={{
            "&.Mui-checked": {
              color: "black",
            },
          }}
        >
          {installments.map((installment, index) => (
            <div
              className="w-full flex items-center h-full border-b border-gray-200 py-2 px-3 hover:bg-gray-100"
              key={index}
            >
              <Radio
                value={installment.label}
                checked={selectedInstallment === installment.label}
                onChange={handleChange}
                sx={{
                  "&.Mui-checked": {
                    color: "black",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              />
              <div className="flex justify-between items-center w-full font-light pr-4">
                <span
                  className="flex text-left items-center h-full gap-1 text-xs md:text-sm"
                  style={{ flex: 1 }}
                >
                  {installment.label}{" "}
                  <span className="font-semibold text-[0.5rem] md:text-xs">
                    {installment.isAdvance && " (Peşin Fiyatına)"}
                  </span>
                </span>
                <span
                  className="text-xs md:text-sm"
                  style={{ textAlign: "right" }}
                >
                  {installment.amount}
                </span>
              </div>
            </div>
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
