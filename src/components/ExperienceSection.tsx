import { additionalAchievements, leadership } from '../content/profile';

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">Further experience</p>
          <h2 id="experience-title">연구를 현실의 가치로 연결한 경험</h2>
        </div>
        <p>Competition · Leadership</p>
      </div>

      <article className="supporting-row">
        <p className="supporting-meta">{leadership.period}</p>
        <div>
          <p className="evidence-kind">Entrepreneurship & Leadership</p>
          <h3>{leadership.organizationKo} · {leadership.role}</h3>
        </div>
        <ul>{leadership.bulletsKo.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </article>

      {additionalAchievements.map((achievement) => (
        <article className="supporting-row" key={achievement.titleKo}>
          <p className="supporting-meta">Competition</p>
          <div>
            <p className="evidence-kind">Award</p>
            <h3><a href={achievement.href} target="_blank" rel="noreferrer">{achievement.titleKo}</a></h3>
          </div>
          <p className="supporting-result"><strong>{achievement.result}</strong>{achievement.detailKo}</p>
        </article>
      ))}
    </section>
  );
}
