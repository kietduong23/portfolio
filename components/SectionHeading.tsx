import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  action?: React.ReactNode;
}

export function SectionHeading({ index, title, action }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex items-end justify-between gap-4 border-t border-line pt-8 md:mb-14">
      <h2 className="flex items-baseline gap-3">
        <span className="font-mono text-base font-normal text-muted md:text-xl">({index})</span>
        <span className="display text-3xl md:text-5xl">{title}</span>
      </h2>
      {action}
    </Reveal>
  );
}
