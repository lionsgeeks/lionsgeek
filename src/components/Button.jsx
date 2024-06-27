export default function Button({ children, className }) {
  return (
    <button
      className={`mt-2 bg-alpha hover:bg-transparent hover:text-alpha border border-alpha px-16 py-2.5 w-fit rounded-lg font-medium ${className}`}
    >
      {children}
    </button>
  );
}
