export default function Button({ className, type, btnName }) {
  return (
    <button className={className} type={type}>
      {btnName}
    </button>
  );
}
