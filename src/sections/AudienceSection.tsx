import { Reveal } from '../components/Reveal';
import { audiences } from '../content/site';

export function AudienceSection() {
  return (
    <section
      className="audience-section"
      id="institutions"
      aria-labelledby="institutions-title"
    >
      <div className="site-width audience-layout">
        <Reveal className="audience-copy">
          <p className="section-kicker section-kicker-dark">02 / Who we support</p>
          <h2 id="institutions-title">
            For people on the move, and the institutions assessing them.
          </h2>
          <p>
            CONNEXA aims to connect people carrying African qualifications and professional
            experience with employers, educators and evaluators seeking the context to consider
            them across borders.
          </p>
        </Reveal>
        <ul
          className="audience-list"
          aria-label="People and institutions CONNEXA aims to support"
        >
          {audiences.map((audience) => (
            <li key={audience}>
              <span className="audience-dot" aria-hidden="true" />
              {audience}
            </li>
          ))}
        </ul>
      </div>
      <div className="site-width audience-footerline" aria-hidden="true">
        <span>PEOPLE</span>
        <span>CONTEXT</span>
        <span>INSTITUTIONS</span>
        <span>OPPORTUNITY</span>
      </div>
    </section>
  );
}
