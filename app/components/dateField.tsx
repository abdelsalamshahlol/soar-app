import { clsx } from 'clsx';
import { type ChangeEvent, useId, useRef, useState } from 'react';
import { motion } from 'motion/react';

export interface DateFieldProps {
  title?: string;
  id?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function DateField({ title, id, disabled, value, onChange, placeholder }: DateFieldProps) {
  const dateFieldId = id || useId();
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [displayValue, setDisplayValue] = useState(value ? formatDate(value) : '');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function formatDate(isoDate: string) {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  }

  function openCalendar() {
    if (disabled) return;
    dateInputRef.current?.showPicker();
    setIsOpen(true);
  }

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setDisplayValue(formatDate(newValue));
    onChange?.(newValue);
    setIsOpen(false);
  }

  function handleBlur() {
    const id = setTimeout(() => {
      setIsOpen(false);
      clearTimeout(id);
    }, 100);
  }

  return (
    <label htmlFor={dateFieldId} className="font-inter text-base leading-none font-normal block">
      {title && <span className="block pb-3 text-dark-gray">{title}</span>}

      <div className="relative">
        <input
          type="text"
          value={displayValue}
          placeholder={placeholder}
          onClick={openCalendar}
          onKeyDown={(e) => e.key === 'Enter' && openCalendar()}
          onBlur={handleBlur}
          readOnly
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          className={clsx(
            'relative z-20 rounded-[15px] border border-input-border-white bg-white h-[50px] w-full placeholder-input-field-placeholder-blue px-5 py-4 focus:outline-2 focus:outline-blue-500 cursor-pointer',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        />

        <input
          id={dateFieldId}
          ref={dateInputRef}
          type="date"
          disabled={disabled}
          onChange={handleDateChange}
          onBlur={handleBlur}
          className="absolute z-10 inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <motion.svg
          className="w-5 h-5 text-dark-gray absolute right-4 top-1/2 transform -translate-y-1/2 z-30"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </div>
    </label>
  );
}
