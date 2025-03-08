import React, { useState } from "react";
import { getUniqueStores } from "../../utils/helpers";

const ProductForm = ({ product, products, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      description: "",
      price: "",
      storeName: "",
    }
  );

  const uniqueStores = getUniqueStores(products);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
        required
      />
      <select
        name="storeName"
        value={formData.storeName}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
        required
      >
        <option value="">Select Store</option>
        {uniqueStores.map((store) => (
          <option key={store} value={store}>
            {store}
          </option>
        ))}
      </select>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {product ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;