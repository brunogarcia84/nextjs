import Link from "next/link";

export default function DynamicRoute() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Dynamic Routes</h1>
      <div className="p-15">
        <div className="separation">
          <p>
            When you don't know the exact segment names ahead of time and want
            to create routes from dynamic data, you can use Dynamic Segments
            that are filled in at request time or prerendered at build time.
          </p>

          <p>
            In my words, pages will be rendered according to data that will be
            inserted in the future. You don't have a clue of the names you are
            going to use, or even data you will insert.
          </p>

          <h2>Convention</h2>

          <p>
            A Dynamic Segment can be created by wrapping a folder's name in
            square brackets: <code>[folderName].</code>
          </p>

          <p>
            Dynamic Segments are passed as the params prop to{" "}
            <code>layout</code>, <code>page</code>, <code>route</code>, and{" "}
            <code>generateMetadata</code> functions.
          </p>

          <h2>Example</h2>

          <p>
            A blog could include the following route{" "}
            <code>app/blog/[slug]/page.jsx</code> where <code>[slug]</code> is
            the Dynamic Segment for blog posts.
          </p>

          <table>
            <tr>
              <th className="text-center">Route</th>
              <th className="text-center">Example URL</th>
              <th className="text-center">
                <code>params</code>
              </th>
            </tr>

            <tr>
              <td className="text-center">
                <code>app/blog/[slug]/page.jsx</code>
              </td>
              <td className="text-center">
                <code>blog/a</code>
              </td>
              <td className="text-center">
                <code>slug: "a"</code>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <code>app/blog/[slug]/page.jsx</code>
              </td>
              <td className="text-center">
                <code>blog/b</code>
              </td>
              <td className="text-center">
                <code>slug: "b"</code>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <code>app/blog/[slug]/page.jsx</code>
              </td>
              <td className="text-center">
                <code>blog/c</code>
              </td>
              <td className="text-center">
                <code>slug: "c"</code>
              </td>
            </tr>
          </table>
        </div>

        <p>
          For this exercise, we will create a products list which will be
          accessed via Dynamic Route.
        </p>

        <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
          <Link href="/dynamic-route/products">Products</Link>
        </button>
      </div>
    </>
  );
}
