import Link from "next/link";

export default function NestedRoutes() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Nested Routes</h1>
      <div className="p-15">
        <div className="separation">
          <p>
            In a raw way, nested routes are routes inside routes. In other
            words, for Next.js it will be folder inside folder.
          </p>
        </div>

        <div className="separation">
          <p>For instance:</p>

          <ul>
            <li>- localhost:3000/blog</li>
            <li>- localhost:3000/blog/first</li>
            <li>- localhost:3000/blog/second</li>
          </ul>
        </div>

        <div className="separation">
          <p>
            To achieve this scenario, we will need to create a folder called
            "blog" containing a page.jsx, and inside this folder we will need
            two more folders, one called "first" and another called "second"
          </p>
        </div>

        <div className="separation">
          <p>
            To simplify, let's create all exercises inside the folders
            corresponding to the lesson. By doing that, I will achieve today's
            lesson creating a nested route for the lesson.
          </p>
        </div>

        <div className="separation">
          <ul>
            <li>
              <Link className="underline" href="/nested-routes/blog">
                Blog Main Page
              </Link>
            </li>

            <li>
              <Link className="underline" href="/nested-routes/blog/first">
                Blog's First Page
              </Link>
            </li>
            <li>
              <Link className="underline" href="/nested-routes/blog/second">
                Blog's Second Page
              </Link>
            </li>
          </ul>
        </div>

        <h2>Nested Routes - Next.js docs website</h2>

        <p>
          A nested route is a route composed of multiple URL segments. For
          example, the route <code>/blog/[slug]</code> is composed of three
          segments:
        </p>

        <ul>
          <li>
            <code>/</code> (Root Segment)
          </li>
          <li>
            <code>/blog</code> (Segment)
          </li>
          <li>
            <code>/[slug]</code> (Leaf Segment)
          </li>
        </ul>

        <p>In Next.js:</p>

        <ul>
          <li>
            Folders are used to define the route segment that map to URL
            segments
          </li>
          <li>
            Files like <code>page</code> and <code>layout</code> are used to
            create UI that is shown for a segment.
          </li>
        </ul>

        <h2>Nested Layouts</h2>

        <p>
          As you can see, it is possible to nest layouts. By default, layouts in
          the folder hierarchy are also nested, which means they wrap child
          layouts via their <code>children</code> prop. You can nest layouts by
          adding <code>layout</code> inside specific route segments (folders).
        </p>

        <p>
          In this page you only can see the Root Layout, the dominant one which
          will render in every single page you create. Access the blog page and
          you will see two layouts together.
        </p>
      </div>
    </>
  );
}
