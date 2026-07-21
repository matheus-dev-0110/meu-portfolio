"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function AboutSection() {
  const { language } = useLanguage()
  const t = content[language].about

  return (
    <section id="about" className="relative section-divider py-28 md:py-36" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="section-label">Quem sou</span>

          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
            {t.title}
          </h2>

          <div className="mt-2 space-y-4">
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.p1}
            </p>
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.p2}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
