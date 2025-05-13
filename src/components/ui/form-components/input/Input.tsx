interface InputProps {
  as?: "input" | "textarea";
  type?: "text" | "number" | "email" | "password" | "link" | "date";
  placeholder: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  id: string;
  value: string;
  className?: string;
  rows?: number;
  disabled?: boolean;  // Add this line to the InputProps interface
}

const Input: React.FC<InputProps> = ({
  as = "input",
  type = "text",
  placeholder,
  name,
  onChange,
  id,
  value,
  className,
  rows = 4,
  disabled = false,  // Default to false if not provided
  ...rest
}) => {
  if (as === "textarea") {
    return (
      <textarea
        id={id}
        className={`px-4 py-2 border-2 rounded-md overflow-hidden hover:border-primary-500 outline-primary-500 ${className}`}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
        {...rest}
        required
        disabled={disabled}
      />
    );
  }
  return (
    <input
      type={type}
      className={`px-4 py-2 border-2 rounded-md overflow-hidden hover:border-primary-500 outline-primary-500 ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
      required
      disabled={disabled}
    />
  );
};

export default Input;
