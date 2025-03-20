export default async function ProductDetails({ params }) {
  const shit = (await params).productId;
  return (
    <>
      <h1>
        This is the product with id # {shit}, and you are seeing the details
        page.
      </h1>

      <p>
        It's still a dark matter for my head. However, what I understood about
        all this trip is that params are intrinsic to Next.js. It doesn't matter
        which page I try to access, I will always have params for that page. Is
        that correct???
      </p>

      <p>
        By destructuring these params, I can access the actual ID of each
        product. This ID corresponds to the <code>[slug]</code> Dynamic Segment
        created. By creating a const to store this ID, we can access it anywhere
        in this page.
      </p>

      <p>
        I am going to re-visit this page to understand if I am right or wrong
        with these concepts.
      </p>
    </>
  );
}
