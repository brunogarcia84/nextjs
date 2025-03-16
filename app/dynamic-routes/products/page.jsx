import Link from "next/navigation";

export default function Products() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1>Products page</h1>

      <ul>
        <li>
          Product 1
          {/* <Link href="/dynamic-routes/products/1">Product 1</Link> */}
        </li>
        <li>
          Product 2
          {/* <Link href="/dynamic-routes/products/2">Product 2</Link> */}
        </li>
        <li>
          Product 3
          {/* <Link href="/dynamic-routes/products/3">Product 3</Link> */}
        </li>
      </ul>
    </>
  );
}
