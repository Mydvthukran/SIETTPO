import { motion } from 'framer-motion'
import { FileText, ClipboardList, UserCheck, Briefcase, CheckCircle } from 'lucide-react'
import { GradientButton } from './ui/gradient-button'

const steps = [
  { icon: ClipboardList, label: 'Register', desc: 'Company registers with TPC' },
  { icon: UserCheck, label: 'Shortlist', desc: 'Students screened & shortlisted' },
  { icon: Briefcase, label: 'Interview', desc: 'Technical & HR rounds conducted' },
  { icon: CheckCircle, label: 'Offer', desc: 'Offer letters rolled out' },
]

export function GuidelinesSection() {
  return (
    <section className="guidelines-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Recruitment Process</span>
          <h2 className="section-title">TPC Guidelines</h2>
        </motion.div>

        {/* 4-step timeline */}
        <motion.div
          className="guidelines-timeline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="guidelines-step">
                <div className="guidelines-step-icon">
                  <Icon />
                </div>
                <h4 className="guidelines-step-label">{step.label}</h4>
                <p className="guidelines-step-desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="guidelines-step-connector" />}
              </div>
            )
          })}
        </motion.div>

        {/* Description & Buttons */}
        <motion.div
          className="guidelines-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="guidelines-text">
            The Training &amp; Placement Cell follows a structured recruitment policy to ensure a smooth and transparent hiring process. Companies are requested to share the Job Description beforehand. Pre-placement talks, online/offline tests, and interviews are facilitated on campus. Our team ensures end-to-end coordination — from scheduling to offer rollout.
          </p>
          <div className="guidelines-buttons">
            <GradientButton>
              <FileText className="guidelines-btn-icon" /> Recruitment Process PDF
            </GradientButton>
            <GradientButton variant="variant">
              <FileText className="guidelines-btn-icon" /> TPC Guidelines PDF
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
