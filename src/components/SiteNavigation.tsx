import { navigationLinks } from '../content/site';

type SiteNavigationProps = {
  className: string;
  label: string;
  activeHref?: string;
};

export function SiteNavigation({ className, label, activeHref }: SiteNavigationProps) {
  return (
    <nav className={className} aria-label={label}>
      {navigationLinks.map(({ href, label }) => (
        <a key={href} href={href} aria-current={activeHref === href ? 'location' : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}
