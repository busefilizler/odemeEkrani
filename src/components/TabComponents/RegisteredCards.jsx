import React from "react";
import Radio from "@mui/material/Radio";

export default function RegisteredCards() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Dummy data for registered cards
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
      cardHolder: "Ahmet Yılmaz",
      expirationDate: "06/2024",
    },
  ];

  return (
    <div className="py-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex flex-row justify-between items-center border border-gray-200 rounded-lg p-4 mb-4 ${
            selectedValue === card.id ? "bg-gray-200" : ""
          }`}
        >
          <div className="flex flex-row gap-2 items-center">
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
            <div>{card.bankName}</div>
          </div>
          <div>Son 4 hane: {card.lastFourDigits}</div>
          <div>{card.cardHolder}</div>
          <div>{card.expirationDate}</div>
        </div>
      ))}
    </div>
  );
}
