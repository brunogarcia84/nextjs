import Link from "next/link";

export default function DynamicRoutes() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Dynamic Routes</h1>
      <div className="p-15">
        <div className="separation">
          <p>
            Let's follow the structure of the videos I am following. He works
            with scenarios to explain each situation. So, I'm going to describe
            and try to explain each scenario.
          </p>
        </div>

        <div className="separation">
          <p>Scenario 4:</p>

          <ul>
            <li>- localhost:3000/products</li>
          </ul>

          <p>
            This route will lead to the main products page displaying 3
            different products.
          </p>

          <ul>
            <li>- localhost:3000/products/id</li>
          </ul>

          <p>
            When navigating to the link below should display details for the
            product with that specific ID. For instance, product 1.
          </p>
        </div>

        <div className="separation">
          <ul>
            <li>
              <Link href="/dynamic-routes/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="separation">
          <p>
            While the approach of nested routes should work for three or four
            products, imagine creating thousands of folders for thousands of
            different products. It would be a nightmare.
          </p>

          <p>Avoiding this nightmare, let's use dynamic routes.</p>
        </div>

        <div className="separation">
          <p>
            Create a new folder embraced in square brackets. By doing that, you
            tell Next.js that this is a dynamic route and the ID will change for
            each product.
          </p>
        </div>

        <div className="separation">
          <p>
            Every page in the app router receives route parameteres through the
            params prop. We destructure this as "params" inside the parenthesis.
            The type of params is a promise that results to an object containing
            the dynamic segments as key/value pairs. For the example it will be
            productId (the name of the folder created for the dynamic route).
          </p>
        </div>

        <div className="separation">
          <p>
            Next.js understands everything as Server Components, unless we
            declare it as a Client Component. That being said, it is possible to
            use async/await to resolve the promise and access the dynamic
            segment.
          </p>

          <p>Verify the code under the products and productId pages.</p>
        </div>

        <div className="separation">
          <h2>Sumarize:</h2>

          <ul>
            <li>
              - You created a folder with square brackets containing productId
            </li>
            <li>- Added "page.jsx" inside it</li>
            <li>
              - Now, Next.js maps localhost:3000/products/[id] URL to this file
            </li>
            <li>
              - Inside the component, we grab the product ID from the params
              prop to show dynamic content.
            </li>
          </ul>
        </div>

        <div className="separation">
          <p>
            This concept is useful for building list-detailed views in the app.
            For instance, a blog with a few hundred posts.
          </p>
        </div>
      </div>
    </>
  );
}
