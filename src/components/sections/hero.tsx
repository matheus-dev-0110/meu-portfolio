"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = content[language].hero

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Dot grid background — assinatura visual */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,180,255,0.10)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,229,255,0.07)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-32 md:flex-row md:justify-between md:gap-16 md:py-0">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex max-w-2xl flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <span className="section-label">{t.role}</span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Matheus{" "}
            <span className="gradient-text glow-accent">Nóbrega</span>
            <br />
            <span className="text-slate-300 font-medium">Fernandes</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.description}
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href="#projects" className="btn-accent text-sm text-center">
              {t.projectsBtn}
            </a>
            <a href="#contact" className="btn-ghost text-sm text-center">
              {t.contactBtn}
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="mt-2 flex gap-8 border-t border-white/10 pt-6 w-full justify-center md:justify-start">
            {[
              { value: "2+", label: "Anos em dados" },
              { value: "10+", label: "Pipelines migrados" },
              { value: "3", label: "Certificações" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-2xl font-bold" style={{ color: "var(--accent)" }}>
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative shrink-0"
        >
          {/* Anel decorativo */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-30"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
          <div
            className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] rounded-full p-[2px]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2), transparent)" }}
          >
            <div className="h-full w-full rounded-full overflow-hidden bg-[#0A101C]">
              <Image
                src="/profile.jpg"
                alt="Matheus Nóbrega"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, var(--accent))" }} />
        <span className="text-[10px] tracking-widest uppercase text-slate-500">scroll</span>
      </div>
    </section>
  )
}
