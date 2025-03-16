import Link from "next/navigation";

export default async function ProductDetails() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1>Single Product Page Details. Showing product: undefined</h1>
    </>
  );
}
