"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function SkillsSection() {
  const { language } = useLanguage()
  const t = content[language].skills

  return (
    <section id="skills" className="section-divider py-28 md:py-36" style={{ background: "#080C16" }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Stack</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Card principal — DE & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="card card-hover skill-card-primary p-6 md:p-8"
          >
            <h3 className="mb-5 font-display text-base font-semibold" style={{ color: "var(--accent)" }}>
              {t.engineer}
            </h3>
            <ul className="space-y-3">
              {t.engineerSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card secundário — Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="card card-hover p-6 md:p-8"
          >
            <h3 className="mb-5 font-display text-base font-semibold text-slate-400">
              {t.analyst}
            </h3>
            <ul className="space-y-3">
              {t.analystSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-400 sm:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
