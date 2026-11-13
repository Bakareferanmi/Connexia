import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(enabled: boolean) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle');

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element || !('IntersectionObserver' in window)) return;

    const bounds = element.getBoundingClientRect();
    // Keep content that is visible at load, including at a direct anchor link, visible.
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) return;

    setState('hidden');
    const threshold = Math.min(0.2, window.innerHeight / bounds.height);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio < threshold) return;

      setState('shown');
      observer.disconnect();
    }, { threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  return { ref, state };
}
