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
  const [selectedDashboard, setSelectedDashboard] =
    useState<Dashboard | null>(null)

  return (
    <section id="projects" className="py-32 bg-[#0B0E14]">
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= TÍTULO ================= */}
        <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
          {t.title}
        </h2>

        {/* ================= PROJETO DESTAQUE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-lg"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

            {/* TEXTO */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {t.featured.title}
              </h3>

              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white">Desafio:</strong><br />
                  {t.featured.challenge}
                </p>

                <p className="whitespace-pre-line">
                  <strong className="text-white">Solução Técnica:</strong><br />
                  {t.featured.solution}
                </p>

                <p className="whitespace-pre-line">
                  <strong className="text-white">Impacto:</strong><br />
                  {t.featured.impact}
                </p>
              </div>
            </div>

            {/* IMAGEM DO PROJETO */}
            <div className="relative">
              <Image
                src="/projects/pipeline-architecture.png"
                alt="Arquitetura do pipeline"
                width={900}
                height={700}
                className="rounded-2xl border border-white/10 shadow-xl bg-black"
              />

              <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs text-white">
                Arquitetura do Projeto
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= SETA / HIERARQUIA ================= */}
        <div className="my-14 flex flex-col items-center text-purple-400">
          <ArrowDown size={36} />
          <span className="mt-2 text-sm uppercase tracking-wide opacity-80">
            Dashboards gerados a partir deste projeto
          </span>
        </div>

        {/* ================= DASHBOARDS DO CASE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid gap-8 md:grid-cols-3"
        >
          {t.caseDashboards.items.slice(0, 3).map((dash) => (
            <div
              key={dash.name}
              onClick={() => setSelectedDashboard(dash)}
              className="cursor-pointer rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-md transition hover:scale-[1.03]"
            >
              <h4 className="mb-3 text-sm font-semibold text-white">
                {dash.name}
              </h4>

              <div className="relative h-44 w-full overflow-hidden rounded-xl">
                <Image
                  src={dash.img}
                  alt={dash.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ================= BOTÃO BI ================= */}
        {!openDashboard && (
          <div className="flex justify-center">
            <button
              onClick={() => setOpenDashboard(true)}
              className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-purple-500"
            >
              {t.dashboards.title}
            </button>
          </div>
        )}

        {/* ================= BI EXPANDIDO ================= */}
        {openDashboard && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20 grid gap-8 md:grid-cols-3"
            >
              {t.dashboards.items.map((dash) => (
                <div
                  key={dash.name}
                  onClick={() => setSelectedDashboard(dash)}
                  className="cursor-pointer rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-md transition hover:scale-[1.03]"
                >
                  <h4 className="mb-3 text-sm font-semibold text-white">
                    {dash.name}
                  </h4>

                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={dash.img}
                      alt={dash.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setOpenDashboard(false)}
                className="rounded-xl bg-white/10 px-8 py-3 text-lg text-white transition hover:bg-white/20"
              >
                {t.dashboards.backBtn}
              </button>
            </div>
          </>
        )}
      </div>

      {/* ================= MODAL / LIGHTBOX ================= */}
      {selectedDashboard && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedDashboard(null)}
        >
          <div
            className="relative w-full max-w-6xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FECHAR */}
            <button
              onClick={() => setSelectedDashboard(null)}
              className="absolute -top-10 right-0 text-3xl text-white transition hover:text-purple-400"
            >
              ✕
            </button>

            {/* IMAGEM */}
            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <Image
                src={selectedDashboard.img}
                alt={selectedDashboard.name}
                fill
                className="object-contain"
              />
            </div>

            {/* TÍTULO */}
            <p className="mt-4 text-center text-sm text-white/70">
              {selectedDashboard.name}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
