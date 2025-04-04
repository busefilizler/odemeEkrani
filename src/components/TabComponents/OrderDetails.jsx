import React from "react";
import AccordionComponent from "./AccordionComponent";

// Mock API response
const orderData = {
  title: "Sipariş Detayları",
  products: [
    {
      id: 1,
      name: "Kaban",
      description: "Kadın Krem Kaşe Kaban - Beden: M",
      price: "1.000 TL",
      imageUrl: "/public/kaban.webp",
    },
    {
      id: 2,
      name: "Mont",
      description: "Kadın Krem Kaşe Kaban - Beden: M",
      price: "1.000 TL",
      imageUrl: "/public/kaban.webp",
    },
    // Daha fazla ürün eklenebilir...
  ],
};

export default function OrderDetails() {
  return (
    <div>
      <AccordionComponent key="4" title={orderData.title}>
        {orderData.products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row items-center gap-5 pb-2 w-full px-1 lg:px-4"
          >
            <div>
              <img
                src={product.imageUrl}
                alt="Ürün Resmi"
                className="w-18 lg:w-28 h-24 lg:h-34 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="font-semibold">{product.name}</div>
              <div className="text-gray-400 text-xs">{product.description}</div>
            </div>
            <div className="flex-1 text-end font-semibold">{product.price}</div>
          </div>
        ))}
      </AccordionComponent>
    </div>
  );
}
