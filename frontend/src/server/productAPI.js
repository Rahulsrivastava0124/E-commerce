export const productsCategories = async () => {
  const GetData = await fetch("https://fakestoreapi.com/products/categories");
  const resData = await GetData.json();
  return resData;
};

export const AllProductData = async () => {
  const GetData = await fetch("https://fakestoreapi.com/products");
  const ResGetData = await GetData.json();
  return ResGetData;
};




