export interface ButtonProps {
  color: "red" | "green" | "yellow";
  text: String;
  onClick: any;
}
const Button = ({ color, text, onClick }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
