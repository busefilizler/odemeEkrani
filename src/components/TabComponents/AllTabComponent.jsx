import CustomerInfo from "./CustomerInfo/CustomerInfo";
import OrderDetails from "./OrderDetails/OrderDetails";
import DeliveryInformation from "./DeliveryInformation/DeliveryInformation";
import PaymentOptions from "./PaymentOption/PaymentOptions";
import React from "react";
export default function AllTabComponent() {
  return (
    <div className="py-3 lg:py-10 px-2 lg:pl-5 lg:pr-5 bg-gray-100 flex flex-col gap-8">
      <CustomerInfo />
      <OrderDetails />
      <DeliveryInformation />
      <PaymentOptions />
    </div>
  );
}
