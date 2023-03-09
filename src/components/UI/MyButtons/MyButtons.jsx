import "./MyButtons.scss";

const MyButtons = () => {};

export default MyButtons;

export const MyButtonMore = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`MyButtonMore ${className}`}>
      {children}
    </button>
  );
};

export const MyButtonOrder = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`MyButtonOrder ${className}`}>
      {children}
    </button>
  );
};
