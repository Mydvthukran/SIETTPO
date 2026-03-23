import { motion } from 'framer-motion'
import { GradientButton } from './ui/gradient-button'

export function CtaSection() {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="cta-title">
          Ready to hire the future?
        </h2>
        <p className="cta-description">
          Download our placement brochure for detailed program information, student profiles, and partnership opportunities.
        </p>
        <div className="cta-button-wrapper">
          <GradientButton>Download Brochure</GradientButton>
        </div>
      </motion.div>
    </section>
  )
}
