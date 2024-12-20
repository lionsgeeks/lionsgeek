
const Button = ({ children, className, outline = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`bg-alpha border border-alpha  ${
        outline
          ? "hover:bg-transparent hover:text-alpha"
          : `hover:border-beta hover:bg-[#2f343a]  `
      } px-16 py-2.5 w-fit rounded-lg font-normal text-black duration-[375ms] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
