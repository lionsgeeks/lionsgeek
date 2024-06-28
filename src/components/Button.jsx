export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`bg-alpha hover:bg-transparent hover:scale-105 hover:text-alpha border border-alpha px-16 py-2.5 w-fit rounded-lg font-normal duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
