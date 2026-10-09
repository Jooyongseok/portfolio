import { contactLinks } from '../content/profile';

export function ContactSection() {
  return (
    <footer className="contact-section" aria-labelledby="contact-title">
      <p className="section-kicker">Contact</p>
      <h2 id="contact-title">연구와 구현이 만나는 문제를 함께 탐구하고 싶습니다.</h2>
      <div className="contact-links">
        {contactLinks.map((contact) => (
          <a href={contact.href} key={contact.href} target={contact.external ? '_blank' : undefined} rel={contact.external ? 'noreferrer' : undefined}>
            {contact.label}<span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <small>© 2026 Jooyongseok · AI research portfolio</small>
    </footer>
  );
}
