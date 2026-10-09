import { contactLinks, profile } from '../content/profile';

export function ProfileHero() {
  return (
    <aside className="profile-sidebar" aria-label="연구자 프로필">
      <div className="sidebar-inner">
        <a className="wordmark" href="#top" aria-label="페이지 처음으로">JY.</a>

        <div className="profile-identity">
          <h2>{profile.nameKo}</h2>
          <p>{profile.nameEn}</p>
          <p className="profile-school">{profile.universityKo} {profile.majorKo}</p>
        </div>

        <dl className="profile-facts">
          <div><dt>GPA</dt><dd>{profile.gpa}</dd></div>
          <div><dt>Expected graduation</dt><dd>{profile.expectedKo}</dd></div>
        </dl>

        <nav aria-label="주요 탐색">
          <a href="#top">Home</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="./resume.html" target="_blank" rel="noreferrer">CV</a>
        </nav>

        <div className="sidebar-actions">
          <a className="cv-button" href="./resume.html" target="_blank" rel="noreferrer">
            <span>English CV</span><span aria-hidden="true">→</span>
          </a>
          <div className="sidebar-contact">
            {contactLinks.filter((contact) => contact.label !== 'Phone').map((contact) => (
              <a
                href={contact.href}
                key={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noreferrer' : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
