import React from "react";
import AccordionComponent from "./AccordionComponent";

export default function DeliveryInformation() {
  return (
    <div>
      <AccordionComponent title="Teslimat Bilgileri">
        <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 px-3">
          <div className="font-semibold text-sm text-black pb-3">
            Gönderim Adresi
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-400">
            <div>deniz@mochatouch.com</div>
            <div>
              Açıkköy Mah. Hakkı Sk. Big Tower No: 79-20D Ataşehir,
              İstanbul, 34560, TR
            </div>
            <div>+90 599 777 56 13</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 px-3">
          <div className="font-semibold text-sm text-black pb-3">
            Fatura Adresi
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-400">
            <div>deniz@mochatouch.com</div>
            <div>
              Açıkköy Mah. Hakkı Sk. Big Tower No: 79-20D Ataşehir,
              İstanbul, 34560, TR
            </div>
            <div>+90 599 777 56 13</div>
          </div>
        </div>
        </div>
      </AccordionComponent>
    </div>
  );
}
