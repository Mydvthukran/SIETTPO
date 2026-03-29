import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function MessageCard({ name, designation, photo, message, readMore, readLess }) {
  const [expanded, setExpanded] = useState(false)
  const preview = message.slice(0, 220)

  return (
    <div className="message-card">
      <div className="message-card-photo-wrapper">
        <img src={photo} alt={name} className="message-card-photo" />
      </div>
      <div className="message-card-body">
        <h3 className="message-card-name">{name}</h3>
        <p className="message-card-designation">{designation}</p>
        <p className="message-card-text">
          {expanded ? message : `${preview}…`}
        </p>
        <button
          className="message-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>{readLess} <ChevronUp className="message-toggle-icon" /></>
          ) : (
            <>{readMore} <ChevronDown className="message-toggle-icon" /></>
          )}
        </button>
      </div>
    </div>
  )
}

export function MessageSection() {
  const { lang } = useLanguage()
  const t = translations[lang].message

  return (
    <section id="messages" className="message-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="section-title">{t.sectionTitle}</h2>
        </div>

        <div className="message-grid">
          {t.members.map((member) => (
            <MessageCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              photo="/placeholder-user.jpg"
              message={member.message}
              readMore={t.readMore}
              readLess={t.readLess}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
