import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { ApproachSection } from './sections/ApproachSection';
import { AudienceSection } from './sections/AudienceSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';

export default function App() {
  return (
    <div className="connexa-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main className="connexa-main" id="main-content" tabIndex={-1}>
        <HeroSection />
        <ApproachSection />
        <AudienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
