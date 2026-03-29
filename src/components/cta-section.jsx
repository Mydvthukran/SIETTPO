import { motion } from 'framer-motion'
import { GradientButton } from './ui/gradient-button'

export function CtaSection() {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="cta-title">
          Ready to hire the future?
        </h2>
        <p className="cta-description">
          Download our placement brochure for detailed program information, student profiles, and partnership opportunities.
        </p>
        <motion.div
          className="cta-button-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <GradientButton>Download Brochure</GradientButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
