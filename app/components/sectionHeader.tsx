import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
}
export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, easing: 'ease-out' }}>
      <header className="font-inter font-semibold text-[22px] leading-none text-slate-blue pb-5">{title}</header>
    </motion.div>
  );
}
