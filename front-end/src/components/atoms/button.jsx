// src/components/atoms/button.jsx
export const Button = ({ children, className = "", onClick, href }) => {
  const classes = `cursor-pointer font-medium rounded-md focus:outline-none ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
