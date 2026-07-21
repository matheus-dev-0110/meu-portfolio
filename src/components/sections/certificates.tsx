"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const certificates = [
  {
    title: "Professional Data Engineer - DataCamp",
    file: "/certificados/certificado_datacamp.pdf",
    img: "/certificados/datacamp-badge.svg",
  },
  {
    title: "Big Data & Analytics - FIAP",
    file: "/certificados/certificado_bigdata.pdf",
    img: "/certificados/Big Data & Analytics.png",
  },
  {
    title: "Business Intelligence (BI) - FIAP",
    file: "/certificados/certificado_BI.pdf",
    img: "/certificados/Business Intelligence.png",
  },
  {
    title: "Customer Experience Management - FIAP",
    file: "/certificados/Certificado_Customer.pdf",
    img: "/certificados/Customer Experience Management.png",
  }
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className="bg-[#0E1118] py-28 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Certificados
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl"
            >
              {cert.img && (
                <div className="relative mb-4 h-36 w-full sm:h-40">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <h3 className="mb-4 text-center text-lg font-semibold text-white sm:text-xl">
                {cert.title}
              </h3>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
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
