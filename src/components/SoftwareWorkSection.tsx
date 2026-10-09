import { projects } from '../content/projects';

export function SoftwareWorkSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">Selected software projects</p>
          <h2 id="projects-title">연구를 구현으로 확장한 작업</h2>
        </div>
        <p>{String(projects.length).padStart(2, '0')} projects</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.title}>
            <p className="project-index">0{index + 1}</p>
            <div><p className="evidence-kind">{project.label}</p><h3>{project.title}</h3>{'statusKo' in project && project.statusKo ? <p className="evidence-kind">{project.statusKo}</p> : null}</div>
            <p className="project-summary">{project.summaryKo}</p>
            <div className="project-proof">
              <p>{project.evidenceKo}</p>
              <ul aria-label={`${project.title} 기술`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              {'href' in project && project.href ? <a href={project.href} target="_blank" rel="noreferrer">개발 기록 보기 →</a> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
