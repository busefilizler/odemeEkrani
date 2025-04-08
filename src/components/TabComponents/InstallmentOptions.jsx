import React, { useState } from "react";
import { Radio, FormControl, RadioGroup, Checkbox } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import PrePaymentModal from "../Modals/PrePaymentModal";
import { formatAmount } from "../../utils/AmountFormat.js";
export default function InstallmentOptions({
  installments,
  moneyPoint,
  currency,
}) {
  const [selectedInstallment, setSelectedInstallment] = useState("");
  const [useMoneyPoint, setUseMoneyPoint] = useState(false);
  const [use3DSecure, setUse3DSecure] = useState(false);
  const [approveLightingText, setApproveLightingText] = useState(false);
  const [approveUsageTerms, setApproveUsageTerms] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false); // Tümünü gösterme durumu

  const handleChange = (setter) => (e) =>
    setter(e.target.type === "checkbox" ? e.target.checked : e.target.value);

  const checkboxSx = {
    padding: 0,
    "& .MuiSvgIcon-root": { fontSize: 18 },
    "&.Mui-checked": { color: deepPurple[600] },
  };

  const visibleInstallments = showAll ? installments : installments.slice(0, 3); // İlk 3'ü göster veya tümünü göster

  return (
    <>
      <div className="rounded-lg w-full border border-[#E0E0E0]">
        <div className="flex flex-row w-full justify-between items-center bg-[#E0E0E0]">
          <div className="text-lg font-semibold p-3 ">Taksit Seçenekleri</div>
          {installments.length > 3 && (
            <div
              className="text-center cursor-pointer text-[#673ab7] pr-3"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Gizle" : "Tümünü Gör"}
            </div>
          )}
        </div>

        <FormControl component="fieldset" style={{ width: "100%" }}>
          <RadioGroup
            value={selectedInstallment}
            onChange={handleChange(setSelectedInstallment)}
            sx={{ "&.Mui-checked": { color: deepPurple[500] } }}
          >
            {visibleInstallments.map((installment, index) => (
              <div
                key={index}
                className="w-full flex items-center border-b border-gray-200 py-2 pr-3 hover:bg-gray-100"
              >
                <Radio
                  value={installment.label}
                  checked={selectedInstallment === installment.label}
                  onChange={handleChange(setSelectedInstallment)}
                  sx={{
                    "&.Mui-checked": { color: deepPurple[500] },
                    "& .MuiSvgIcon-root": { fontSize: 15 },
                  }}
                />
                <div className="flex justify-between items-center w-full font-light pr-4">
                  <span className="flex items-center text-xs md:text-sm gap-1 flex-1">
                    {installment.label}
                    {installment.isAdvance && (
                      <span className="font-semibold text-[0.5rem] md:text-xs text-[#673ab7]">
                        (Peşin Fiyatına)
                      </span>
                    )}
                  </span>
                  <span className="text-xs md:text-sm text-right">
                    {installment.installment} x{""}{" "}
                    {formatAmount(installment.amount)} {currency}
                  </span>
                </div>
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </div>

      <div className="rounded-lg w-full border border-[#E0E0E0] bg-blue-100 mt-3 p-2 flex items-center justify-center gap-2">
        <Checkbox
          checked={useMoneyPoint}
          onChange={handleChange(setUseMoneyPoint)}
          sx={checkboxSx}
        />
        <div className="text-sm font-semibold flex flex-row w-full h-full gap-x-1">
          <div className="text-[#673ab7]">{formatAmount(moneyPoint)} TL</div>
          <div>ParaPuan Kullan!</div>
        </div>
      </div>

      <div className="w-full text-sm mt-3 p-2 flex items-center gap-2">
        <Checkbox
          checked={use3DSecure}
          onChange={handleChange(setUse3DSecure)}
          sx={checkboxSx}
        />
        <span>3D Secure ile güvenli alışveriş yapın.</span>
      </div>

      <div className="w-full p-2 flex items-start gap-2">
        <Checkbox
          checked={approveLightingText}
          onChange={handleChange(setApproveLightingText)}
          sx={checkboxSx}
        />
        <div className="-mt-0.5 text-sm">
          <span
            className="cursor-pointer text-[#673ab7]"
            onClick={() => setOpen(true)}
          >
            Aydınlatma metinini
          </span>{" "}
          okudum ve onaylıyorum. Kartımı{" "}
          <span className="font-semibold">PayMed Teknoloji AŞ.</span>{" "}
          altyapısına kaydetmek istiyorum.
        </div>
      </div>

      <div className="w-full p-2 flex items-start gap-2">
        <Checkbox
          checked={approveUsageTerms}
          onChange={handleChange(setApproveUsageTerms)}
          sx={checkboxSx}
        />
        <div className="-mt-0.5 text-sm">
          <span
            className="cursor-pointer text-[#673ab7]"
            onClick={() => setOpen(true)}
          >
            Kullanım Koşullarını
          </span>{" "}
          okudum. Kartımı <span className="font-semibold">MasterPass'e</span>{" "}
          kaydetmek istiyorum.
        </div>
      </div>

      <PrePaymentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
