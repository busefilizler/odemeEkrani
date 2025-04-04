import React, { useState } from "react";
import { Radio, FormControl, RadioGroup } from "@mui/material";

export default function InstallmentOptions({ installments }) {
  const [selectedInstallment, setSelectedInstallment] = useState("");

  const handleChange = (event) => {
    setSelectedInstallment(event.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <h3 className="text-lg font-semibold mb-2 border-b p-3 border-gray-400 bg-[#E0E0E0]">
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
              className="w-full flex mb-2 items-center h-full border-b border-gray-400"
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
                }}
              />
              <div className="flex justify-between items-center w-full font-light pr-4">
                <span style={{ flex: 1, textAlign: "left" }}>
                  {installment.label}{" "}
                  <span className="font-semibold text-xs">
                    {installment.isAdvance && " (Peşin Fiyatına)"}
                  </span>
                </span>
                <span style={{ textAlign: "right" }}>{installment.amount}</span>
              </div>
            </div>
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
