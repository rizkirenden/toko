export const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer font-medium rounded-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
