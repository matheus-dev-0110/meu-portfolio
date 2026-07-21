"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

type Dashboard = {
  name: string
  img: string
}

export default function ProjectsSection() {
  const { language } = useLanguage()
  const t = content[language]?.projects ?? content.pt.projects

  const [openDashboard, setOpenDashboard] = useState(false)
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(null)

  const featuredImage = t.featured.diagramImg ?? "/projects/pipeline-architecture.png"

  return (
    <section id="projects" className="section-divider py-28 md:py-36" style={{ background: "#080C16" }}>
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label">Cases</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        {/* ===== PROJETO PRINCIPAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-7 md:p-10"
          style={{ borderColor: "rgba(0,180,255,0.15)" }}
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="font-display mb-5 text-2xl font-bold text-white md:text-3xl">
                {t.featured.title}
              </h3>

              <div className="space-y-5 leading-relaxed">
                <div>
                  <span className="section-label text-[10px]">Desafio</span>
                  <p className="mt-2 text-sm text-slate-400 sm:text-base">{t.featured.challenge}</p>
                </div>

                <div>
                  <span className="section-label text-[10px]">Solução Técnica</span>
                  <p className="mt-2 whitespace-pre-line text-sm text-slate-400 sm:text-base">
                    {t.featured.solution}
                  </p>
                </div>

                {/* Antes / Depois */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border p-4" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                    <h4 className="mb-3 text-xs font-semibold uppercase text-slate-500 tracking-wider">Antes</h4>
                    <ul className="space-y-2">
                      {t.featured.before.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-400 sm:text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border p-4" style={{ borderColor: "rgba(0,180,255,0.15)", background: "rgba(0,180,255,0.03)" }}>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Depois</h4>
                    <ul className="space-y-2">
                      {t.featured.after.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <span className="section-label text-[10px]">Impacto</span>
                  <p className="mt-2 whitespace-pre-line text-sm text-slate-400 sm:text-base">
                    {t.featured.impact}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={featuredImage}
                alt="Arquitetura do pipeline"
                width={900}
                height={700}
                className="rounded-xl border shadow-xl bg-black"
                style={{ borderColor: "rgba(0,180,255,0.12)" }}
              />
              <span
                className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(0,180,255,0.2)",
                  color: "var(--accent)",
                }}
              >
                Arquitetura do Projeto
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===== SEGUNDO PROJETO ===== */}
        {t.secondary && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 card card-hover p-7 md:p-10"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
              <div>
                <h3 className="font-display mb-5 text-xl font-bold text-white md:text-2xl">
                  {t.secondary.title}
                </h3>

                <div className="space-y-5 leading-relaxed">
                  <div>
                    <span className="section-label text-[10px]">{language === "pt" ? "Desafio" : "Challenge"}</span>
                    <p className="mt-2 text-sm text-slate-400 sm:text-base">{t.secondary.challenge}</p>
                  </div>
                  <div>
                    <span className="section-label text-[10px]">{language === "pt" ? "Solução" : "Solution"}</span>
                    <p className="mt-2 whitespace-pre-line text-sm text-slate-400 sm:text-base">{t.secondary.solution}</p>
                  </div>
                  <div>
                    <span className="section-label text-[10px]">Impacto</span>
                    <p className="mt-2 whitespace-pre-line text-sm text-slate-400 sm:text-base">{t.secondary.impact}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={t.secondary.diagramImg}
                  alt={t.secondary.title}
                  width={900}
                  height={700}
                  className="rounded-xl border shadow-xl bg-black"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== SETA DASHBOARDS ===== */}
        <div className="my-14 flex flex-col items-center gap-2" style={{ color: "var(--accent)" }}>
          <ArrowDown size={28} className="opacity-60" />
          <span className="section-label text-[10px] opacity-80">{t.caseDashboards.title}</span>
        </div>

        {/* ===== DASHBOARDS DO CASE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-5 md:grid-cols-3"
        >
          {t.caseDashboards.items.slice(0, 3).map((dash) => (
            <div
              key={dash.name}
              onClick={() => setSelectedDashboard(dash)}
              className="card card-hover cursor-pointer p-4 transition hover:scale-[1.02]"
            >
              <h4 className="mb-3 text-sm font-semibold text-white">{dash.name}</h4>
              <div className="relative h-44 w-full overflow-hidden rounded-lg">
                <Image src={dash.img} alt={dash.name} fill className="object-cover" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== BOTÃO MAIS DASHBOARDS ===== */}
        {!openDashboard && (
          <div className="flex justify-center">
            <button
              onClick={() => setOpenDashboard(true)}
              className="btn-ghost text-sm"
            >
              {t.dashboards.title}
            </button>
          </div>
        )}

        {openDashboard && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 grid gap-5 md:grid-cols-3"
            >
              {t.dashboards.items.map((dash) => (
                <div
                  key={dash.name}
                  onClick={() => setSelectedDashboard(dash)}
                  className="card card-hover cursor-pointer p-4 transition hover:scale-[1.02]"
                >
                  <h4 className="mb-3 text-sm font-semibold text-white">{dash.name}</h4>
                  <div className="relative h-44 w-full overflow-hidden rounded-lg">
                    <Image src={dash.img} alt={dash.name} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setOpenDashboard(false)}
                className="btn-ghost text-sm"
              >
                {t.dashboards.backBtn}
              </button>
            </div>
          </>
        )}
      </div>

      {/* ===== LIGHTBOX ===== */}
      {selectedDashboard && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedDashboard(null)}
        >
          <div
            className="relative w-full max-w-6xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDashboard(null)}
              className="absolute -top-10 right-6 text-2xl text-white/60 transition hover:text-white"
            >
              ✕
            </button>
            <div
              className="relative h-[70vh] w-full overflow-hidden rounded-2xl border bg-black shadow-2xl"
              style={{ borderColor: "rgba(0,180,255,0.15)" }}
            >
              <Image
                src={selectedDashboard.img}
                alt={selectedDashboard.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">{selectedDashboard.name}</p>
          </div>
        </div>
      )}
    </section>
  )
}
