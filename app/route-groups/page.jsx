export default function RouteGroups() {
  return (
    <>
      <h1>Route Groups</h1>

      <p>
        Let's us logically organize our routes and project files without
        impacting the URL structure.
      </p>

      <p>Here's an example of structure for Route Groups:</p>

      <ul>
        <li>Register</li>
        <li>Login</li>
        <li>Forgot Password</li>
      </ul>

      <p>
        When you create single files, like I am doing now, it works but makes
        things a little bit messy. However, when you create a folder (auth, for
        instance), and move all the different routes inside the new folder,
        routes are all broken.
      </p>

      <p>
        To create a route group, simply wrap the folder name in parenthesis.
      </p>

      <p>
        For this exercise, we have a folder called auth (between parenthesis),
        and two routes inside, Login and Register. Try accessing:
      </p>

      <ul>
        <li>localhost:3000/route-groups/login</li>
        <li>localhost:3000/route-groups/register</li>
      </ul>
    </>
  );
}
