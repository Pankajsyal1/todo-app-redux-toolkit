import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  name,
  id,
  placeholder,
  className = "",
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`px-4 py-2 border-2 w-full rounded-sm bg-white text-gray-700 outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        required
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
