import Link from "next/link";

export default function SecondBlog() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/nested-routes">Back</Link>
      </button>

      <h1>Second Blog Page</h1>
    </>
  );
}
