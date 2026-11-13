import { siteName } from '../content/site';
import { ConnexaMark } from './ConnexaMark';

export function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? 'brand-lockup footer-brand' : 'brand-lockup'}
      href="#top"
      aria-label={`${siteName} home`}
    >
      <ConnexaMark />
      <span>{siteName}</span>
    </a>
  );
}
