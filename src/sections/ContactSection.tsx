import { Reveal } from '../components/Reveal';
import { contactEmail, contactHref } from '../content/site';

export function ContactSection() {
  return (
    <section className="closing-section" id="contact" aria-labelledby="closing-title">
      <div className="site-width closing-layout">
        <Reveal className="closing-copy">
          <h2 id="closing-title">Let’s make experience easier to recognize.</h2>
        </Reveal>
        <Reveal className="closing-action" delay={0.08}>
          <p>
            Start a conversation about credential verification and a more connected path to
            international opportunity.
          </p>
          <a className="button button-forest" href={contactHref}>
            Email CONNEXA
          </a>
          <span className="contact-address">{contactEmail}</span>
        </Reveal>
      </div>
    </section>
  );
}
