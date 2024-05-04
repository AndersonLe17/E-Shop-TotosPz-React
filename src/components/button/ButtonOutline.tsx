import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../config/clsx.config";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof outlineVariants> {
  children?: React.ReactNode;
}

const ButtonOutline = ({ children, className, variant, disabled, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn("rounded-lg px-4 py-2 shadow-totos transition ease-in", outlineVariants({ variant }), className, {
        "pointer-events-none border-gray-400 bg-gray-200 text-gray hover:bg-gray-200 hover:text-gray active:bg-gray-200": disabled,
      })}
    >
      <div className="flex w-full items-center justify-center gap-1 font-inter">{children}</div>
    </button>
  );
};

const outlineVariants = cva("color", {
  variants: {
    variant: {
      light: "border-[1.5px] border-light text-light hover:bg-white hover:text-dark active:bg-white",
      dark: "border-[1.5px] border-dark text-dark hover:bg-black hover:text-light active:bg-black",
      primary: "border-[1.5px] border-primary text-primary hover:bg-primary-700 hover:text-light active:bg-primary-900",
      gray: "border-[1.5px] border-gray text-gray hover:bg-gray-700 hover:text-light active:bg-gray-900",
      success: "border-[1.5px] border-success text-success hover:bg-success-700 hover:text-light active:bg-success-900",
      danger: "border-[1.5px] border-danger text-danger hover:bg-danger-700 hover:text-light active:bg-danger-900",
      warning: "border-[1.5px] border-warning text-warning hover:bg-warning-700 hover:text-light active:bg-warning-900",
      info: "border-[1.5px] border-info text-info hover:bg-info-700 hover:text-light active:bg-info-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default ButtonOutline;
