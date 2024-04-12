type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <div className={`shadow-totos my-auto flex w-full flex-col rounded-2xl bg-light px-6 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
