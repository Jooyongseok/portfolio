import { profile, researchDirections } from '../content/profile';

export function ResearchSection() {
  return (
    <section className="research-overview" id="top" aria-labelledby="hero-title">
      <div className="statement-block">
        <p className="section-kicker">Research statement</p>
        <h1 id="hero-title">
          <span>현실의 데이터를 이해하는</span>{' '}
          <span>AI를 연구합니다</span>
        </h1>
        <p className="statement-copy">{profile.introductionKo}</p>
      </div>

      <div className="research-directions" id="research" aria-label="연구 관심 분야">
        <p className="section-number">01</p>
        {researchDirections.map((direction, index) => (
          <article className="direction" key={direction.title}>
            <p className="direction-index">0{index + 1}</p>
            <h2>{direction.title}</h2>
            <p>{direction.summaryKo}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
