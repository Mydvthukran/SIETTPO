import { motion } from 'framer-motion'
import {
  Code2,
  Cpu,
  Database,
  Globe,
  BrainCircuit,
  Terminal,
  Layers,
  Cloud,
  Cog,
  Smartphone
} from 'lucide-react'

const skills = [
  { name: 'Python', icon: Terminal },
  { name: 'Java', icon: Code2 },
  { name: 'React', icon: Globe },
  { name: 'AWS', icon: Cloud },
  { name: 'C++', icon: Layers },
  { name: 'AutoCAD', icon: Cog },
  { name: 'AI / ML', icon: BrainCircuit },
  { name: 'IoT', icon: Cpu },
  { name: 'SQL', icon: Database },
  { name: 'Mobile Dev', icon: Smartphone },
]

const doubled = [...skills, ...skills]

export function SkillsMarquee() {
  return (
    <section className="skills-marquee">
      <div className="container">
        <div className="skills-header">
          <p className="skills-header-text">
            Core Competencies & Technical Stack
          </p>
        </div>
      </div>
      <div className="skills-scroll">
        <div className="skills-fade-left" />
        <div className="skills-fade-right" />
        <motion.div
          className="skills-list"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((skill, i) => {
            const Icon = skill.icon
            return (
              <div
                key={`${skill.name}-${i}`}
                className="skill-item"
              >
                <Icon className="skill-item-icon" />
                <span className="skill-item-name">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
