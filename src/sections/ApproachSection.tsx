import { Reveal } from '../components/Reveal';
import { approachItems } from '../content/site';

export function ApproachSection() {
  return (
    <section className="approach-section" id="approach" aria-labelledby="approach-title">
      <div className="site-width">
        <Reveal className="section-heading" as="header">
          <p className="section-kicker">Our approach</p>
          <div className="section-heading-grid">
            <h2 id="approach-title">Reduce the distance between talent and trust.</h2>
            <p>
              When people move across borders, the story behind their qualifications and work
              can be hard to assess. CONNEXA is developing a verification-led approach to help
              reduce those credibility barriers.
            </p>
          </div>
        </Reveal>

        <div className="approach-list">
          {approachItems.map((item, index) => (
            <Reveal as="article" className="approach-item" delay={index * 0.06} key={item.number}>
              <span className="approach-number" aria-hidden="true">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="approach-rule" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
