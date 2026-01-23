"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function ExperienceSection() {
  const { language } = useLanguage()
  const t = content[language].experience

  return (
    <section id="experience" className="bg-[#0B0E14] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-16 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {t.title}
        </h2>

        <div className="space-y-16 md:space-y-20">
          {t.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 md:gap-8"
            >
              <div className="relative flex flex-col items-center">
                <span className="absolute top-0 h-full w-px bg-white/10" />
                <span className="relative z-10 mt-1 h-3 w-3 rounded-full bg-purple-500" />
              </div>

              <div className="flex-1">
                <span className="text-xs text-purple-400 sm:text-sm">
                  {exp.period}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {exp.role}
                </h3>

                <p className="mb-4 text-sm text-slate-400 sm:text-base">
                  {exp.company}
                </p>

                <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
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
