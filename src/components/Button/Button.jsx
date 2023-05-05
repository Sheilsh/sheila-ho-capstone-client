export default function Button({ className, type, btnName, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {btnName}
    </button>
  );
}
