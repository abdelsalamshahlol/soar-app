import { clsx } from 'clsx';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
  text?: string;
}

export function Button({ children, disabled, className, onClick, text, ...props }: ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={clsx(
        'bg-dark-gray font-inter text-lg leading-none text-center font-medium text-white relative px-[74px] py-[14px] rounded-[15px] transition focus:outline-none focus:ring-2 focus:ring-blue-500',
        disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-opacity-80',
        className
      )}
      {...props}
    >
      {children ? children : text}
    </button>
  );
}
