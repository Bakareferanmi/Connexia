import { navigationLinks } from '../content/site';

type SiteNavigationProps = {
  className: string;
  label: string;
};

export function SiteNavigation({ className, label }: SiteNavigationProps) {
  return (
    <nav className={className} aria-label={label}>
      {navigationLinks.map(({ href, label }) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </nav>
  );
}
