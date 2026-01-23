"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function SkillsSection() {
  const { language } = useLanguage()
  const t = content[language].skills

  return (
    <section id="skills" className="bg-[#0E1118] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {t.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-lg font-semibold text-purple-400 sm:text-xl">
              {t.analyst}
            </h3>

            <ul className="space-y-2 text-sm text-slate-300 sm:text-base">
              {t.analystSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-lg font-semibold text-purple-400 sm:text-xl">
              {t.engineer}
            </h3>

            <ul className="space-y-2 text-sm text-slate-300 sm:text-base">
              {t.engineerSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
