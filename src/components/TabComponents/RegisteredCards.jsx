import React from "react";
import Radio from "@mui/material/Radio";

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
    },
    {
      id: "b",
      bankName: "Garanti Bankası Kartım",
      lastFourDigits: "1234",
      cardHolder: "Ahmet Yılmaz Durkalidaroğlu",
      expirationDate: "06/2024",
    },
  ];

  return (
    <div className="py-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex flex-row w-full  border border-gray-200 rounded-lg p-2 mb-4 gap-2 sm:gap-0 ${
            selectedValue === card.id ? "bg-gray-200" : ""
          }`}
        >
          <Radio
            checked={selectedValue === card.id}
            onChange={handleChange}
            value={card.id}
            name="radio-buttons"
            sx={{
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
          <div className="flex flex-col gap-2 pl-1">
            <div className="truncate font-semibold text-lg">
              {card.bankName}
            </div>
            <div className=" flex flex-row  flex-wrap font-light text-gray-400">
              Son 4 hane: {card.lastFourDigits} - {card.cardHolder} -{" "}
              {card.expirationDate}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
