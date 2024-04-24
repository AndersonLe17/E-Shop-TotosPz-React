import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../config/clsx.config";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn("flex rounded-lg px-4 py-2 text-center shadow-totos transition ease-in", buttonVariants({ variant }), className)}>
      <div
        className={cn(`w-full text-center font-inter text-base text-light`, {
          "text-dark": variant === "light",
        })}
      >
        {children}
      </div>
    </button>
  );
};

const buttonVariants = cva("color", {
  variants: {
    variant: {
      light: "bg-light hover:bg-white active:bg-white",
      dark: "bg-dark hover:bg-black active:bg-black",
      primary: "bg-primary hover:bg-primary-700 active:bg-primary-900",
      gray: "bg-gray px-4 hover:bg-gray-700 active:bg-gray-900",
      success: "bg-success hover:bg-success-700 active:bg-success-900",
      danger: "bg-danger hover:bg-danger-700 active:bg-danger-900",
      warning: "bg-warning hover:bg-warning-700 active:bg-warning-900",
      info: "bg-info hover:bg-info-700 active:bg-info-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
