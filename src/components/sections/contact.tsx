"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 }
  })
}

export default function ContactSection() {
  const { language } = useLanguage()
  const t = content[language].contact

  const channels = [
    {
      icon: Mail,
      href: `mailto:${t.email.value}`,
      label: "Email",
      value: t.email.value,
      primary: true,
    },
    {
      icon: MessageCircle,
      href: `https://wa.me/${t.whatsapp.value}`,
      label: "WhatsApp",
      value: "Enviar mensagem",
      primary: false,
    },
    {
      icon: Linkedin,
      href: `https://${t.linkedin.value}`,
      label: "LinkedIn",
      value: "Ver perfil",
      primary: false,
    },
  ]

  return (
    <section id="contact" className="relative section-divider py-28 md:py-36" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label">Vamos conversar</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400 sm:text-base">
            {t.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((item, i) => (
            <motion.a
              key={item.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center rounded-2xl p-8 transition-all ${
                item.primary
                  ? "text-white"
                  : "card card-hover"
              }`}
              style={
                item.primary
                  ? {
                      background: "linear-gradient(135deg, var(--accent), var(--accent-dim))",
                      boxShadow: "0 0 32px rgba(0,180,255,0.2)",
                    }
                  : {}
              }
            >
              <item.icon
                className="mb-3 h-6 w-6 transition group-hover:scale-110"
                style={{ color: item.primary ? "#fff" : "var(--accent)" }}
              />
              <span className={`text-sm font-semibold ${item.primary ? "text-white" : "text-white"}`}>
                {item.label}
              </span>
              <span className={`mt-1 text-xs ${item.primary ? "text-white/70" : "text-slate-500"}`}>
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
