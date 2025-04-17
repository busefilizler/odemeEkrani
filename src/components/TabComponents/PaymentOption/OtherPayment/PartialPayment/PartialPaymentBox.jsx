import React from "react";
import { Button } from "@mui/material";

export default function PartialPaymentBox() {
  return (
    <div className="bg-white w-full h-full border border-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-8 gap-4 md:gap-0">
      <div className="text-sm font-light flex flex-col gap-2 w-full">
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
          color="primary"
          fullWidth
          className="rounded-lg border-gray-300 hover:bg-gray-100"
          onClick={() => {}}
        >
          <div className="text-sm font-semibold">Parçalı Ödeme</div>
        </Button>
      </div>
    </div>
  );
}
