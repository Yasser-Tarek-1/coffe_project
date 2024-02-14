// Get Product
export const getProductHandler = (_id, data) => {
  const productSelectedFilter = data.find(({ id }) => {
    return id == _id;
  });
  return productSelectedFilter; // return object
};

// Get Product Supplimetaries
export const getProductSupplimetariesHandler = (_id, supplimetariesData) => {
  const productSupplimetariesFilter = supplimetariesData.filter(
    ({ product_id }) => {
      return product_id == _id;
    }
  );
  return productSupplimetariesFilter; // return object
};
