import React from "react";
import { invoices } from "../../data/invoices";
import InvoiceItem from "./InvoiceItem";

const InvoiceList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;