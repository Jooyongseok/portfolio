import { selectedEvidence } from '../content/profile';

export function AchievementsSection() {
  return (
    <section className="evidence-section" id="evidence" aria-labelledby="evidence-title">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">Selected evidence</p>
          <h2 id="evidence-title">연구 역량을 보여주는 근거</h2>
        </div>
        <p>문제에서 결과까지</p>
      </div>

      <div className="evidence-list">
        {selectedEvidence.map((evidence, index) => (
          <article className="evidence-row" key={evidence.titleKo}>
            <p className="evidence-number"><span>0</span>{index + 1}</p>
            <div className="evidence-heading">
              <p className="evidence-kind">{evidence.kind}</p>
              <h2>
                {'href' in evidence && evidence.href ? (
                  <a href={evidence.href} target="_blank" rel="noreferrer">{evidence.titleKo}</a>
                ) : evidence.titleKo}
              </h2>
              <p className="evidence-meta">{evidence.period}</p>
              {'authors' in evidence && evidence.authors ? <p className="evidence-authors">{evidence.authors}</p> : null}
            </div>
            <div className="evidence-detail"><p>Problem</p><span>{evidence.problemKo}</span></div>
            <div className="evidence-detail"><p>Contribution</p><span>{evidence.contributionKo}</span></div>
            <div className="evidence-detail"><p>Result</p><strong>{evidence.resultKo}</strong></div>
          </article>
        ))}
      </div>
    </section>
  );
}
