import CustomerInfo from "./CustomerInfo";
import React from 'react'
import OrderDetails from "./OrderDetails";
export default function AllTabComponent() {
  return (
    <div className="py-20 pl-20 pr-10 bg-gray-100 flex flex-col gap-8">
      <CustomerInfo />
      <OrderDetails />
    </div>
  )
}