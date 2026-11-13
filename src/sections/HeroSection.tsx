import { Reveal } from '../components/Reveal';
import { contactSectionHref, siteTagline } from '../content/site';
import { PathwayCard } from './PathwayCard';

export function HeroSection() {
  return (
    <section className="hero-band" aria-labelledby="hero-title">
      <div className="site-width hero-layout">
        <div className="hero-copy">
          <p className="hero-tagline">{siteTagline}</p>
          <p className="hero-overline">Credential verification across borders</p>
          <h1 id="hero-title">Credibility should travel with talent.</h1>
          <p className="hero-description">
            Many African qualifications and professional experiences face credibility barriers
            when assessed internationally. CONNEXA is developing credential verification to
            bring context into view, with the aim of connecting people and institutions with
            international recognition and opportunity.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href={contactSectionHref}>
              Talk about verification
            </a>
            <a className="hero-text-link" href="#approach">
              Explore our approach
            </a>
          </div>
        </div>

        <Reveal className="hero-visual-wrap" delay={0.1}>
          <PathwayCard />
        </Reveal>
      </div>
    </section>
  );
}
