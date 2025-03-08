export const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};


export const getUniqueStores = (products) => {
  const stores = products.map((product) => product.storeName);
  return [...new Set(stores)]; // Remove duplicates
};