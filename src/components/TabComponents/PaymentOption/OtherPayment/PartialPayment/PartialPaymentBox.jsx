import React from "react";
import { Button } from "@mui/material";

export default function PartialPaymentBox() {
  return (
    <div className="bg-white w-full h-full border border-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-8 gap-4 md:gap-0">
      <div className="text-sm font-light flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="w-[220px]">Toplam Tutar:</div>
          <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[220px]">Ödenen Tutar:</div>
          <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[220px]">Max Kullanılabilecek Kart Sayısı:</div>
          <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[220px]">Kalan Tutar:</div>
          <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[220px]">Kalan Ödeme Sayısı:</div>
          <div>xx</div>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <Button
          variant="outlined"
          size="small"
          fullWidth
          className="rounded-lg border-[#673ab7] hover:bg-gray-100"
          sx={{
            color: "white",
            borderColor: "#673ab7",
            backgroundColor: "#673ab7",
            "&:hover": {
              backgroundColor: "#ede7f6",
              borderColor: "#673ab7",
              color: "#673ab7",
            },
          }}
          onClick={() => {}}
        >
          <div className="flex flex-col items-center justify-center px-16 py-3">
            <div className="text-sm font-light normal-case">
              Ödeme İçin Kalan Süre
            </div>
            <div className="text-sm font-semibold capitalize">
              23 gün 22 saat 43 dakika
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
