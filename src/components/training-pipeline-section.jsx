import { motion } from 'framer-motion'
import { BookOpen, Code, Users, Briefcase, Target, Award } from 'lucide-react'

const stages = [
  { icon: BookOpen, title: 'Aptitude & Reasoning', desc: 'Foundation modules in quantitative aptitude, logical reasoning, and verbal ability from Semester 1.' },
  { icon: Code, title: 'Technical Upskilling', desc: 'Hands-on workshops in DSA, web development, and domain-specific tools led by industry mentors.' },
  { icon: Users, title: 'Soft Skills & Communication', desc: 'Group discussions, mock presentations, and business communication training each semester.' },
  { icon: Target, title: 'Mock Interviews', desc: 'Panel-based mock interviews simulating real placement scenarios with personalized feedback.' },
  { icon: Briefcase, title: 'Industry Exposure', desc: 'Guest lectures, industrial visits, and expert seminars from companies like P&G, EDWise, and more.' },
  { icon: Award, title: 'Placement Readiness', desc: 'Final resume reviews, company-specific prep, and dress code & etiquette grooming sessions.' },
]

export function TrainingPipelineSection() {
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
          <span className="section-label">How We Prepare Students</span>
          <h2 className="section-title">Training Pipeline</h2>
          <p className="section-subtitle">
            A structured, semester-wise training roadmap that takes students from fundamentals to placement-ready.
          </p>
        </motion.div>

        <div className="pipeline-grid">
          {stages.map((stage, i) => {
            const Icon = stage.icon
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
