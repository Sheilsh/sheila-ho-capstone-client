export default function Button({ className, type, btnName, onClick }) {
  return (
    <button
      className={`button-styles ${className}`}
      type={type}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
}
