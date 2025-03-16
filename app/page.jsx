import Link from "next/link";

export default function Home() {
  const route = "muthafucka";
  return (
    <>
      <div>
        <h1 className="text-center">Next js 15</h1>

        <p className="text-center">Again, I will try to learn this shit.</p>
      </div>

      <div className="p-20">
        <h1>Lessons</h1>

        <div className="flex">
          <ul>
            <li>
              <Link href="/routing">1. Routing</Link>
            </li>

            <li>
              <Link href="/nested-routes">2. Nested Routing</Link>
            </li>

            <li>
              <Link href="/dynamic-routes">3. Dynamic Routing</Link>
            </li>

            <li>
              <Link href="/nested-dynamic-routes">
                4. Nested Dynamic Routing
              </Link>
            </li>

            <li>
              <Link href="/docs">5. Catch All Segments</Link>
            </li>

            <li>
              <Link href="/private-folders">6. Private Folders</Link>
            </li>

            <li>
              <Link href="/route-groups">7. Route Groups</Link>
            </li>

            <li>
              <Link href={`/${route}`}>8. {route}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
