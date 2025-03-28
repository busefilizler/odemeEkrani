import React from "react";
import AccordionComponent from "./AccordionComponent";

export default function OrderDetails() {
  return (
    <div>
      <AccordionComponent title="Sipariş Detayları">
        <div className="flex flex-row  items-center gap-5 pb-5 w-full px-5">
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Ürün Resmi"
              className="w-32 h-32 object-cover border rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="font-semibold">Kaban</div>
            <div className="text-gray-400 text-xs">Kadın Krem Kaşe Kaban - Beden: M</div>
          </div>
          <div className="flex-1 text-end font-semibold">1.000 TL</div>
        </div>
      </AccordionComponent>
    </div>
  );
}
