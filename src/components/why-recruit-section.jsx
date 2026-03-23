import { BookOpen, FlaskConical, Users, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Industry-Aligned Curriculum',
    description: 'Syllabus updated for 2026 demands, covering full-stack development, cloud infrastructure, and data science pipelines.',
    icon: BookOpen,
    span: 'md:col-span-2',
  },
  {
    title: 'Hands-on Labs',
    description: 'State-of-the-art robotics, IoT, and computing labs for practical project-based learning.',
    icon: FlaskConical,
    span: '',
  },
  {
    title: 'Soft Skills Focus',
    description: 'Leadership, communication, and teamwork training modules integrated into every semester.',
    icon: Users,
    span: '',
  },
  {
    title: 'Innovation-Driven Culture',
    description: 'Hackathons, tech fests, and startup incubation programs foster an entrepreneurial mindset from day one.',
    icon: Rocket,
    span: 'md:col-span-2',
  },
]

export function WhyRecruitSection() {
  return (
    <section id="academics" className="why-recruit-section">
      <div className="container">
        <motion.div
          className="why-recruit-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="why-recruit-header-label">
            Why SIET Panchkula
          </p>
          <h2 className="why-recruit-title">
            Why Recruit Here?
          </h2>
        </motion.div>
        <div className="recruitment-cards">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className={`recruitment-card ${card.span}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="recruitment-card-icon">
                  <Icon />
                </div>
                <h3 className="recruitment-card-title">
                  {card.title}
                </h3>
                <p className="recruitment-card-description">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
