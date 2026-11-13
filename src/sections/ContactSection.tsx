import { Reveal } from '../components/Reveal';
import { contactHref } from '../content/site';

export function ContactSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="site-width closing-layout">
        <Reveal className="closing-copy">
          <p className="section-kicker section-kicker-dark">The next connection starts here</p>
          <h2 id="closing-title">Let’s make experience easier to recognize.</h2>
        </Reveal>
        <div className="closing-action">
          <p>
            Start a conversation about credential verification and a more connected path to
            international opportunity.
          </p>
          <a className="button button-forest" href={contactHref}>
            Contact CONNEXA
          </a>
        </div>
      </div>
    </section>
  );
}
