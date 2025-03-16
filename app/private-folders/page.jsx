export default function PrivateFolders() {
  return (
    <>
      <h1>Private Folders</h1>

      <p>
        It's a way to tell Nextjs that this folder is just for internal stuff.
        In other words, this folder must not be included as a route in the app.
      </p>

      <p>
        To create a private folder just add an underscore at the start of the
        folder name.
      </p>

      <p>Private folders are useful for:</p>

      <ul>
        <li>Keeping your UI logic separate from routing logic</li>
        <li>
          Having a consistent way to organize internal files in your project
        </li>
        <li>Making it easier to group related files in your code editor</li>
        <li>
          Avoiding potential naming conflicts with future Nextjs file naming
          conventions
        </li>
      </ul>

      <h2>Quick Tip</h2>

      <p>
        If you actually want an underscore in your URL, use "%5F" instead.
        That's just the URL-encoded version of an underscore.
      </p>
    </>
  );
}
