import React from 'react';

export default function InstallmentOptions({ installments }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Taksit Seçenekleri</h3>
      <ul>
        {installments.map((installment, index) => (
          <li key={index} className="flex justify-between py-1">
            <span>{installment.label}</span>
            <span>{installment.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
