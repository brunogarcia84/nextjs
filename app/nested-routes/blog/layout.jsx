export default function BlogLayout({ children }) {
  return (
    <>
      <section>
        <h2 className="text-indigo-600">Blog Layout starts here</h2>
        {children}
        <h2 className="text-indigo-600">Blog Layout ends here</h2>
      </section>
    </>
  );
}
