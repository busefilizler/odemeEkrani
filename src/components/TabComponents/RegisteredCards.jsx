import React from "react";
import Radio from "@mui/material/Radio";
import InstallmentOptions from "./InstallmentOptions";
import { deepPurple } from "@mui/material/colors";

export default function RegisteredCards() {
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
      moneyPoint: "1.000 TL",
      installments: [
        { label: "Tek Çekim", amount: "10.000 TL", isAdvance: false },
        { label: "2 Taksit", amount: "2 x 5800,80 TL", isAdvance: false },
        { label: "3 Taksit", amount: "3 x 3333,33 TL", isAdvance: true },
        { label: "4 Taksit", amount: "4 x 2769,15 TL", isAdvance: false },
        { label: "6 Taksit", amount: "6 x 1666,66 TL", isAdvance: true },
        { label: "12 Taksit", amount: "8 x 1378,65 TL", isAdvance: false },
        { label: "18 Taksit", amount: "9 x 1176,64 TL", isAdvance: false },
        { label: "24 Taksit", amount: "12 x 987,55 TL", isAdvance: false },
      ],
    },
    {
      id: "b",
      bankName: "Garanti Bankası Kartım",
      lastFourDigits: "1234",
      cardHolder: "Ahmet Yılmaz Durkalidaroğlu",
      expirationDate: "06/2024",
      moneyPoint: "300 TL",
      installments: [
        { label: "Tek Çekim", amount: "25.000 TL", isAdvance: false },
        { label: "2 Taksit", amount: "2 x 13.000,00 TL", isAdvance: false },
        { label: "3 Taksit", amount: "3 x 8.500,00 TL", isAdvance: true },
        { label: "4 Taksit", amount: "4 x 6.500,00 TL", isAdvance: false },
        { label: "6 Taksit", amount: "6 x 4.200,00 TL", isAdvance: true },
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
            className={`flex flex-row w-full border border-gray-200 rounded-lg py-2 pr-1 mb-4 gap-2 sm:gap-0 ${
              selectedValue === card.id ? "bg-[#f5f1f1]" : ""
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
          <InstallmentOptions installments={selectedCard.installments} moneyPoint={selectedCard.moneyPoint} />{" "}
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
            className={`flex flex-row w-full border border-gray-200 rounded-lg py-2 pr-1 mb-4 gap-2 sm:gap-0 ${
              selectedValue === card.id ? "bg-[#f5f1f1]" : ""
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
          <InstallmentOptions installments={selectedCard.installments} />{" "}
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
