import React from "react";
import { Button } from "@mui/material";

export default function PartialPaymentBox() {
  return (
    <div className="bg-white w-full h-full border border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-8 gap-4">
      <div className="text-sm font-light flex flex-col gap-2 w-full md:w-auto">
        {[
          "Toplam Tutar",
          "Ödenen Tutar",
          "Max Kullanılabilecek Kart Sayısı",
          "Kalan Tutar",
          "Kalan Ödeme Sayısı",
        ].map((label) => (
          <div key={label} className="flex flex-row gap-2">
            <div className="w-[180px] md:w-[220px]">{label}:</div>
            <div>xx</div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-auto">
        <Button
          variant="outlined"
          size="small"
          fullWidth
          className="rounded-lg"
          sx={{
            color: "white",
            borderColor: "#d1d5dc",
            backgroundColor: "#673ab7",
            "&:hover": {
              backgroundColor: "#ede7f6",
              borderColor: "#d1d5dc",
              color: "#673ab7",
            },
            paddingY: 1.5,
            paddingX: { xs: 2, md: 4 },
            minHeight: "56px",
          }}
          onClick={() => {}}
        >
          <div className="flex flex-col items-center justify-center text-center w-full">
            <div className="text-xs md:text-sm font-light normal-case">
              Ödeme İçin Kalan Süre
            </div>
            <div className="text-sm md:text-base font-semibold capitalize">
              23 gün 22 saat 43 dakika
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
