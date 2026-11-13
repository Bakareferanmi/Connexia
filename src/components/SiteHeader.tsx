import { useRef } from 'react';
import { contactSectionHref, navigationLinks } from '../content/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { BrandLockup } from './BrandLockup';
import { SiteNavigation } from './SiteNavigation';

const sectionLinks = [...navigationLinks.map(({ href }) => href), contactSectionHref];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const activeHref = useActiveSection(headerRef, sectionLinks);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-width header-inner">
        <BrandLockup />
        <SiteNavigation className="primary-nav" label="Main navigation" activeHref={activeHref} />
        <a
          className="header-contact"
          href={contactSectionHref}
          aria-current={activeHref === contactSectionHref ? 'location' : undefined}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
