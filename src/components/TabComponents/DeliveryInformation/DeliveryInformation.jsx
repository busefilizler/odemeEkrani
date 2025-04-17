import React from "react";
import AccordionComponent from "../AccordionComponent";

const deliveryInfo = {
  shipping: {
    title: "Gönderim Adresi",
    email: "buse@durudogan.com",
    address:
      "Açıkköy Mah. Hakkı Sk. Big Tower No: 79-20D Ataşehir, İstanbul, 34560, TR",
    phone: "+90 599 777 56 13",
  },
  billing: {
    title: "Fatura Adresi",
    email: "fatura@durudogan.com",
    address:
      "Beylikdüzü Mah. Güneş Sk. No: 15 Kat:3 Daire:5, İstanbul, 34520, TR",
    phone: "+90 532 123 45 67",
  },
};

export default function DeliveryInformation() {
  return (
    <div>
      <AccordionComponent key="3" title="Teslimat Bilgileri">
        <div className="flex flex-col gap-6 px-1 lg:px-4">
          {[deliveryInfo.shipping, deliveryInfo.billing].map((info) => (
            <div key={info.title} className="flex flex-col gap-1">
              <div className="font-semibold text-sm pb-2">
                {info.title}
              </div>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <div>{info.email}</div>
                <div>{info.address}</div>
                <div>{info.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </AccordionComponent>
    </div>
  );
}
