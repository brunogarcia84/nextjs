export default function ProductsList({ id, title, price }) {
  return (
    <>
      <div className="border-2 border-white m-5 p-5">
        <h1 key={id}>{title}</h1>
        <p key={id}>{price}</p>
      </div>
    </>
  );
}
