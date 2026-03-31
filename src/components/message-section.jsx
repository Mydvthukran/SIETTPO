import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function MessageSection() {
  const { lang } = useLanguage()
  const t = translations[lang].message

  return (
    <section id="messages" className="message-section">
      <div className="message-hero-inner">
        <div className="section-header">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="section-title">{t.sectionTitle}</h2>
        </div>

        {t.members.map((member) => (
          <blockquote key={member.name} className="message-hero-quote">
            <span className="message-hero-deco" aria-hidden="true">&ldquo;</span>
            <p className="message-hero-text">{member.message}</p>
            <footer className="message-hero-attribution">
              <span className="message-hero-name">{member.name}</span>
              <span className="message-hero-designation">{member.designation}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
