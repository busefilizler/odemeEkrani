import React, { useState } from "react";
import AccordionComponent from "./AccordionComponent";
import PaymentOptionAccordion from "./PaymentOptionAccordion";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RegisteredCards from "./RegisteredCards";
import NewCard from "./NewCard";
import { deepPurple } from "@mui/material/colors";
import PaymentIcon from "@mui/icons-material/Payment";
import PartialPaymentBox from "./PartialPayment/PartialPaymentBox";
import TextField from "@mui/material/TextField";

// Ortak Kart Seçim Alanı
function CardSelector({
  isChanged,
  onChange,
}) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row justify-between items-center pt-2 px-1 pb-3">
        <div className="font-semibold text-xs md:text-base">
          {isChanged ? "Kart Numarası" : "Kayıtlı Kartlarım"}
        </div>
        <div
          className="underline text-[#673ab7] cursor-pointer text-xs md:text-sm"
          onClick={onChange}
        >
          {isChanged
            ? "Kayıtlı Kartım ile ödeme yap"
            : "Başka bir kart ile ödeme yap"}
        </div>
      </div>
      {isChanged ? <NewCard /> : <RegisteredCards />}
    </div>
  );
}

export default function PaymentOptions() {
  const [isPaymentMethodChanged, setIsPaymentMethodChanged] = useState(false);
  const [isPaymentMethodChanged2, setIsPaymentMethodChanged2] = useState(false);
  const [partialAmount, setPartialAmount] = useState("");

  return (
    <div>
      <AccordionComponent key="1" title="Ödeme Seçenekleri" defaultExpanded>
        <div className="flex flex-col gap-5 px-1 lg:px-4 pb-1">
          {/* Kart ile Öde */}
          <PaymentOptionAccordion
            defaultExpanded
            icon={<CreditCardIcon sx={{ color: deepPurple[500] }} />}
            title="Kart ile Öde"
            content={
              <div className="flex flex-col">
                <CardSelector
                  isChanged={isPaymentMethodChanged}
                  onChange={() => setIsPaymentMethodChanged((prev) => !prev)}
                />
              </div>
            }
          />

          {/* Diğer Ödeme Seçenekleri */}
          <PaymentOptionAccordion
            icon={<AttachMoneyIcon sx={{ color: deepPurple[500] }} />}
            title="Diğer Ödeme Seçenekleri"
            content={
              <div className="flex flex-col gap-3">
                {/* Parçalı Ödeme */}
                <PaymentOptionAccordion
                  icon={<PaymentIcon sx={{ color: deepPurple[500] }} />}
                  title="Parçalı Ödeme"
                  backgroundColor="#F3F4F6"
                  fontSize="0.8rem"
                  content={
                    <div>
                      <div>
                        Ödemenizi istediğin tutarda iki kredi kartına
                        paylaştırarak tamamlayabilirsiniz.
                      </div>

                      <PartialPaymentBox />

                      <div className="mt-4">
                        <div className="font-semibold text-xs md:text-base mb-1">
                          Ödenecek Tutar
                        </div>
                        <TextField
                          type="number"
                          value={partialAmount}
                          onChange={(e) => setPartialAmount(e.target.value)}
                          placeholder="Tutar giriniz"
                          inputProps={{ min: 0 }}
                          fullWidth
                          size="small"
                        />
                      </div>

                      <CardSelector
                        isChanged={isPaymentMethodChanged2}
                        onChange={() =>
                          setIsPaymentMethodChanged2((prev) => !prev)
                        }
                      />
                    </div>
                  }
                />

                {/* Alışveriş Kredisi */}
                <PaymentOptionAccordion
                  icon={<PaymentIcon sx={{ color: deepPurple[500] }} />}
                  title="Alışveriş Kredisi"
                  backgroundColor="#F3F4F6"
                  fontSize="0.8rem"
                  content={<div>buse</div>}
                />
              </div>
            }
          />
        </div>
      </AccordionComponent>
    </div>
  );
}
