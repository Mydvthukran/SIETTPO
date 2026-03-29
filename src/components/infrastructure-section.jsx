import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function InfrastructureSection() {
  const { lang } = useLanguage()
  const t = translations[lang].infrastructure

  return (
    <section id="infrastructure" className="infrastructure-section">
      <div className="container">
        <motion.div
          className="infrastructure-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="infrastructure-header-label">
            {t.headerLabel}
          </p>
          <h2 className="infrastructure-title">
            {t.title}
          </h2>
        </motion.div>
        <div className="facility-grid">
          {t.facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="facility-placeholder">
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon className="facility-placeholder-icon" />
                  <span className="facility-placeholder-size">400 x 300</span>
                </div>
              </div>
              <div className="facility-info">
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
