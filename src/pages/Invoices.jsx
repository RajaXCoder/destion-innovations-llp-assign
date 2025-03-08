import React, { useState } from "react";
import { invoices } from "../data/invoices";
import InvoiceList from "../components/invoices/InvoiceList";

const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState(invoices);

  return (
    <div className="p-6 font-roboto">
      <h1 className="text-2xl font-bold mb-4 text-red-400">
        Invoice Management
      </h1>
      <InvoiceList invoices={invoiceData} />
    </div>
  );
};

export default Invoices;
