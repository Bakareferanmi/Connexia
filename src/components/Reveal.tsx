import type { CSSProperties, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type RevealProps = {
  children: ReactNode;
  className: string;
  as?: 'div' | 'header';
  trigger?: 'view' | 'load';
  variant?: 'fade-up' | 'fade';
  delay?: number;
};

export function Reveal({
  children,
  className,
  as: Tag = 'div',
  trigger = 'view',
  variant = 'fade-up',
  delay = 0,
}: RevealProps) {
  const { ref, state } = useScrollReveal(trigger === 'view');
  const style: CSSProperties & { '--reveal-delay': string } = {
    '--reveal-delay': `${delay}s`,
  };

  return (
    <Tag
      ref={(node) => { ref.current = node; }}
      className={`reveal ${className}`}
      data-trigger={trigger}
      data-state={state}
      data-variant={variant}
      style={style}
    >
      {children}
    </Tag>
  );
}
