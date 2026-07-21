"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function ExperienceSection() {
  const { language } = useLanguage()
  const t = content[language].experience

  return (
    <section id="experience" className="section-divider py-28 md:py-36" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label">Trajetória</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="space-y-14">
          {t.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 md:gap-8"
            >
              {/* Timeline */}
              <div className="relative flex flex-col items-center pt-1">
                <span
                  className="absolute top-0 h-full w-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <span className="relative z-10 h-3 w-3 rounded-full timeline-dot" />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pb-2">
                <span className="text-xs text-slate-500 sm:text-sm">{exp.period}</span>

                <h3 className="font-display mt-1.5 text-lg font-semibold text-white sm:text-xl">
                  {exp.role}
                </h3>

                <p className="mb-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
                  {exp.company}
                </p>

                <ul className="mb-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 sm:text-base">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
