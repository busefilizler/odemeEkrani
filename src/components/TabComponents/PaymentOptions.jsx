import React, { useState } from "react";
import AccordionComponent from "./AccordionComponent";
import PaymentOptionAccordion from "./PaymentOptionAccordion";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RegisteredCards from "./RegisteredCards";
import NewCard from "./NewCard";

export default function PaymentOptions() {
  // Kart ile ödeme seçeneği için state
  const [isPaymentMethodChanged, setIsPaymentMethodChanged] = useState(false);

  // Başka bir kart ile ödeme yap'a tıklandığında metin değişecek
  const handleChangePaymentMethod = () => {
    setIsPaymentMethodChanged(!isPaymentMethodChanged);
  };

  return (
    <div>
      <AccordionComponent title="Ödeme Seçenekleri" defaultExpanded>
        <div className="flex flex-col gap-5 px-4 pb-1">
          <PaymentOptionAccordion
            icon={<CreditCardIcon />}
            title="Kart ile Öde"
            content={
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-semibold">
                    {isPaymentMethodChanged
                      ? "Kart Numarası"
                      : "Kayıtlı Kartlarım"}
                  </div>
                  <div
                    className="underline cursor-pointer text-xs"
                    onClick={handleChangePaymentMethod}
                  >
                    {isPaymentMethodChanged
                      ? "Kayıtlı Kartım ile ödeme yap"
                      : "Başka bir kart ile ödeme yap"}
                  </div>
                </div>

                {isPaymentMethodChanged ? <NewCard /> : <RegisteredCards />}
              </div>
            }
          />

          <PaymentOptionAccordion
            icon={<AttachMoneyIcon />}
            title="Diğer Ödeme Seçenekleri"
            content="Havale/EFT, Kapıda Ödeme gibi diğer seçenekler mevcut."
          />
        </div>
      </AccordionComponent>
    </div>
  );
}
