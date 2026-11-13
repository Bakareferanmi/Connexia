import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const elementRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const ref = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      setRevealed(true);
      observer.disconnect();
    }, { rootMargin: '0px 0px 8px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}
