import { motion } from 'motion/react';
import { useState, useRef } from 'react';

export interface AvatarSelectorProps {
  id?: string;
  name?: string;
}

export function AvatarSelector({ id = 'avatar-selector', name }: AvatarSelectorProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  function triggerFileInput() {
    fileInputRef.current?.click();
  }

  return (
    <div className="relative w-22.5 h-22.5">
      <motion.button
        type="button"
        onClick={triggerFileInput}
        className="w-full h-full rounded-full border border-gray-300 flex items-center justify-center bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Select an avatar"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {preview && (
          <motion.img
            src={preview}
            alt="Selected avatar"
            className="w-full h-full object-cover rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <span
          className="text-gray-500 absolute -right-2 bottom-0.5 w-7.5 h-7.5 bg-dark-gray rounded-full flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_1936)">
              <path
                d="M14.587 4.16321L13.2365 5.51379C13.0988 5.65149 12.8761 5.65149 12.7384 5.51379L9.48646 2.26184C9.34876 2.12415 9.34876 1.90149 9.48646 1.76379L10.837 0.413208C11.3849 -0.134644 12.2755 -0.134644 12.8263 0.413208L14.587 2.17395C15.1378 2.7218 15.1378 3.61243 14.587 4.16321ZM8.3263 2.92395L0.632942 10.6173L0.0118485 14.1769C-0.0731124 14.6573 0.345833 15.0734 0.826302 14.9913L4.38587 14.3673L12.0792 6.67395C12.2169 6.53626 12.2169 6.3136 12.0792 6.1759L8.82728 2.92395C8.68665 2.78626 8.464 2.78626 8.3263 2.92395ZM3.63587 9.95813C3.47474 9.797 3.47474 9.53918 3.63587 9.37805L8.14759 4.86633C8.30872 4.7052 8.56654 4.7052 8.72767 4.86633C8.8888 5.02747 8.8888 5.28528 8.72767 5.44641L4.21595 9.95813C4.05482 10.1193 3.797 10.1193 3.63587 9.95813ZM2.57825 12.422H3.9845V13.4855L2.09486 13.8165L1.18372 12.9054L1.51478 11.0157H2.57825V12.422Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_1936">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </motion.button>

      <input
        type="file"
        id={id}
        name={name}
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="sr-only"
        aria-label="Select an avatar image"
      />
    </div>
  );
}
