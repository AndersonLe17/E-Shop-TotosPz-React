import { useState } from "react";
import { cn } from "../../config/clsx.config";
import { validHandler, validStates } from "../../utils/validation.util";
import { AttrValidation } from "../../domain/interfaces/input/valid.interface";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  attr: AttrValidation;
  trim?: boolean;
}

const TextArea = ({ label, attr, trim, className, ...props }: TextAreaProps) => {
  const [msg, setMsg] = useState<string>();

  const onInvalidHandler = (e: React.InvalidEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    validStates.forEach((valid) => e.target.validity[valid] && setMsg(validHandler(e, valid, attr)));
  };

  return (
    <div className={cn("flex", className)}>
      <label className="block w-full rounded-lg bg-white px-3 py-[6px] font-inter text-[11px] font-semibold uppercase">
        {label}
        <textarea
          {...props}
          onInvalid={onInvalidHandler}
          onFocus={() => setMsg(undefined)}
          onBlur={(e) => (trim && e.target.value !== e.target.value.trim() ? e.target.setCustomValidity("valueBlank") : e.target.setCustomValidity(""))}
          className="block w-full pt-1 font-inter text-base font-medium text-dark placeholder:font-medium focus-visible:outline-none"
        />
      </label>
      <div className={cn("transition-all", { "mt-1 rounded bg-danger px-2 py-1": msg })}>
        {msg && <p className="font-inter text-xs font-semibold text-light">× {msg}</p>}
      </div>
    </div>
  );
};

export default TextArea;
