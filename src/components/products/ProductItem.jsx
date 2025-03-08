import React, { useState } from "react";
import ProductForm from "./ProductForm";

const ProductItem = ({ product, products, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      {isEditing ? (
        <ProductForm
          product={product}
          products={products}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">Description: {product.description}</p>
          <p className="text-gray-600">Price: ${product.price}</p>
          <p className="text-gray-600">Store: {product.storeName}</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItem;