import Link from "next/link";

export default function Blog() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/nested-routes">Back</Link>
      </button>

      <h1>Blog Page</h1>

      <p>
        As you can see, now you have the Root Layout wrapping the entire app,
        and the Blog Layout covering ONLY the Blog page (and its nested routes).
      </p>

      <p>
        To see it in action, access <code>/blog/first</code> and{" "}
        <code>/blog/second</code>
      </p>
    </>
  );
}
