"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function AboutSection() {
  const { language } = useLanguage()
  const t = content[language].about

  return (
    <section id="about" className="relative bg-[#0B0E14] py-28 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 md:gap-6"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {t.title}
          </h2>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.p1}
          </p>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.p2}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
