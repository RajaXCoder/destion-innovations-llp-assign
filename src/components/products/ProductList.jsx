import React, { useState } from "react";
import ProductItem from "./ProductItem";
import SearchAndFilter from "./SearchAndFilter";

const ProductList = ({ products, onUpdate, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStore, setFilterStore] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      filterStore ? product.storeName === filterStore : true
    );

  return (
    <div>
      <SearchAndFilter
        products={products}
        onSearch={setSearchTerm}
        onFilter={setFilterStore}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            products={products}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;