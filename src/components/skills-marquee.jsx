import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
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

const skillIcons = [Terminal, Code2, Globe, Cloud, Layers, Cog, BrainCircuit, Cpu, Database, Smartphone]
const skillNames = ['Python', 'Java', 'React', 'AWS', 'C++', 'AutoCAD', 'AI / ML', 'IoT', 'SQL', 'Mobile Dev']

const skills = skillNames.map((name, i) => ({ name, icon: skillIcons[i] }))
const doubled = [...skills, ...skills]

export function SkillsMarquee() {
  const { lang } = useLanguage()
  const t = translations[lang].skills

  return (
    <section className="skills-marquee">
      <div className="container">
        <div className="skills-header">
          <p className="skills-header-text">
            {t.header}
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
