import React, { useState } from "react";
import AccordionComponent from "../AccordionComponent";
import PaymentOptionAccordion from "./Shared/PaymentOptionAccordion";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { deepPurple } from "@mui/material/colors";
import CardSelector from "./CreditCard/CardSelector";
import PartialPaymentOption from "./OtherPayment/PartialPayment/PartialPaymentOption";

export default function PaymentOptions() {
  const [expandedPanel, setExpandedPanel] = useState("credit");
  const [partialExpandedPanel, setPartialExpandedPanel] = useState(null);
  const [isPaymentMethodChanged, setIsPaymentMethodChanged] = useState(false);
  const [isPaymentMethodChanged2, setIsPaymentMethodChanged2] = useState(false);
  const [partialAmount, setPartialAmount] = useState("");

  return (
    <div>
      <AccordionComponent key="1" title="Ödeme Seçenekleri" defaultExpanded>
        <div className="flex flex-col gap-5 px-1 lg:px-4 pb-1">
          {/* Kart ile Öde */}
          <PaymentOptionAccordion
            name="credit"
            selected={expandedPanel}
            onChange={setExpandedPanel}
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
            name="other"
            selected={expandedPanel}
            onChange={setExpandedPanel}
            icon={<AttachMoneyIcon sx={{ color: deepPurple[500] }} />}
            title="Diğer Ödeme Seçenekleri"
            content={
              <div className="flex flex-col gap-3">
                <PartialPaymentOption
                  partialAmount={partialAmount}
                  setPartialAmount={setPartialAmount}
                  isChanged={isPaymentMethodChanged2}
                  onChange={() => setIsPaymentMethodChanged2((prev) => !prev)}
                  selected={partialExpandedPanel}
                  setSelected={setPartialExpandedPanel}
                />
              </div>
            }
          />
        </div>
      </AccordionComponent>
    </div>
  );
}
