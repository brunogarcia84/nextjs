export default async function Docs({ params }) {
  const { slug } = await params;

  if (slug?.length == 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length == 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return (
    <>
      <h1>Catch All Segments</h1>

      <p>
        To understand better the catch all segments feature of Nextjs, consider
        the following scenario:
      </p>

      <p>
        We are building a documentation site for the project. The site has
        multiple features, and each feature contains different concepts that
        needs to be documented.
      </p>

      <p>
        For example, the website has five features and each feature has five
        concepts.
      </p>

      <p>
        The goal is to create unique routes for each concept under its
        respective feature. Here's an example of the routes
      </p>

      <ul>
        <li>localhost:3000/docs/feature1/concept1</li>
        <li>localhost:3000/docs/feature1/concept2</li>
        <li>localhost:3000/docs/feature2/concept1</li>
        <li>localhost:3000/docs/feature2/concept2</li>
        <li>And so on...</li>
      </ul>

      <p>
        If you have 20 features, and each feature has 20 concepts, you end up
        with 400 different routes. For Nextjs, it means that we need 400
        different folders in the project.
      </p>

      <p>
        By using dynamic routes for the conceptId, we cut the number of folders
        to 20. Furthermore, if we use dynamic routes for the featureId, we cut
        the number of folders to 1.
      </p>

      <p>
        However, if we add more routes we will need more folders. And there's
        how the catch all segments come in hand. By using the catch all segments
        feature, we need only 1 folder to handle all the mess.
      </p>

      <h2>How to use it</h2>

      <ul>
        <li>Create a folder called docs</li>
        <li>
          Inside docs, create another folder with a special naming convention:
          [...slug]
        </li>
        <li>Use slug since that is a common term for naming URLs</li>
        <li>Create a page.jsx inside the ...slug folder</li>
        <li>Now, this route will match any URL with docs in its part.</li>
        <li>By using params, we can access all segments of the URL.</li>
        <li></li>
        <li>
          Embrace the [...slug] in an extra pair of square brackets [[...slug]]
          to make the slug segment optional so you can access the route docs
          without any extra routing in it.
        </li>
        <li>
          If your page UI is always the same, a simple page.jsx in the docs
          folder will work. However, if the page UI is different based on the
          URL, then use the optional catch all segments
        </li>
      </ul>
    </>
  );
}
