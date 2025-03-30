interface SectionHeaderProps {
  title: string;
}
export function SectionHeader({ title }: SectionHeaderProps) {
  return <header className="font-inter font-semibold text-[22px] leading-none text-slate-blue pb-5">{title}</header>;
}
