import React from "react";
import { Button } from "@mui/material";

export default function PartialPaymentBox() {
  return (
    <div className="bg-white w-full h-full border border-gray-400 flex flex-row justify-between items-center">
      <div>
        <div className="flex flex-row gap-2">
          <div className=""> Toplam Tutar:</div> <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className=""> Ödenen Tutar:</div> <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className=""> Max Kullanılabilecek Kart Sayısı:</div> <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className=""> Kalan Tutar:</div> <div>xx</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className=""> Kalan Ödeme Sayısı:</div> <div>xx</div>
        </div>
      </div>
      <div>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className="w-full h-full rounded-lg border-gray-300 hover:bg-gray-100"
          onClick={() => {}}
        >
          <div className="flex items-center justify-center">
            <div className="text-sm font-semibold">Parçalı Ödeme</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
