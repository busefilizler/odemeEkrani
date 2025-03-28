import React, { useState } from "react";
import AccordionComponent from "./AccordionComponent";
import TextField from "@mui/material/TextField";

const CustomerInfo = () => {
  const [customer, setCustomer] = useState({
    customerName: "pam payment",
    taxNumber: "9876567890",
    email: "testuser@gmail.com",
    tel: "05077778899",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <AccordionComponent title="Müşteri Bilgileri" defaultExpanded>
        <div className="px-4 pb-5">
          <div className="flex flex-col gap-5">
            <TextField
              disabled
              id="customerName"
              name="customerName"
              label="Müşteri Adı"
              variant="outlined"
              value={customer.customerName}
              onChange={handleChange}
              sx={{
                backgroundColor: "rgb(244,245,245)",
                borderRadius: "4px",
              }}
            />
            <TextField
              disabled
              id="taxNumber"
              name="taxNumber"
              label="Vergi Numarası"
              variant="outlined"
              value={customer.taxNumber}
              onChange={handleChange}
              sx={{
                backgroundColor: "rgb(244,245,245)",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="flex flex-row gap-5 pt-5 w-full">
            <TextField
              disabled
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={customer.email}
              onChange={handleChange}
              className="w-1/2"
              sx={{
                backgroundColor: "rgb(244,245,245)",
                borderRadius: "4px",
              }}
            />
            <TextField
              disabled
              id="tel"
              name="tel"
              label="Telefon Numarası"
              variant="outlined"
              value={customer.tel}
              onChange={handleChange}
              className="w-1/2"
              sx={{
                backgroundColor: "rgb(244,245,245)",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </AccordionComponent>
    </div>
  );
};

export default CustomerInfo;
