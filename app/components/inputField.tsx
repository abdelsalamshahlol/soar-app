import { clsx } from 'clsx';
import { useId } from 'react';

export interface InputFieldProps {
  title?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  type?: HTMLInputElement['type'];
  disabled?: boolean;
  value?: string;
  required?: boolean;
}

export function InputField({
  title,
  value,
  placeholder,
  id,
  type = 'text',
  disabled,
  required,
  name,
}: InputFieldProps) {
  const inputId = id || useId();

  return (
    <label htmlFor={inputId} className="font-inter text-base leading-none font-normal">
      {title && <span className="block pb-3 text-dark-gray">{title}</span>}
      <input
        id={inputId}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        required={required}
        aria-disabled={disabled}
        aria-invalid={disabled ? 'true' : 'false'}
        aria-label={!title ? placeholder : undefined}
        className={clsx(
          'disabled:cursor-not-allowed rounded-[15px] border border-input-border-white bg-white h-[50px] w-full placeholder-input-field-placeholder-blue px-5 py-4 focus:outline-2 focus:outline-blue-500'
        )}
      />
    </label>
  );
}
