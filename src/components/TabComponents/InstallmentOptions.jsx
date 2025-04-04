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
        padding: "16px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <h3 className="text-lg font-semibold mb-2">Taksit Seçenekleri</h3>
      <FormControl component="fieldset" style={{ width: "100%" }}>
        <RadioGroup
          value={selectedInstallment}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {installments.map((installment, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Radio
                value={installment.label}
                checked={selectedInstallment === installment.label}
                onChange={handleChange}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span style={{ flex: 1, textAlign: "left" }}>
                  {installment.label}
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
