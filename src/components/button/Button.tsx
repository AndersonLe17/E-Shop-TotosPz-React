type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, color = "primary", type = "button" }: Props) => {
  return (
    <button type={type} className={`flex bg-${color} rounded-lg px-4 py-2 text-center shadow-totos hover:bg-${color}-700 active:bg-${color}-900`}>
      <div className={`w-full text-center font-inter text-base text-${color != "light" ? "light" : "dark"}`}>{children}</div>
    </button>
  );
};

export default Button;
