import React from "react";
import RegisteredCards from "./RegisteredCards";
import NewCard from "./NewCard";

function CardSelector({ isChanged, onChange, selectedBgColor }) {
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
      {isChanged ? <NewCard /> : <RegisteredCards selectedBgColor={selectedBgColor} />}
    </div>
  );
}

export default CardSelector;
