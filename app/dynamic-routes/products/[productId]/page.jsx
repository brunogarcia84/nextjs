import Link from "next/link";

export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1>Single Product Page Details. Showing product: {productId}</h1>
    </>
  );
}
