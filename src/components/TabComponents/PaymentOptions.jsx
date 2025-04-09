import React, { useState } from "react";
import AccordionComponent from "./AccordionComponent";
import PaymentOptionAccordion from "./PaymentOptionAccordion";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RegisteredCards from "./RegisteredCards";
import NewCard from "./NewCard";
import { deepPurple } from "@mui/material/colors";
import PaymentIcon from "@mui/icons-material/Payment";
export default function PaymentOptions() {
  const [isPaymentMethodChanged, setIsPaymentMethodChanged] = useState(false);

  const handleChangePaymentMethod = () => {
    setIsPaymentMethodChanged(!isPaymentMethodChanged);
  };

  return (
    <div>
      <AccordionComponent key="1" title="Ödeme Seçenekleri" defaultExpanded>
        <div className="flex flex-col gap-5 px-1 lg:px-4 pb-1">
          <PaymentOptionAccordion
            defaultExpanded
            icon={
              <CreditCardIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: deepPurple[500],
                }}
              />
            }
            title="Kart ile Öde"
            content={
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center pt-2 px-1 pb-3">
                  <div className="font-semibold text-xs md:text-base">
                    {isPaymentMethodChanged
                      ? "Kart Numarası"
                      : "Kayıtlı Kartlarım"}
                  </div>
                  <div
                    className="underline text-[#673ab7] cursor-pointer text-xs md:text-sm"
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
            icon={
              <AttachMoneyIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: deepPurple[500],
                }}
              />
            }
            title="Diğer Ödeme Seçenekleri"
            content={
              <>
                <div className="flex flex-col gap-2">
                  <PaymentOptionAccordion
                    icon={
                      <PaymentIcon
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: deepPurple[500],
                        }}
                      />
                    }
                    title="Parçalı Ödeme"
                    backgroundColor="#F3F4F6"
                    fontSize="0.8rem"
                    content={<div>buse</div>}
                  />
                  <PaymentOptionAccordion
                    icon={
                      <PaymentIcon
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: deepPurple[500],
                        }}
                      />
                    }
                    title="Alışveriş Kredisi"
                    backgroundColor="#F3F4F6"
                    fontSize="0.8rem"
                    content={<div>buse</div>}
                  />
                </div>
              </>
            }
          />
        </div>
      </AccordionComponent>
    </div>
  );
}
