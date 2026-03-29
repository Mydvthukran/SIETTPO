import { motion } from 'framer-motion'
import { DotScreenShader } from './ui/dot-shader-background'
import { GradientButton } from './ui/gradient-button'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <DotScreenShader dotColor="#00ff87" bgColor="#0a0a0a" dotOpacity={0.12} />
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="text-xs font-medium">Now Accepting Industry Partners for 2026</span>
          </div>
          <h1 className="hero-title">
            Bridging Academic Excellence with Industry Innovation.
          </h1>
          <p className="hero-description">
            Connecting forward-thinking organizations with the next generation of engineering talent from SIET Panchkula.
          </p>
          <div className="hero-buttons">
            <GradientButton>Partner with Us</GradientButton>
            <GradientButton variant="variant">Curriculum</GradientButton>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-image-container">
            <img
              src="/images/siet-campus.jpg"
              alt="SIET Panchkula Campus Building"
              className="object-cover w-full h-full"
            />
            <div className="hero-image-overlay">
              <p className="hero-image-caption">SIET Panchkula - Shaping Next-Gen Engineers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
