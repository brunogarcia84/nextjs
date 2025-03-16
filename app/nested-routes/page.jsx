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
      </div>
    </>
  );
}
