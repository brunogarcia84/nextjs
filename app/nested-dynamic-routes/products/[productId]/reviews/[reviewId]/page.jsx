import Link from "next/link";

export default async function ProductReview() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/nested-dynamic-routes">Back</Link>
      </button>

      <h1>Displaying product undefined review undefined</h1>
    </>
  );
}
