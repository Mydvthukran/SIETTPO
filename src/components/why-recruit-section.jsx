import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, BookOpen, Cpu, Users, Dumbbell } from 'lucide-react'

const cards = [
  {
    title: 'AICTE Approved Institution',
    description: 'Fully accredited by the All India Council for Technical Education, ensuring world-class curriculum standards and recognition.',
    icon: ShieldCheck,
  },
  {
    title: 'Haryana Government Backed',
    description: 'Established and operated under the Department of Technical Education, Government of Haryana, offering institutional stability and trust.',
    icon: Landmark,
  },
  {
    title: 'Industry-Aligned Curriculum',
    description: 'Syllabi updated annually with inputs from industry consultants covering full-stack development, cloud infrastructure, and data science.',
    icon: BookOpen,
  },
  {
    title: 'Modern Labs & Infrastructure',
    description: 'State-of-the-art IoT labs, robotics workshops, computing centres, and seminar halls built for hands-on, project-based learning.',
    icon: Cpu,
  },
  {
    title: 'Active Student Clubs',
    description: 'Vibrant tech communities — AUTONEX, Byte Forge, Buildhub, and Mantrix — where students build real projects, compete nationally, and develop leadership skills.',
    icon: Users,
  },
  {
    title: 'Rigorous Skill Training',
    description: 'Mandatory aptitude, communication, and technical training modules embedded in every semester since first year.',
    icon: Dumbbell,
  },
]

export function WhyRecruitSection() {
  return (
    <section id="why-recruit" className="why-recruit-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Why SIET Panchkula</span>
          <h2 className="section-title">Why Recruit Here?</h2>
          <p className="section-subtitle">A legacy institution with modern capabilities — here's what sets our students apart.</p>
        </motion.div>

        <div className="why-recruit-grid">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="why-recruit-card"
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
                <div className="why-recruit-card-icon">
                  <Icon />
                </div>
                <h3 className="why-recruit-card-title">{card.title}</h3>
                <p className="why-recruit-card-desc">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
