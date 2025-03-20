import Link from "next/link";

export default async function Products() {
  return (
    <>
      <h1>Products List</h1>

      <p>
        For this simple example, we have the main products page. For each
        product we will display details about it.
      </p>

      <p>
        Right now, we have only three products. It is easy to create and to
        maintain the website. However, if we have hundreds or thousands of
        products, it will be an impossible task to maintain everything.
      </p>

      <p>In this case, we will create a Dynamic Segment.</p>

      <ul>
        <li>
          <Link href="/dynamic-route/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/dynamic-route/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/dynamic-route/products/3">Product 3</Link>
        </li>
      </ul>

      <p>
        After creating the <code>/products/[slug]</code> segment, when you
        access in your browser <code>/products/1</code>,{" "}
        <code>/products/2</code>, etc, you will see the same details page.
      </p>

      <p>
        In a real app, you would fetch data from an API based of the product id.
        For now, as a part of the study, let's just display which product we are
        showing.
      </p>

      <p>
        Every page in the app receive route parameters through the params prop.
        Take a look at the code of the slug page to understand it.
      </p>
    </>
  );
}
