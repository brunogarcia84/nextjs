import Link from "next/link";

export default function Routing() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Routing</h1>
      <div className="p-15">
        <p>Next.js has a file-system based routing system.</p>
        <p>
          URLs you can access in your browser are determined by how you organize
          your files and folders in your code.
        </p>

        <p>
          A page is UI rendered on a specific route. Apart from some specific
          cases, every folder you create is a new route in your app.
        </p>

        <h2>Routing Conventions</h2>

        <ol>
          <li>All routes must live inside the app folder</li>
          <li>Route files must be named either page.jsx or page.tsx</li>
          <li>Each folder represents a segment of the URL path</li>
        </ol>

        <p>
          When these conventions are followed, the file automatically becomes
          available as a route.
        </p>

        <h2>Layouts</h2>

        <p>
          A layout is UI shared between multiple pages. While you navigate
          through the app, a layout will preserve its state, remain interactive,
          and will never rerender.
        </p>

        <p>
          The layout you see in the app folder is called a{" "}
          <span>root layout</span>. The root layout is mandatory in a Nextjs app
          and even if you delete it, it will automatically reappear.
        </p>
      </div>
    </>
  );
}
