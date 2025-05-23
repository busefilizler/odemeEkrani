import React, { useState } from "react";
import AccordionComponent from "../AccordionComponent";
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
      <AccordionComponent key="2" title="Müşteri Bilgileri" defaultExpanded>
        <div className="px-1 lg:px-4 pb-1">
          <div className="flex flex-col gap-5">
            <TextField
              disabled
              id="customerName"
              name="customerName"
              variant="outlined"
              value={customer.customerName}
              onChange={handleChange}
              sx={{
                backgroundColor: "rgb(224,224,224)",
                borderRadius: "4px",
              }}
            />
            <TextField
              disabled
              id="taxNumber"
              name="taxNumber"
              variant="outlined"
              value={customer.taxNumber}
              onChange={handleChange}
              sx={{
                backgroundColor: "rgb(224,224,224)",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="flex flex-row gap-5 pt-5 w-full">
            <TextField
              disabled
              id="email"
              name="email"
              variant="outlined"
              value={customer.email}
              onChange={handleChange}
              className="w-1/2"
              sx={{
                backgroundColor: "rgb(224,224,224)",
                borderRadius: "4px",
              }}
            />
            <TextField
              disabled
              id="tel"
              name="tel"
              variant="outlined"
              value={customer.tel}
              onChange={handleChange}
              className="w-1/2"
              sx={{
                backgroundColor: "rgb(224,224,224)",
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
