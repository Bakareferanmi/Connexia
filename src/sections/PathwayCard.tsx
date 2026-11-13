import { pathwaySteps } from '../content/site';

export function PathwayCard() {
  return (
    <figure className="pathway-card" aria-labelledby="pathway-title">
      <div className="pathway-heading">
        <div>
          <p className="visual-overline">The CONNEXA pathway</p>
          <h2 id="pathway-title">A clearer path to recognition</h2>
        </div>
        <span className="development-label">In development</span>
      </div>
      <ol className="pathway-steps">
        {pathwaySteps.map((step) => (
          <li className="pathway-step" key={step.number}>
            <span className="pathway-node" aria-hidden="true">
              {step.number}
            </span>
            <span className="pathway-copy">
              <strong>{step.title}</strong>
              <span>{step.description}</span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption>
        <span className="caption-mark" aria-hidden="true" />A verification-led approach
        for cross-border assessment
      </figcaption>
    </figure>
  );
}
