import ProductsList from "../components/ProductsList";

async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=5&select=title,price"
  );
  const data = await res.json();
  return data.products;
}

export default async function Stuff() {
  const products = await getProducts();
  console.log({ products });
  return (
    <>
      <h1>Products</h1>
      {ProductsList.length > 0 &&
        products.map(({ id, title, price }) => {
          return <ProductsList key={id} title={title} price={price} />;
        })}
    </>
  );
}
