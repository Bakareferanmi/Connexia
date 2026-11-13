import { contactEmail, siteName, siteTagline } from '../content/site';
import { BrandLockup } from './BrandLockup';
import { SiteNavigation } from './SiteNavigation';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <BrandLockup footer />
        <p className="footer-tagline">{siteTagline}</p>
        <SiteNavigation className="footer-nav" label="Footer navigation" />
        <a className="footer-email" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </div>
      <div className="site-width footer-bottom">
        <span suppressHydrationWarning>{`© ${new Date().getFullYear()} ${siteName}`}</span>
        <span>Connecting people, institutions and opportunity.</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
