"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const certificates = [
  {
    title: "Professional Data Engineer",
    subtitle: "DataCamp",
    file: "/certificados/certificado_datacamp.pdf",
    img: "/certificados/datacamp-badge.svg",
    highlight: true,
  },
  {
    title: "Big Data & Analytics",
    subtitle: "FIAP",
    file: "/certificados/certificado_bigdata.pdf",
    img: "/certificados/Big Data & Analytics.png",
    highlight: false,
  },
  {
    title: "Business Intelligence (BI)",
    subtitle: "FIAP",
    file: "/certificados/certificado_BI.pdf",
    img: "/certificados/Business Intelligence.png",
    highlight: false,
  },
  {
    title: "Customer Experience Management",
    subtitle: "FIAP",
    file: "/certificados/Certificado_Customer.pdf",
    img: "/certificados/Customer Experience Management.png",
    highlight: false,
  },
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-divider py-28 md:py-36" style={{ background: "#080C16" }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Formação</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Certificados
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`card card-hover flex flex-col items-center p-5 ${
                cert.highlight ? "skill-card-primary" : ""
              }`}
            >
              <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg bg-black/30">
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-4 text-center">
                <h3 className="text-sm font-semibold text-white leading-tight">{cert.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{cert.subtitle}</p>
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-medium px-4 py-2 rounded-lg transition"
                style={{
                  border: "1px solid rgba(0,180,255,0.3)",
                  color: "var(--accent)",
                  background: "rgba(0,180,255,0.05)"
                }}
              >
                Ver PDF
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
