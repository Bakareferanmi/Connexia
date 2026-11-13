import { useEffect, useState, type RefObject } from 'react';

export function useActiveSection(headerRef: RefObject<HTMLElement | null>, links: string[]) {
  const [activeHref, setActiveHref] = useState<string>();

  useEffect(() => {
    const sections = links.flatMap((href) => {
      const element = document.getElementById(href.slice(1));
      return element ? [{ href, element }] : [];
    }).reverse();
    let frame = 0;

    function update() {
      frame = 0;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const readingLine = headerBottom + (window.innerHeight - headerBottom) * 0.2;
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? sections[0]
        : sections.find(({ element }) => element.getBoundingClientRect().top <= readingLine);
      setActiveHref(current?.href);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [headerRef, links]);

  return activeHref;
}
