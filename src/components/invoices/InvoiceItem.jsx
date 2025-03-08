import React from "react";
import { calculateTotal } from "../../utils/helpers";

const InvoiceItem = ({ invoice }) => {
  const total = calculateTotal(invoice.items);

  return (
    <div className="p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform bg-white">
      {/* Invoice Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
        Invoice #{invoice.id}
      </h3>

      {/* Invoice Details */}
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Store:</span> {invoice.storeName}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Order ID:</span> {invoice.orderId}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Date:</span> {invoice.date}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Total:</span> ${total}
        </p>
      </div>

      {/* Items List */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Items:</h4>
        <ul className="space-y-1">
          {invoice.items.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvoiceItem;