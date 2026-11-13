import { contactHref } from '../content/site';
import { BrandLockup } from './BrandLockup';
import { SiteNavigation } from './SiteNavigation';

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="site-width header-inner">
        <BrandLockup />
        <SiteNavigation className="primary-nav" label="Main navigation" />
        <a className="header-contact" href={contactHref}>
          Start a conversation
        </a>
      </div>
    </header>
  );
}
