import React from "react";
import Radio from "@mui/material/Radio";
import InstallmentOptions from "./InstallmentOptions";
import { deepPurple } from "@mui/material/colors";

export default function RegisteredCards({ selectedBgColor = "bg-[#ede7f6]" }) {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const cards = [
    {
      id: "a",
      bankName: "İş Bankası Kartım",
      lastFourDigits: "7890",
      cardHolder: "Buse Durudoğan",
      expirationDate: "01/2025",
      moneyPoint: "1000",
      currency: "TL",
      installments: [
        {
          label: "Tek Çekim",
          installment: 1,
          amount: "10000",
          isAdvance: false,
        },
        {
          label: "2 Taksit",
          installment: 2,
          amount: "5800.80",
          isAdvance: false,
        },
        {
          label: "3 Taksit",
          installment: 3,
          amount: "3333.33",
          isAdvance: true,
        },
        {
          label: "4 Taksit",
          installment: 4,
          amount: "2769.15",
          isAdvance: false,
        },
        {
          label: "6 Taksit",
          installment: 6,
          amount: "1666.66",
          isAdvance: true,
        },
        {
          label: "12 Taksit",
          installment: 12,
          amount: "1378.65",
          isAdvance: false,
        },
        {
          label: "18 Taksit",
          installment: 18,
          amount: "1176.64",
          isAdvance: false,
        },
        {
          label: "24 Taksit",
          installment: 24,
          amount: "987.55",
          isAdvance: false,
        },
      ],
    },
    {
      id: "b",
      bankName: "Garanti Bankası Kartım",
      lastFourDigits: "1234",
      cardHolder: "Ahmet Yılmaz Durkalidaroğlu",
      expirationDate: "06/2024",
      moneyPoint: "300",
      currency: "TL",
      installments: [
        {
          label: "Tek Çekim",
          installment: 1,
          amount: "25000",
          isAdvance: false,
        },
        {
          label: "2 Taksit",
          installment: 2,
          amount: "13000.00",
          isAdvance: false,
        },
        {
          label: "3 Taksit",
          installment: 3,
          amount: "8500.00",
          isAdvance: true,
        },
        {
          label: "4 Taksit",
          installment: 4,
          amount: "6500.00",
          isAdvance: false,
        },
        {
          label: "6 Taksit",
          installment: 6,
          amount: "4200.00",
          isAdvance: true,
        },
      ],
    },
  ];

  const selectedCard = cards.find((card) => card.id === selectedValue);
  const DeskopView = () => {
    return (
      <div className="py-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-row w-full border border-gray-300 rounded-lg py-2 pr-1 mb-4 gap-2 sm:gap-0 ${
              selectedValue === card.id ? selectedBgColor : ""
            }`}
          >
            <Radio
              checked={selectedValue === card.id}
              onChange={handleChange}
              value={card.id}
              name="radio-buttons"
              sx={{
                "&.Mui-checked": {
                  color: deepPurple[500],
                },
              }}
            />
            <div className="flex flex-col gap-2 pl-1">
              <div className="truncate font-semibold text-sm">
                {card.bankName}
              </div>
              <div className="flex flex-row flex-wrap font-light text-gray-400">
                Son 4 hane: {card.lastFourDigits} - {card.cardHolder} -{" "}
                {card.expirationDate}
              </div>
            </div>
          </div>
        ))}
        <div>
          <InstallmentOptions
            installments={selectedCard.installments}
            moneyPoint={selectedCard.moneyPoint}
            currency={selectedCard.currency}
          />{" "}
        </div>
      </div>
    );
  };

  const MobileView = () => {
    return (
      <div className="flex flex-col gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-row w-full border border-gray-300 rounded-lg py-2 pr-1 mb-4 gap-2 sm:gap-0 ${
              selectedValue === card.id ? selectedBgColor : ""
            }`}
          >
            <Radio
              checked={selectedValue === card.id}
              onChange={handleChange}
              value={card.id}
              name="radio-buttons"
              sx={{
                "&.Mui-checked": {
                  color: deepPurple[500],
                },
              }}
            />
            <div className="flex flex-col gap-2 pl-1">
              <div className="truncate font-semibold text-sm">
                {card.bankName}
              </div>
              <div className="flex flex-row text-xs flex-wrap font-light text-gray-400">
                Son 4 hane: {card.lastFourDigits}
              </div>
            </div>
          </div>
        ))}
        <div>
          <InstallmentOptions
            installments={selectedCard.installments}
            moneyPoint={selectedCard.moneyPoint}
            currency={selectedCard.currency}
          />{" "}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block">
        <DeskopView />
      </div>
      <div className="lg:hidden">
        <MobileView />
      </div>
    </>
  );
}
