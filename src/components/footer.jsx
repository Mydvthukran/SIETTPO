import { Mail, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const quickLinkHrefs = ['#', '#batch', '#infrastructure', '#gallery', '#contact']

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <div>
              <span className="footer-logo">
                {t.institutionName}
              </span>
              <p className="footer-tagline">{t.tagline}</p>
            </div>
            <p className="footer-description">
              {t.description}
            </p>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">
              {t.quickLinks}
            </h3>
            <ul className="footer-links">
              {t.links.map((label, i) => (
                <li key={label}>
                  <a href={quickLinkHrefs[i]}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">
              {t.contactTpo}
            </h3>
            <ul className="footer-contact">
              <li>
                <a href="mailto:tpo@sietpanchkula.ac.in" className="footer-contact-link">
                  <Mail className="icon" />
                  tpo@sietpanchkula.ac.in
                </a>
              </li>
              <li>
                <a href="tel:+919253289394" className="footer-contact-link">
                  <Phone className="icon" />
                  +91 92532 89394 (Divya Singla)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-separator">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
