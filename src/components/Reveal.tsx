import type { CSSProperties, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type RevealProps = {
  children: ReactNode;
  className: string;
  as?: 'div' | 'header' | 'article' | 'li';
  delay?: number;
};

export function Reveal({
  children,
  className,
  as: Tag = 'div',
  delay = 0,
}: RevealProps) {
  const { ref, revealed } = useScrollReveal();
  const style: CSSProperties & { '--reveal-delay': string } = {
    '--reveal-delay': `${delay}s`,
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-revealed={revealed}
      style={style}
    >
      {children}
    </Tag>
  );
}
