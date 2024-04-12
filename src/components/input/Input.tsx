type Props = {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, placeholder, type = "text", name, value = "", onChange }: Props) => {
  return (
    <div className="flex rounded-lg bg-white px-3 py-[6px]">
      <label className="block w-full font-inter text-[11px] font-semibold uppercase">
        {label}
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="block w-full pt-1 font-inter text-base font-medium placeholder:font-medium focus-visible:outline-none"
        />
      </label>
    </div>
  );
};

export default Input;
