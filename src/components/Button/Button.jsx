export default function Button({ className, type, btnName, onClick }) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {btnName}
    </button>
  );
}
