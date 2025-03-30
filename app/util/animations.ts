import { useRef } from 'react';
import { useMotionValue, useTransform } from 'motion/react';

export function useTilt() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Limit rotation between -15 and 15 degrees for a smooth effect
  const clampedRotateX = useTransform(rotateX, (x) => Math.max(Math.min(x, 15), -15));
  const clampedRotateY = useTransform(rotateY, (y) => Math.max(Math.min(y, 15), -15));

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const xRel = (event.clientX - centerX) / rect.width;
      const yRel = (event.clientY - centerY) / rect.height;

      // Adjust tilt sensitivity
      rotateY.set(xRel * 30);
      rotateX.set(-yRel * 30);
    }
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { cardRef, clampedRotateX, clampedRotateY, handleMouseMove, handleMouseLeave };
}
