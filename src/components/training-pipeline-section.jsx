import { motion } from 'framer-motion'
import { BookOpen, Code, Users, Briefcase, Target, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const icons = [BookOpen, Code, Users, Target, Briefcase, Award]

export function TrainingPipelineSection() {
  const { lang } = useLanguage()
  const t = translations[lang].pipeline

  return (
    <section id="pipeline" className="pipeline-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <p className="section-subtitle">{t.sectionSubtitle}</p>
        </motion.div>

        <div className="pipeline-grid">
          {t.stages.map((stage, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={stage.title}
                className="pipeline-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: i * 0.1 
                }}
              >
                <div className="pipeline-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="pipeline-card-icon">
                  <Icon />
                </div>
                <h3 className="pipeline-card-title">{stage.title}</h3>
                <p className="pipeline-card-desc">{stage.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
