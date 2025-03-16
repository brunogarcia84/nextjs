export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return <h1>Single Product Page Details. Showing product: {productId}</h1>;
}
