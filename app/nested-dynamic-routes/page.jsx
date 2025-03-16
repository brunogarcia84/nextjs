import Link from "next/link";

export default function NestedDynamicRoutes() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Nested Dynamic Routes</h1>
      <div className="p-15">
        <div className="separation">
          <p>
            When building an app, you will often come accross scenarios where
            you will need to handle multiple dynamic segments in your route.
          </p>
        </div>

        <div className="separation">
          <h2>Scenario 5</h2>

          <ul>
            <li>You want to show details at /products/1</li>
            <li>
              You also need to display the first review for products/1/reviews/1
            </li>
          </ul>
        </div>

        <div className="separation">
          <p>To achieve this scenario:</p>

          <ul>
            <li>- Inside the productId folder create a reviews folder</li>
            <li>
              - Inside the reviews folder create another folder between square
              brackets named reviewId
            </li>
            <li>- Within the folder create a page.jsx file.</li>
            <li>
              - Create a component that displays the product ID and the review
              ID
            </li>
          </ul>
        </div>

        <div className="separation">
          <p>
            By navigating to
            localhost:3000/nested-dynamic-routes/products/1/reviews/1 you will
            find all the information coded.
          </p>
        </div>
      </div>
    </>
  );
}
