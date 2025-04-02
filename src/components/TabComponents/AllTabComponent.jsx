import CustomerInfo from "./CustomerInfo";
import React from 'react'
import OrderDetails from "./OrderDetails";
export default function AllTabComponent() {
  return (
    <div className="py-8 lg:py-20 px-4 lg:pl-20 lg:pr-10 bg-gray-100 flex flex-col gap-8">
      <CustomerInfo />
      <OrderDetails />
    </div>
  )
}