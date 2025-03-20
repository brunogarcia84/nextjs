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

        <h2 className="mt-10">
          Another Video, another explanation...let's try
        </h2>

        <p>Source: https://www.youtube.com/watch?v=ec3OEG8DXJM</p>

        <p>
          In this video, using an API called Dummy JSON, we are going to create
          a products page and return some products from this API. Since I am
          going to try different approaches to try to learn this shit, I am
          going to leave the old products page that I have and create a new one.
        </p>

        <p>For this exercise, I am going to call the route "Stuff"</p>

        <p>
          That's a regular creation of a page. Just export default function
          Stuff, and you will see the stuff page. And now starts the tricky part
          that I am trying to understand.
        </p>

        <p>
          We are going to get only 5 products limiting the request. For all
          codes, check the stuff page.
        </p>

        <p>
          To maintain things organized, in order to render the products he
          creates a products component which will handle all the rendering part,
          like visuals.
        </p>
      </div>
    </>
  );
}
